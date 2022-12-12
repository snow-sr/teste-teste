<template>
    <div class="h-screen flex">
        <div class="w-4/6">
            <div class="h-screen bg-image">
                <div class="w-full h-full bg-primary">
                </div>
            </div>
        </div>
        <div class="w-2/6 items-center bg-orange-300 p-2 flex flex-col justify-center items-center">
            <div class="w-9/12">
                <div class="flex justify-center">
                    <img src="./../assets/bola.png" class="w-32" alt="">
                </div>
                <div class="">
                    <form>
                        <!-- Email -->
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
                        </div>
                        <!-- Password -->
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <!-- Sign button -->
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                            <a class="inline-block align-baseline font-bold text-sm text-blue-900 hover:text-blue-600" href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .bg-image {
        background-image: url('../assets/background.png');
        color: #fff;
        background-size: cover;
        background-position: center;
    }
    .bg-primary {
        background-color: rgba(20, 65, 111, 0.723);
    }
</style>