<template lang="pug">
.min-w-screen.min-h-screen.flex.place-content-center.py-28(class="bg-[#0a3b4d]")
    .flex.flex-col.gap-4.rounded-lg.place-content-center(class=" w-[60%] bg-[#dbecd4]")
        .text-lg.font-bold.text-center.pb-8(class="text-[#859ea8]") WELCOME BACK
        input.place-self-center.appearance-none.border-2.rounded-xl.p-2.font-semibold.text-sm.text-center(class='bg-transparent border-[#0a3b4d] placeholder-[#0a3b4d] w-[50%]' type='email' placeholder='email' v-model="email" required)
        input.place-self-center.appearance-none.border-2.rounded-xl.p-2.font-semibold.text-sm.text-center(class='bg-transparent border-[#0a3b4d] placeholder-[#0a3b4d] w-[50%]' type='text' placeholder='password' v-model="password" required)
        button.text-lg.font-semibold.text-center(class="text-[#8A084B] hover:text-[#859ea8]" @click="redirectHome") Login
        .flex.gap-2.justify-center.pt-12
            .text-sm.font-normal(class="text-[#0a3b4d]") I'm a new user
            button.text-sm.font-semibold(class="text-[#8A084B] hover:text-[#0a3b4d]" @click="redirectSignUp") Sign up
</template>

<script>
export default{
    methods: {
        redirectHome() {
            this.$router.push('/')
        },
        redirectSignUp() {
            this.$router.push('/sign-up')
        },
    }
}
</script>