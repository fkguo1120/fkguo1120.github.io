<template>
  <div class="px-5 py-5">

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <p>{{editedItem.text}}</p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions class='justify-end'>
          <v-btn color="blue darken-1" flat @click.native="close">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



    <v-data-table
      :headers="headers"
      :items="desserts"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.created_at }}</td>
        <td class="text-xs-left">{{ props.item.audioname }}</td>

        <td class="text-xs-left layout">
          
          <v-btn icon class="mx-1" color="orange" dark @click="editItem(props.item)">
            <v-icon>text_format</v-icon>
          </v-btn>
          <a :href="props.item.audiofile" target="_blank" style="text-decoration: none;">
            <v-btn icon class="mx-1" color="orange" dark >
              <v-icon>audiotrack</v-icon>
            </v-btn>
          </a>
          <v-btn icon class="mx-1" color="orange" dark @click="toNlp(props.item)">
            <v-icon>article</v-icon>
          </v-btn>
        </td>
      </template>

    </v-data-table>

  </div>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: 'ID',align: 'left',sortable: false,value: 'created_at' },
        { text: '上傳時間',sortable: false, value: 'calories' },
        { text: '音檔名稱',sortable: false, value: 'fat' },
        { text: '操作',sortable: false,  value: 'name' }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        text:''
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.getList()
      localStorage.setItem("t_text", "");
    },

    methods: {
      getList(){
        let user_id = localStorage.getItem("user_id");
        axios.get(`https://ncu-one.herokuapp.com/api/list/${user_id}`,
        {
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(response => {
          console.log(response.data)
          this.desserts=response.data.list.map((item, index) => {
            item['id'] = index;
            item['audioname'] = item["audiofile"].replace('http://ncu-one.herokuapp.com/upload_audio_file/','')
            return item
          });
        })
        .catch(error =>{
          console.log(error)
        })
      },

      editItem (item) {
        console.log("123",item)
        this.editedItem.text = item.translate_text
        // this.editedIndex = this.desserts.indexOf(item)
        // this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      toNlp(item){
          localStorage.setItem("t_text", item.translate_text);
          this.$router.push('/nlptag')
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
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
</style>