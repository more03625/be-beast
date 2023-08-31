<template>
    <h1 :class="[task.reminder ? 'reminder' : '']" @click="onClickRemove(task.id)">{{ task.text }}</h1>
</template>

<script>
export default {
    name: "task-view",
    props: {
        task: {
            type: Object
        }
    },
    methods: {
        onClickRemove(id) {
            console.log('Clicked for remove!', id);
        }
    }
}
</script>

<style>
.reminder {
    background-color: red;
}
</style>