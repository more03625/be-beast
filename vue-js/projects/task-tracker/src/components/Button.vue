<template>
    <button @click="onClick()" class="btn">{{ text }}</button>
</template>

<script>
export default {
    name: 'add-task-button',
    props: {
        text: {
            type: String,
            isRequired: false,
            default: 'Add Task'
        },
        color: {
            type: String,
            isRequired: false
        },
    },
    methods: {
        onClick() {
            console.log('The button has been clicked!', this.tasks)
        }
    },


}
</script>

<style scoped>

</style>