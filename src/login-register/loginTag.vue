<template>
    <navbarTag />
    <form class="card cards">
  <div class="form-group">
    <label  for="exampleInputEmail1"><h5> E-Posta </h5></label>
    <input v-model="todoList.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@gmail.com...">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"><h5> Şifre</h5></label>
    <input v-model="todoList.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Şifrenizi Giriniz">
  </div>
  <div >
  <button @click="loginPush()" type="submit" class="btn btn-success mt-2 mb-1">Giriş Yap</button>
</div>
    <div>
        <router-link :to="({name: 'registerPage'})"> <a href="#"><small class="text-red">Üye Değilim, üye Ol</small></a> </router-link>
    
    </div>
</form>
</template>

<script>
    import axios from "axios"
    import CryptoJs from "crypto-js"

    export default{
      data(){
        return{
          todoList:{
            email: null,
            password: null
          }
        }
      },
      methods:{
        loginPush(){
          const password= CryptoJs.SHA256(this.todoList.password, this.$store.getters._deletePassword).toString();
          axios.get(`http://localhost:3000/users?email=${this.todoList.email}&password=${password}`).then(
            login_response => {console.log(login_response)
              if(login_response?.data?.length > 0){
                this.$store.commit("setUser", login_response?.data[0])
                this.$router.push({name: 'homePage'})
              }else{
                alert("Böyle Bir Kullanıcı Bulunamadı")
              }
            }
            
          )
        }
      }
    }
</script>