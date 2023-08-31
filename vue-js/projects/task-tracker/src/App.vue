<template>
  <h1>Rahul More here</h1>
  <Header title="Task Tracker App"></Header>
  <Tasks :tasks="tasks"></Tasks>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [{
      "id": 1,
      "text": "SMEF KT meeting",
      "day": "March 1st at 2:30pm",
      "reminder": false
    }, {
      "id": 2,
      "text": "SMEF Standup call",
      "day": "March 1st at 2:30pm",
      "reminder": true
    }, {
      "id": 3,
      "text": "SMEF Status call",
      "day": "March 1st at 2:30pm",
      "reminder": true
    }];
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
