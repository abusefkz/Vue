<template>
    <navbarTag />
        <div class="animation text-center d-flex justify-content-center">
            <h4 >Aldığınız Tüm Ürünler Aynı Gün Kargoda</h4>
            <h4>İstanbul İçi Aynı Gün Teslimat</h4>
          </div>   
    <div class="container">
        <div class="row" >
            <div class="col-lg-2">
            <sideBar /> 
            </div>
            <div class="col-lg-10" >
                <div class="row product" >
                    <div class="col-lg-3" v-for="product in productList" :key="product.id" :items="productList">
                        <div  class="card">
                            <a  href="">
                        <img class="w-80" src="{{ product.img }}" alt="">
                        <h5 >{{ product.marka }} <span style="color: black;"> {{product.name}}</span></h5>
                        <span class="text-danger fw-bold">{{ product.price }}</span>
                    </a>
                    <div @click="this.$router.push({name: 'viewPage', params:{userId:product.id}})"><button  class="btn btn-secondary">Sepete Ekle</button></div>
                    
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
            
               
    
         
       
</template>

<script>
    import sideBar from "@/navbar-leftBar/sidebarTag"
    import axios from "axios"

    export default{
        components:{
            sideBar,
        },
        data(){
            return{
                productList:[]
            }
        },
        created(){
        axios.get('http://localhost:3000/products', this.productList).then(products_response => {
            this.productList = products_response?.data || []
        })
        }
           
    }
</script>