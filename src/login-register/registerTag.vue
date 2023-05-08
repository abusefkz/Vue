<template>
 
    <navbarTag />
    <form class="card cards">
        <div>
            <label for="exampleUsername"><h5>İsim</h5></label>
            <input v-model="todoList.username" type="text" class="form-control" id="exampleUsername" placeholder="İsminizi Giriniz">
        </div>
  <div class="form-group">
    <label for="exampleInputEmail1"><h5> E-Posta </h5></label>
    <input v-model="todoList.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@gmail.com...">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><h5> Şifre</h5></label>
    <input v-model="todoList.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Şifrenizi Giriniz">
  </div>
  <div >
  <button @click="registerPush()" type="submit" class="btn btn-success mt-2 mb-1">Giriş Yap</button>
</div>
    <div>
        <router-link :to="({name: 'loginPage'})"> <a href="#"><small class="text-red">Zaten üyeyim, Giriş Yap</small></a> </router-link>
    
    </div>
</form>
</template>

<script>
    import axios from "axios"
    import CryptoJs from "crypto-js"
    import {mapGetters} from "vuex"
    export default{
      data(){
        return{
          todoList:{
            username: null,
            email: null,
            password: null
          }
        }
      },
      methods:{
        registerPush(){
          const password = CryptoJs.SHA256(this.todoList.password, this.$store.getters._deletePassword).toString()
          axios.post("http://localhost:3000/users", {...this.todoList, password}).then(register_response => {
            console.log(register_response)
            this.$router.push({name: 'loginPage'})
          })
        }
      },
      computed:{
        ...mapGetters(["_deletePassword"])
      }
    }
</script>