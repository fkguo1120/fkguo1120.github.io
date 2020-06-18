<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md3>
            <h1 id="system-title" class="my-3">歡迎來到華語學習吧</h1>
            <v-card id="login-card" class="elevation-12">
              <v-toolbar dark color="#ff9800">
                <v-toolbar-title id="login-title">請先登入</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="email" id="email" name="email" label="請輸入email帳號" type="text" v-model="email" color="#ff9800"></v-text-field>
                  <v-text-field prepend-icon="lock" id="password" name="password" label="請輸入密碼" type="password" v-model="password" color="#ff9800"></v-text-field>
                </v-form>
                    <v-alert
                      :value="s"
                      color="success"
                      icon="check_circle"
                      outline
                    >
                      登入成功
                    </v-alert>
                    <v-alert
                      :value="alert"
                      color="error"
                      icon="warning"
                      outline
                    >
                      {{alertMessage}}
                    </v-alert>
              </v-card-text>
              <v-card-actions>
                <v-btn color="#ff9800" flat large @click="goregister()">尚未註冊嗎?</v-btn>
                <v-spacer></v-spacer>
                <v-btn dark color="#ff9800" @click="login()">登入</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
   export default {
    data: () => ({
      drawer: null,
      email: '',
      password: '',
      s: false,
      alert: false,
      alertMessage: ''
    }),
    props: {
      source: String
    },
    methods:{
      login(){
          axios.post('https://ncu-one.herokuapp.com/api/login',{
            "email": this.email,
            "password": this.password
          }).then((response) => {
            this.s = true
            this.alert = false
            console.log(response.data)
            sessionStorage.setItem("islogin", true);
            sessionStorage.setItem("name", response.data["name"]);
            this.$router.push('/home')
            console.log(this.$router)
            localStorage.setItem("user_id", response.data["user_id"]);
          }).catch(error => {
            this.s = false
            this.alert = true
            this.alertMessage = error.response.data.message
            console.log(error.response)
          });
      },
      goregister(){
        this.$router.push("/register");
      }
    }
  }
</script>
<style scoped lang="stylus">
    @import '../../../node_modules/vuetify/src/stylus/settings/_variables.styl';
    .application{
        font-family: 'Roboto',"微軟正黑體",sans-serif!important;
    }
    #inspire{
      background-color: #000;
      background-image: url('../../assets/32701ec377bf_cover.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    #login-card{
      border-radius: 10px 10px 5px 5px;
    }
    #login-title{
      font-weight: 700;
    }
    #system-title{
      color:#fff;
      text-align:center;
    }
</style>
