<template>
    <div v-for="task in tasks" :key="task.id">
        <Task :task="task"></Task>
    </div>
</template>

<script>
import Task from './Task';

export default {
    name: "tasks-component",
    props: {
        tasks: {
            type: Array,
        }
    },
    components:{
        Task
    }
}
</script>
