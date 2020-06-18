<template>
    <v-card color="white py-5">
        <v-flex md12 class="text-xs-center mb-5">
            <v-btn fab class="recordicon" color="error" size="120" @click="startRecording()" :disabled="recordState"><v-icon size="60" v-html="'mic'">mdi-android</v-icon></v-btn>
            <v-btn fab class="recordicon" color="error" @click="stopRecording()" :disabled="stopState"><v-icon size="60" v-html="'mic_off'">mdi-android</v-icon></v-btn>
        </v-flex>
        <v-flex v-if="timer" md12 class="text-xs-center mb-5">
            <label id="minutes">00</label>
            <label id="colon">:</label>
            <label id="seconds">00</label>
        </v-flex>

        <v-flex v-if="stop" md12 class="text-xs-center">
            <div class="text-center">
                <h2>下載音檔</h2>
                <ul id="recordingslist"></ul>
            </div>
        </v-flex>                
    </v-card>
</template>

<script>
    import Recorder from 'recorder-js';
    const audioContext =  new (window.AudioContext || window.webkitAudioContext)();
 
    const recorder = new Recorder(audioContext, {
    
    });
    navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream => recorder.init(stream))
    .catch(err => console.log('Uh oh... unable to get stream...', err));    
    export default {
        data() {
            return {
                translate:[],
                recordState: false,
                stopState: true,
                timer: true,
                stop: false,
                isRecording: false,
                blob: null
            }
        },
        created(){
            localStorage.setItem("t_text", "");
            //  navigator.mediaDevices.getUserMedia({audio: true})
            // .then(stream => recorder.init(stream))
            // .catch(err => console.log('Uh oh... unable to get stream...', err));
        },
        mounted(){
            // navigator.mediaDevices.getUserMedia({audio: true})
            // .then(stream => recorder.init(stream))
            // .catch(err => console.log('Uh oh... unable to get stream...', err));
        },
        methods: {
            startRecording() {
                recorder.start().then(() => this.isRecording = true);
                this.recordState = true;
                this.stopState = false;

                var minutesLabel = document.getElementById("minutes");
                var secondsLabel = document.getElementById("seconds");
                var totalSeconds = 0;
                setInterval(setTime, 1000);

                function setTime()
                {
                    ++totalSeconds;
                    secondsLabel.innerHTML = pad(totalSeconds%60);
                    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
                }

                function pad(val)
                {
                    var valString = val + "";
                    if(valString.length < 2)
                    {
                        return "0" + valString;
                    }
                    else
                    {
                        return valString;
                    }
                }


            },
            stopRecording() {
                recorder.stop().then((({blob,buffer})=>{
                    this.blob = blob
                    console.log("blob:" + this.blob)
                    var recordingslist = document.getElementById("recordingslist");
                    var url = URL.createObjectURL(this.blob);
                    console.log("url:" + url)
                    var li = document.createElement('li');
                    console.log("li:" + li)
                    var au = document.createElement('audio');
                    var hf = document.createElement('a');

                    au.controls = true;
                    au.src = url;
                    hf.href = url;
                    hf.download = new Date().toISOString() + '.wav';
                    hf.innerHTML = hf.download;
                    li.appendChild(au);
                    li.appendChild(hf);
                    recordingslist.appendChild(li);
                }));
                this.recordState = true;
                this.stopState = true;
                this.timer = false;
                this.stop = true;
                recorder.clear()

                // createDownloadLink();

            }
        },
    }


// const createDownloadLink= () => recorder.exportWAV(function(blob) {
//         console.log("blob:" + blob)
//         var recordingslist = document.getElementById("recordingslist");
//         var url = URL.createObjectURL(blob);
//         console.log("url:" + url)
//         var li = document.createElement('li');
//         console.log("li:" + li)
//         var au = document.createElement('audio');
//         var hf = document.createElement('a');

//         au.controls = true;
//         au.src = url;
//         hf.href = url;
//         hf.download = new Date().toISOString() + '.wav';
//         hf.innerHTML = hf.download;
//         li.appendChild(au);
//         li.appendChild(hf);
//         recordingslist.appendChild(li);
//     });

</script>
<style>
    #recordingslist{list-style: none; }
    #recordingslist audio { display: block; margin:10px auto; }
    .recordicon{width: 100px;height:100px; }
</style>