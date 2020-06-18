<template>

<div>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>

      <v-toolbar card dark color="primary">
        <v-btn icon dark @click.native="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>詞性表</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      
      <v-card-text>

          <table style="margin:0 auto">
          <colgroup>
          <col style="width: 50%">
          <col style="width: 50%">
          </colgroup>
          <thead>
          <tr class="row-odd"><th class="head"><p></p></th>
          <th class="head"><p></p></th>
          </tr>
          </thead>
          <tbody>
          <tr class="row-even"><td><p>A</p></td>
          <td><p>非謂形容詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Caa</p></td>
          <td><p>對等連接詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Cab</p></td>
          <td><p>連接詞，如：等等</p></td>
          </tr>
          <tr class="row-odd"><td><p>Cba</p></td>
          <td><p>連接詞，如：的話</p></td>
          </tr>
          <tr class="row-even"><td><p>Cbb</p></td>
          <td><p>關聯連接詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>D</p></td>
          <td><p>副詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Da</p></td>
          <td><p>數量副詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Dfa</p></td>
          <td><p>動詞前程度副詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Dfb</p></td>
          <td><p>動詞後程度副詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Di</p></td>
          <td><p>時態標記</p></td>
          </tr>
          <tr class="row-even"><td><p>Dk</p></td>
          <td><p>句副詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>DM</p></td>
          <td><p>定量式</p></td>
          </tr>
          <tr class="row-even"><td><p>I</p></td>
          <td><p>感嘆詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Na</p></td>
          <td><p>普通名詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Nb</p></td>
          <td><p>專有名詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Nc</p></td>
          <td><p>地方詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Ncd</p></td>
          <td><p>位置詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Nd</p></td>
          <td><p>時間詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Nep</p></td>
          <td><p>指代定詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Neqa</p></td>
          <td><p>數量定詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Neqb</p></td>
          <td><p>後置數量定詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Nes</p></td>
          <td><p>特指定詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Neu</p></td>
          <td><p>數詞定詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Nf</p></td>
          <td><p>量詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Ng</p></td>
          <td><p>後置詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>Nh</p></td>
          <td><p>代名詞</p></td>
          </tr>
          <tr class="row-even"><td><p>Nv</p></td>
          <td><p>名物化動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>P</p></td>
          <td><p>介詞</p></td>
          </tr>
          <tr class="row-even"><td><p>T</p></td>
          <td><p>語助詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VA</p></td>
          <td><p>動作不及物動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>VAC</p></td>
          <td><p>動作使動動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VB</p></td>
          <td><p>動作類及物動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>VC</p></td>
          <td><p>動作及物動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VCL</p></td>
          <td><p>動作接地方賓語動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>VD</p></td>
          <td><p>雙賓動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VF</p></td>
          <td><p>動作謂賓動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>VE</p></td>
          <td><p>動作句賓動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VG</p></td>
          <td><p>分類動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>VH</p></td>
          <td><p>狀態不及物動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VHC</p></td>
          <td><p>狀態使動動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>VI</p></td>
          <td><p>狀態類及物動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VJ</p></td>
          <td><p>狀態及物動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>VK</p></td>
          <td><p>狀態句賓動詞</p></td>
          </tr>
          <tr class="row-odd"><td><p>VL</p></td>
          <td><p>狀態謂賓動詞</p></td>
          </tr>
          <tr class="row-even"><td><p>V_2</p></td>
          <td><p>有</p></td>
          </tr>
          <tr class="row-odd"><td></td>
          <td></td>
          </tr>
          <tr class="row-even"><td><p>DE</p></td>
          <td><p>的之得地</p></td>
          </tr>
          <tr class="row-odd"><td><p>SHI</p></td>
          <td><p>是</p></td>
          </tr>
          <tr class="row-even"><td><p>FW</p></td>
          <td><p>外文</p></td>
          </tr>
          <tr class="row-odd"><td></td>
          <td></td>
          </tr>
          <tr class="row-even"><td><p>COLONCATEGORY</p></td>
          <td><p>冒號</p></td>
          </tr>
          <tr class="row-odd"><td><p>COMMACATEGORY</p></td>
          <td><p>逗號</p></td>
          </tr>
          <tr class="row-even"><td><p>DASHCATEGORY</p></td>
          <td><p>破折號</p></td>
          </tr>
          <tr class="row-odd"><td><p>DOTCATEGORY</p></td>
          <td><p>點號</p></td>
          </tr>
          <tr class="row-even"><td><p>ETCCATEGORY</p></td>
          <td><p>刪節號</p></td>
          </tr>
          <tr class="row-odd"><td><p>EXCLAMATIONCATEGORY</p></td>
          <td><p>驚嘆號</p></td>
          </tr>
          <tr class="row-even"><td><p>PARENTHESISCATEGORY</p></td>
          <td><p>括號</p></td>
          </tr>
          <tr class="row-odd"><td><p>PAUSECATEGORY</p></td>
          <td><p>頓號</p></td>
          </tr>
          <tr class="row-even"><td><p>PERIODCATEGORY</p></td>
          <td><p>句號</p></td>
          </tr>
          <tr class="row-odd"><td><p>QUESTIONCATEGORY</p></td>
          <td><p>問號</p></td>
          </tr>
          <tr class="row-even"><td><p>SEMICOLONCATEGORY</p></td>
          <td><p>分號</p></td>
          </tr>
          <tr class="row-odd"><td><p>SPCHANGECATEGORY</p></td>
          <td><p>雙直線</p></td>
          </tr>
          <tr class="row-even"><td></td>
          <td></td>
          </tr>
          <tr class="row-odd"><td><p>WHITESPACE</p></td>
          <td><p>空白</p></td>
          </tr>
          </tbody>
          </table>



      </v-card-text>
      <v-card-actions class='justify-end'>
        <v-btn color="blue darken-1" flat @click.native="close">關閉</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>




    <v-dialog v-model="dialogn" max-width="500px">
      <v-card>

        <v-toolbar card dark color="primary">
          <v-btn icon dark @click.native="dialogn = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>說明</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <p>例如：人名、地名、組織名、時間，在生醫領域中也可能是藥品名、分子式等等。</p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions class='justify-end'>
          <v-btn color="blue darken-1" flat @click.native="close2">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>







 <v-layout row>
    <v-flex xs12  sm10 offset-sm1>
      <loading :active.sync="isLoading" 
        :can-cancel="false" 
        :is-full-page="true"
        :width="128"
        :height="128"
        :loader="'Dots'"
        :color="'#ff9800'"
      ><span class="loading-text">分析中</span></loading>

      <h2 class="mt-5 ml-1">斷句，詞性分析: </h2>
      <v-btn class="mx-1  mb-2" color="orange" dark @click="editItem()">
        詞性表
      </v-btn>
      <v-card class="px-5 py-4  mt-2">
        <v-list two-line>
          <div v-for="(item, index) in ws"  class="my-2">
              <span v-for="item2 in item" class="nlp-word">
                {{item2.word}}
                <sub>{{item2.pos}}</sub><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </span>
              <hr class="nlp-hr">
          </div>
        </v-list>
      </v-card>

      <h2 class="mt-5 ml-1">實體辨識分析: </h2>
        <v-btn class="mx-1 mb-2" color="orange" dark @click="editItem2()">
          說明
        </v-btn>
      <v-card class="px-5 py-4 mt-2 mb-5" >
        <v-list two-line>
          <div v-for="(item, index) in ner"  class="my-2">
              {{item.text}}
              <sub>({{item.ner}})</sub><span></span>
              <hr class="nlp-hr">
          </div>
        </v-list>
      </v-card>

    </v-flex>
  </v-layout>
</div>
</template>


<script>
  // Import component
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';
  export default {
    data: () => ({
        dialog:false,
        dialogn:false,
        t_text:'',
        isLoading: false,
        ws:[],
        ner:[]
    }),
    components: {
        Loading
    },

    computed: {
    },

    watch: {
    },

    created () {
      this.t_text = localStorage.getItem("t_text");
      this.isLoading= true
      let data={
        text:this.t_text
      }
      axios.post('https://89c2323f0bc9.ngrok.io/pos',data).then((response) => {
        this.ws = response.data.ws
        console.log(response.data.ws)
        axios.post('https://89c2323f0bc9.ngrok.io/ner',data).then((response) => {
          this.ner = response.data.ner
          this.isLoading= false
        }).catch(error =>{
          console.log(error)
          this.isLoading = false
          alert("分析失敗!因伺服器已停止。")
        })        
      }).catch(error =>{
        console.log(error)
        alert("分析失敗!因伺服器忙碌，將重新執行一次。")
        axios.post('https://89c2323f0bc9.ngrok.io/pos',data).then((response) => {
          this.ws = response.data.ws
          console.log(response.data.ws)
          axios.post('https://89c2323f0bc9.ngrok.io/ner',data).then((response) => {
            this.ner = response.data.ner
            this.isLoading= false
          }).catch(error =>{
            console.log(error)
            this.isLoading = false
            alert("分析失敗!因伺服器已停止。")
          })        
        }).catch(error =>{
          console.log(error)
          this.isLoading = false
          alert("分析失敗!因伺服器已停止。")
        })
      })

    },

    methods: {

      editItem () {
        this.dialog = true
      },

      close () {
        this.dialog = false
      },

      editItem2 () {
        this.dialogn = true
      },

      close2 () {
        this.dialogn = false
      },

    }
    
  }
</script>

<style>
.theme--light.v-table thead th {
    background-color: rgb(38, 50, 56);
    border-color: rgb(38, 50, 56);
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
}
.nlp-hr{
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
}
.nlp-word{
  font-size: 16px;
}
sub {
    bottom: -.25em;
    font-weight: 700;
}

sub{
    position: relative;
    color:#ff9800;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}
.loading-text{
  color:#ff9800;
  font-size: 36px;
  font-weight: 700;
}
</style>