<template>
    <v-card color="white">
        <v-card-text>語音轉文字</v-card-text>
        <v-btn fab class="recordicon" color="error" size="120" @click="sss()"><v-icon size="60" v-html="'mic'">mdi-android</v-icon></v-btn>

        <v-list>
            <template v-for="(item, index) in translate">
            <v-list-tile :key="index" avatar >{{item}}</v-list-tile>
            </template>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                translate:[],
            }
        },
        methods:{
            sss(){
                axios.get('http://localhost:3001/test').then((response) => {
                    this.translate = response.data.map(result => result.alternatives[0].transcript)
                    console.log(this.translate)
                })
            }
        }
    }
</script>
