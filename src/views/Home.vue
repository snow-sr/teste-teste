<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Navbar
    },
    data() {
        return {
            menu: true
        }
    }
}
</script>

<template>
    <div class="h-screen bg-gray-700">
        <Navbar />
        <!-- Imagem header -->
        <div class="flex flex-col items-center justify-center h-1/4 border-1 ">
            <img src="../assets/background.png" alt="Header" class="w-full h-10">
        </div>
        <div class="flex">
        <div class="w-1/5" v-if="menu">
            <h1>
                MENU MODALIDADES
            </h1>
        </div>
        <div class="4/5"> 
            <h1>Noticias</h1>
        </div>
        </div>

</div>
</template>
