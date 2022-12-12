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
    <main class="min-h-screen bg-gray-700">
        <div class="min-h-screen bg-primary">
            <div class="px-10 w-full bg-nav">
                <Navbar />
            </div>
            <!-- Imagem header -->
            <div class="bg-image-small w-full h-40">
                <div class="bg-primary w-full h-full border-b-4 border-orange-400"></div>
            </div>
            <div class="flex flex-col gap-8 w-full p-10">
                <div class="text-xl" v-if="menu">
                    <h2>
                        MENU MODALIDADES
                    </h2>
                    <div class="pt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptas omnis quis sed molestiae officiis saepe, earum dolorum quod eveniet iste consequatur vero deleniti. Laborum iste eligendi commodi quis libero.
                    </div>
                </div>
                <div>
                    <h2>
                        NOTICIAS
                    </h2>
                    <div class="pt-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad provident fuga iusto nisi, magnam aperiam voluptates, eaque dolorem molestiae ullam tempora eos aliquid quas dignissimos excepturi labore assumenda amet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repudiandae est similique rem molestiae earum alias omnis libero veritatis quibusdam, suscipit at officia fuga porro sapiente impedit quia accusantium! Veritatis.
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
    .bg-image-small {
        background-image: url('../assets/background.png');
        color: #fff;
        background-size: cover;
        background-position: center;
    }
</style>