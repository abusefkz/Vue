<template>
        <navbarTag />
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-10 card">
                    <div class="row">
                        <div class="col-4">
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner mt-2">
                    <div class="carousel-item active">
                    <img class="d-block w-100"  src="https://cdn.dsmcdn.com/ty183/product/media/images/20210929/13/137511765/221223124/1/1_org_zoom.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://cdn.dsmcdn.com/ty185/product/media/images/20210929/13/137511765/221223124/2/2_org_zoom.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="https://cdn.dsmcdn.com/ty185/product/media/images/20210929/13/137511765/221223124/5/5_org_zoom.jpg" alt="Third slide">
                    </div>
                </div>
                <a  class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span  class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
                </div>
                        </div>
                        <div class="col-8" >
             <p style="font-size: 28px;"><span class="fw-bold" >{{ viewProduct.marka }}</span> {{ viewProduct.name }} </p>                        
                            <p>Satıcı:  <a href="#">{{ viewProduct.marka }}</a></p>
                            <p class="display-6">{{ viewProduct.price }}</p>
                            <div class="mt-3">
                                
                                
                                <div class="d-flex" >
                                    <p class="fw-bold" style="margin: 2px;">Beden:</p>
                    <select v-model="viewProduct.categoryId" name="" id="">
                    
                        <option  v-for="item in bedenList" :key="item.id" :value="item.id">{{ item.beden }}</option>
                        
                    </select>
                            </div>
                            
                            <div id="button">
                                <button @click="selectPush()" class="btn">Sepete Ekle</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="col-sm-2">
                    
                </div>
            </div>
        </div>
</template>

<script>
 
import axios from 'axios';
    
    
    export default{
        data(){
            return{
                viewProduct:{
                    categoryId:null
                },
                
                bedenList:[],
            }
        },
        methods:{
            selectPush(){
                axios.post(`http://localhost:3000/newSepet`, this.viewProduct).then(newPush_response => {
                    console.log('newPush_response :>> ', newPush_response);
                })
            }
        },
        created(){
            const params = this.$route.params.userId
            axios.get(`http://localhost:3000/products/${params}?_expand=category}`).then(view_response => {
                console.log('view_response => :>> ', view_response);
                this.viewProduct = view_response?.data || [];
                console.log('this.viewProduct :>> ', this.viewProduct);
            }),
            axios.get(`http://localhost:3000/categories`, this.viewProduct?.categoryId).then(beden_response => {
                console.log('beden_response :>> ', beden_response);
                this.bedenList = beden_response?.data
            })
            
        }
    }
</script>