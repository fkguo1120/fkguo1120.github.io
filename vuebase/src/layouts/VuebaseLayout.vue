<template>
    <v-app>
        <v-navigation-drawer
                width="250"
                class="mt-5 blue-grey darken-4"
                dark
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                fixed
                app
        >

            <v-tooltip right>
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/home" exact>
                            <v-list-tile-action>
                                <v-icon>home</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>總纜</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>總纜</span>
            </v-tooltip>
            <v-divider></v-divider>

            <v-list subheader :class="{'list-border-bottom' : miniVariant}">
                <v-subheader>短演說</v-subheader>
                <template v-for="item in analyticsItems">
                    <v-tooltip right >
                        <v-list-tile
                                :key="item.icon"
                                :to="item.link"
                                exact
                                slot="activator"
                        >
                            <v-list-tile-action>
                                <v-icon v-html="item.icon"></v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title  v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <span v-text="item.title"></span>
                    </v-tooltip>
                </template>
            </v-list>
            <v-divider></v-divider>

            <v-list subheader>
                <v-subheader>紀錄</v-subheader>
                <template v-for="item in developItems">
                    <v-tooltip right>
                        <v-list-tile
                                :key="item.icon"
                                :to="item.link"
                                exact
                                slot="activator"
                        >
                            <v-list-tile-action>
                                <v-icon v-html="item.icon"></v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <span v-text="item.title"></span>
                    </v-tooltip>
                </template>
            </v-list>
            <!--<v-divider></v-divider>-->
            <!-- <v-list subheader>
                <v-subheader>解析區</v-subheader>
                <template v-for="item in nlpItems">
                    <v-tooltip right>
                        <v-list-tile
                                :key="item.icon"
                                :to="item.link"
                                exact
                                slot="activator"
                        >
                            <v-list-tile-action>
                                <v-icon v-html="item.icon"></v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <span v-text="item.title"></span>
                    </v-tooltip>
                </template>
            </v-list> -->

        </v-navigation-drawer>


        <v-toolbar
                id="top_bar"
                app
                flat
                dense
                dark
        >


           
                <v-list-tile-action v-if="!miniVariant">
                    <v-icon large color="orange">invert_colors</v-icon>
                </v-list-tile-action>

                <v-list-tile-action v-if="!miniVariant">
                    <v-list-tile-title>
                        <h2 v-text="appName"></h2>
                    </v-list-tile-title>
                </v-list-tile-action>
                
                <v-list-tile-action>
                    <v-btn icon @click.stop="miniVariant = !miniVariant">
                        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                    </v-btn>
                </v-list-tile-action>
           

        

            <v-toolbar-side-icon
                    @click.stop="drawer = !drawer"
                    class="hidden-lg-and-up"
                    :class="searching ? 'hidden-xs-only' : ''"
            />
            <v-spacer></v-spacer>

            <!-- <v-btn icon @click.native.stop="searchBegin">
                <v-icon>search</v-icon>
            </v-btn>
            <div :class="{'searching--closed': !searching}" class="searching">
                <v-text-field
                        id="search"
                        v-model="search"
                        append-icon="close"
                        @click:append="searchEnd"
                        label="Search"
                        hide-details
                        single-line
                        color="white"
                        @blur="onBlur"
                ></v-text-field>
            </div>
 -->
            <!-- <v-tooltip bottom>
                <v-btn icon @click.stop="rightDrawer = !rightDrawer" slot="activator">
                    <v-badge color="red" overlap>
                        <span slot="badge">2</span>
                        <v-icon>notifications</v-icon>
                    </v-badge>
                </v-btn>
                <span>2 unread notifications</span>
            </v-tooltip> -->

            <v-menu>
                <v-btn icon slot="activator">
                    <v-avatar class="white" size="32">
                        <v-icon color="primary">person</v-icon>
                    </v-avatar>
                </v-btn>
                <v-list class="pa-0 mt-5" light>
                    <v-list-tile avatar>
                        <v-list-tile-action>
                            <v-icon>person</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{name}}</v-list-tile-title>
                            <v-list-tile-sub-title></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>


                    <v-list-tile key="lock_open" @click="logout()">
                        <v-list-tile-action>
                            <v-icon>lock_open</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>登出</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    
                </v-list>
            </v-menu>
        </v-toolbar>

        <v-content>
            <router-view/>
        </v-content>

        <!-- <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                fixed
                app
        >
            <v-toolbar flat prominent dark class="primary">
                <v-toolbar-title>Notifications</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.stop="rightDrawer = false">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list subheader dense>
                <v-subheader>All notifications</v-subheader>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>person_add</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        12 new users registered
                    </v-list-tile-title>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile @click="">
                    <v-list-tile-action>
                        <v-icon>data_usage</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>
                        DB overloaded 80%
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer> -->
    </v-app>
</template>

<script>
    export default {
        name: 'VuebaseLayout',

        data() {
            return {
                name:'',
                appName: "華語學習吧",
                drawer: true,
                fixed: false,
                analyticsItems: [
                    {
                        icon: 'comment',
                        title: '即席短演說',
                        link: '/dashboard/record'
                    }
                ],
                developItems: [
                    {
                        icon: 'supervisor_account',
                        title: '管理紀錄',
                        link: '/nlpmanage'
                    }
                ],
                nlpItems: [
                    {
                        icon: 'supervisor_account',
                        title: 'NLP分析',
                        link: '/nlptag'
                    }
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                tabs: null,
                tabsItems: [
                    {
                        id: 1,
                        title: 'Indicators',
                        link: 'indicators'
                    },
                    {
                        id: 2,
                        title: 'Backup',
                        link: 'backup'
                    },
                    {
                        id: 3,
                        title: 'Logs',
                        link: 'logs'
                    }
                ],
                searching: false,
                search: ''
            }
        },

        mounted(){
            this.name = sessionStorage.getItem('name');
        },

        methods: {
            onBlur() {
                this.searching = false
                this.search = ''
            },

            searchBegin() {
                this.searching = true
                setTimeout(() => document.querySelector('#search').focus(), 50)
            },

            searchEnd() {
                this.searching = false
                this.search = ''
                document.querySelector('#search').blur()
            },

            logout() {
                sessionStorage.clear()
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../node_modules/vuetify/src/stylus/settings/_variables.styl';

    .application{
        font-family: 'Roboto',"微軟正黑體",sans-serif!important;
    }

    #top_bar{
        z-index :3;
        background-color: #171f23;
        padding-left: 0px!important;
    }
    #top_bar .v-toolbar__content{ 
        padding: 0 24px 0 0!important;
    }

    .bottom-menu {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .searching {
        overflow: hidden;
        width: 208px;
        padding-left: 8px;
        transition: $primary-transition;
    }

    .searching--closed {
        padding-left: 0;
        width: 0;
    }

    .searching > * {
        right: 8px;
    }

    .searching--closed > * {
        display: none;
    }

    .hidden-searching {
        @media $display-breakpoints.sm-and-down {
            display: none !important;
        }
    }

    .list-border-bottom {
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

</style>
