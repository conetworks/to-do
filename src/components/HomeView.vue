<template lang="pug">
.min-w-screen.min-h-screen.flex.place-content-center.py-14(class="bg-[#0a3b4d]")
    .flex.rounded-lg.place-content-center(class=" w-[90%] bg-[#dbecd4]")
        .flex.flex-col.gap-8.pt-20
            .flex.gap-2
                input.border-2.rounded-xl.p-2.font-semibold.text-sm.text-center(class='bg-transparent border-[#0a3b4d] placeholder-[#0a3b4d]' type='text' placeholder='New to-do' v-model="header")
                input.border-2.rounded-xl.p-2.font-semibold.text-sm.text-center(class='bg-transparent border-[#0a3b4d] placeholder-[#0a3b4d]' type='text' placeholder='Description' v-model="content")
                .rounded-md.text-sm.font-bold.p-2.cursor-pointer(@click="addNewTask" class="bg-[#0a3b4d] text-[#dbecd4]") ADD
            .text-lg.font-semibold.text-center(class="text-[#859ea8]") Current to-dos
                //-ul(v-for="todoItem in this.getTodoList :key="todoItem.header" :item="todoItem"")
                li.flex.gap-2 
                    .text-base.font-normal.text.black.py-2 {{ newTask }}
                    //-{{ this.item.header }}
                    //-{{ this.item.content }}
                    .grow
                    button.rounded-lg.border.text-sm.p-2(@click="checkTodo" class="border-[#859ea8] hover:text-[#8A084B] hover:border-[#8A084B]") Check
                    button.rounded-lg.border.text-sm.p-2(@click="deleteTodo" class="border-[#859ea8] hover:text-[#8A084B] hover:border-[#8A084B]") Delete


</template>

<script>
export default {
    data () {
        return {
            newTask: {
                header: "",
                content: "",
                isChecked: false,
            },
        }
    },
    props: {
        item: {
            id: String,
            header: String,
            content: String,
            isChecked: Boolean,
        },
    },
    methods: {
        addNewTask() {
            this.newTask.header = header
        }
        // async addNewTask() {
        //     await this.$store.dispatch("addNewTask", this.newTask);
        //     this.newTask.header = "";
        //     this.newTask.content = "";
        // },
        // checkTodo() {
        //     const todoData = {
        //         id: this.item.id,
        //         currentCheckState: this.item.isChecked,
        //     };
        //     this.$store.dispatch("checkTodo", todoData);
        // },
        // deleteTodo() {
        //     this.$store.dispatch("deleteTodo", this.item.id);
        // },
    },
}
</script> 