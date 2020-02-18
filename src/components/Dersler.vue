<template>
    <div class="holder">
        <form @submit.prevent="dersEkle">
            <input type="text" placeholder="Ders Ekle" v-model="ders">
        </form>
        <ul>
            <li v-for="(data,index) in dersler" :key="index">{{index}}. {{data.ders}}
                <i class="fa fa-minus-circle" @click="dersSil(index)"></i>
            </li>
        </ul>

        <p v-if="dersler.length">Dersler sayısı: {{dersler.length}}</p>
        <p v-else>Henüz ders yok</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ders: "",
            dersler:[
                {"ders":"Matematik"},
                {"ders":"Fizik"}
            ]
        }
    },
    methods: {
        dersEkle(){
                    this.dersler.push({"ders":this.ders})
                    this.ders = ""
        },
        dersSil(id){
            this.dersler.splice(id,1)
        }
    },
}
</script>

<style scoped>
.holder {
    background: #fff;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #f5cd79;
    border-left:5px solid #574b90;
    border-right:5px solid #574b90;
    margin-bottom: 2px;
    color: #303952;
}

p{
    text-align: center;
    padding: 30px 0;
    color: #3d3d3d;
}

.container{
    box-shadow: 0px 0px 40px lightgray;
}

input{
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color:#687f7f
}

.alert{
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -2opx
}
</style>