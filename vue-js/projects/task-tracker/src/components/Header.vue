<template>
    <header>
        <h1>Welcome to {{ title }}</h1>
        <Button text="Click me"></Button>
    </header>
</template>

<script>
import Button from './Button';

export default {
    name: 'task-tracker-header',
    props: {
        title: {
            type: String,
            default: 'Facebook'
        },
    },
    components:{
        Button,
    }
}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>