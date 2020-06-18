<template>
<div>
    <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :is-full-page="true"
        :width="128"
        :height="128"
        :loader="'Dots'"
        :color="'#ff9800'"
       ></loading>
    <v-card v-if="!token" color="white" class="px-5 py-5">
        <v-flex md12 class="text-xs-center">
            <div v-if="!file">
                <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragestart="dragging = true" @dragenter="dragging = true" @dragleave="dragging = false">
                    <div class="dropZone-info" @drag="onChange">
                        <!-- font-awesome upload icon -->
                        <span class="fa fa-cloud-upload dropZone-title"></span>
                        <span class="dropZone-title">點擊選擇檔案或拖曳檔案進來</span>
                        <div class="dropZone-upload-limit-info">
                            <div class="mt-3">支援音檔類型: WAV</div>
                            <div class="mt-1">最大限制: 10 MB</div>
                        </div>
                    </div>
                    <input type="file" id="FIP_PIC" @change="onChange">
                </div>
            </div>
            <div v-else class="dropZone-uploaded">
                <div class="dropZone-uploaded-info">
                    <v-btn color="error" size="120" @click="removeFile">重新選擇</v-btn>
                </div>
            </div>
            <div v-if="file" class="uploadedFile-info mt-3">
                <div>檔案名稱: {{ file.name }}</div>
                <div>檔案大小: {{ (file.size/1024/1024).toFixed(2) + 'MB' }}</div>
                <div>檔案類型: {{ extension }}</div>
            </div>
            <v-btn v-if="file" class="mt-5" large color="orange" dark @click="upload">上傳並製作演說稿</v-btn>
        </v-flex>
    </v-card>
    <v-card class="px-4" v-if="token" color="white">
        <v-list>
            <template v-for="(item, index) in translate">
                <span class="token-text" :key="index">{{item}}</span>
                <!-- <v-list-tile :key="index" avatar >{{item}}</v-list-tile> -->
            </template>
        </v-list>
    </v-card>
    <v-flex v-show="token" md12 class="text-xs-center">
        <v-btn  class="mt-5" large color="orange" dark @click="uploadManage()">紀錄並分析</v-btn>
    </v-flex>
</div>       
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    export default {
        data() {
            return {
                translate:[],
                translateString:'',
                file: '',
                dragging: false,
                token: false,
                isLoading: false
            }
        },
        components: {
            Loading
        },
        created(){
            localStorage.setItem("t_text", "");
        },
        methods: {
            onChange(e) {
                // 判斷拖拉上傳或點擊上傳的 event
                var files = e.target.files || e.dataTransfer.files;
                
                // 預防檔案為空檔
                if (!files.length) {
                    this.dragging = false;
                    return;
                }

                this.createFile(files[0]);
                // var _Profile_PIC = document.getElementById('FIP_PIC').value;
                // console.log(_Profile_PIC)
               
            },
            createFile(file) {
                // 附檔名判斷
                if (!file.type.match('audio/wav')) {
                    alert('請上傳wav類型的音檔，並不可大於10MB。');
                    this.dragging = false;
                    return;
                }

                // 檔案大小判斷
                if (file.size > 10000000) {
                    alert('please check file size no more than 10MB')
                    this.dragging = false;
                    return;
                }

                this.file = file;
                this.dragging = false;
                console.log(file)
            },
            removeFile() {
                this.file = '';
            },
            upload(){
                let json = new FormData();
                json.append('uploadFile', this.file)
                this.isLoading= true
                axios.post('https://ncu-learn.herokuapp.com/upload', json,
                {
                    headers: {
                        'enctype': 'multipart/form-data'
                    }
                })
                .then(res => {
                    alert("上傳成功。即將製作演說稿。")
                    this.sss()
                    this.token = true
                })
                .catch(error =>{
                    console.log(error)
                    this.isLoading= false
                    alert("上傳失敗!")
                })                               
            },
            sss(){
                axios.post('https://ncu-learn.herokuapp.com/test',{
                    "filename": this.file.name
                },{
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then((response) => {
                    this.translate = response.data.map(result => result.alternatives[0].transcript)
                    console.log(this.translate)
                    this.translateString = this.translate.toString().replace(/,/g,"")
                    this.isLoading = false
                    console.log('111111',this.translate)
                    console.log('222222',this.translateString)
                })
                .catch(error =>{
                    console.log(error)
                    this.isLoading = false
                    alert("解析失敗!")
                })
            },
            uploadManage(){
                let user_id = localStorage.getItem("user_id");
                let json2 = new FormData();
                json2.append('user_id', user_id)
                json2.append('audiofile', this.file)
                json2.append('original_name', this.file.name.toString().replace(".wav",""))
                json2.append('translate_text', this.translateString)
                axios.post('https://ncu-one.herokuapp.com/api/upload_audio_file',json2,
                {
                    headers: {
                        'enctype': 'multipart/form-data'
                    }
                }).then((response) => {
                    console.log(response.data)
                }).catch(error => {
                    console.log(error)
                });

                localStorage.setItem("t_text", this.translateString);
                this.$router.push('/nlptag')

            }
        },
        computed: {
            // 前端擷取附檔名
            extension() {
                return (this.file) ? this.file.name.split('.').pop() : '';
            }
        }
    }
</script>


<style>
.dropZone {
    height: 200px;
    position: relative;
    border: 2px dashed #eee;
}

.dropZone:hover {
    border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
    color: #1975A0;
}

.dropZone-info {
    color: #A8A8A8;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
}

.dropZone-title {
    color: #787878;
    font-size: 1.6em;
}

.dropZone input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

.dropZone-upload-limit-info {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

.dropZone-over {
    background: #5C5C5C !important;
    opacity: 0.8;
    border: 2px solid #2e94c4;
}

.dropZone-uploaded {
    height: 200px;
    position: relative;
    border: 2px dashed #eee;
}

.dropZone-uploaded-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #A8A8A8;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
}

.removeFile {
    width: 200px;
}

.btn-primary {
    color: #fff;
    background-color: #1170C8;
    border-radius: 5px;
}
.token-text{
    font-size: 18px;
    line-height: 2em;
}
</style>
