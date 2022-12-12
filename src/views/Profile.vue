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
    <div class="h-screen bg-secondary">
        <Navbar/>
        <div class="flex h-screen justify-center items-center">
        <profile/>
        </div>
    </div>
</template>