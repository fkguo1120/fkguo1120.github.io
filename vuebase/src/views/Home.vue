<template>
    <div>
        <v-toolbar
                dense
                class="mb-3"
                color="#232323"
                dark
                extended
                extension-height="300"
                flat
        >
            <v-toolbar-title class="mx-auto" slot="extension">
                <span>歡迎來到華語學習吧!</span>
                <h2 class="h2_title">培養華語文「說」的教育內涵.</h2>
                <v-layout row>
                    <v-flex wrap>
                        <v-btn outline large fab color="white" class="outine-2">
                            <i class="fab fa-vuejs fa-3x"></i>
                        </v-btn>
                    </v-flex>
                    <v-flex wrap>
                        <v-btn outline large fab color="white" class="outine-2">
                            <i class="fab fa-node fa-3x"></i>
                        </v-btn>
                    </v-flex>
                    <v-flex wrap>
                        <v-btn outline large fab color="white" class="outine-2">
                            <i class="fab fa-laravel fa-2x"></i>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-toolbar-title>
        </v-toolbar>

        <v-container>
            <v-layout row>
                <v-flex xs12 md10 offset-md1>
                    <v-card flat class="card--flex-toolbar" color="transparent">
                        <v-container fluid grid-list-lg>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <h2 class="white--text"></h2>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 sm6 md6 lg4 v-for="(item,index) in links" :key="item.id">
                                    <v-hover>
                                        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                                            <v-img
                                                    src=""
                                                    aspect-ratio="2.75"
                                                    height="125px"
                                                    :class='`bbb-${index}`'
                                            ></v-img>

                                            <v-card-title primary-title>
                                                <div>
                                                    <h3 class="headline mb-0">{{item.title}}</h3>
                                                    <div class="home-description">
                                                        {{item.description}}
                                                    </div>
                                                </div>
                                            </v-card-title>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn :to="item.link" flat color="orange">進入</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-hover>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        id: '1',
                        title: '即席短演說',
                        description: '可以錄製您的即席短演說，並且將您的短演說轉換成演說稿。',
                        link: "dashboard/record"
                    },
                    {
                        id: '2',
                        title: '演說稿分析',
                        description: '分析您的演說稿，能有效得到詞性標註、詞性排列與中文語句解構的輔助。',
                        link: "dashboard/upload"
                    },
                    {
                        id: '3',
                        title: '小辭典',
                        description: '在了解語句解構的同時，若遇到不瞭解的詞，可以透過小辭典功能進行深度查詢。',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .outine-2 {
        border: 2px solid white;
    }

    .card--flex-toolbar {
        margin-top: -124px;
    }

    .learn-more-btn {
        text-transform: initial;
        text-decoration: underline;
    }

    .headline{
        font-family: "微軟正黑體",'Roboto',sans-serif!important;
        font-weight: 700;
    }

    .bbb-0{
        background-color: #8ad3f3;
    }

    .bbb-1{
        background-color: #f3c28a;
    }

    .bbb-2{
        background-color: #f38a8a;
    }

    .home-description{
        font-size: 18px;
    }

    @media (max-width: 767px) {
        .h2_title{
            font-size: 1.2em;
        }
    }

</style>
