<script>
import Navbar from '../components/Navbar.vue';
import Profile from "../components/ProfileInfo.vue";
export default {
    components: {
        Navbar,
        Profile
    },
    data() {
        return {
            Profile: {}
        }
    }
}
</script>
<template>
    <div class="h-screen bg-gray-700">
        <div class="bg-primary min-h-full">
            <div class="bg-nav">
                <Navbar/>
            </div>
            <div class="flex justify-center mt-32">
                <profile/>
            </div>
        </div>
    </div>
</template>