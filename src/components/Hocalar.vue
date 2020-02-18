<template>
    <div>
        {{hocaIsmi}} hocanın dersleri
    </div>
</template>

<script>
export default {
    name:"Hocalar",
    data() {
        return {
            hocaIsmi:this.$route.params.isim
        }
    },
}
</script>