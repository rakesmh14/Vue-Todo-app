let vm = new Vue({
    el: "#root",
    data: {
        newTask: '',
        tasks: [],
        noTask: true,
        completedTasks: [],
        deletedTasks: [],
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.noTask = false;
            this.newTask = '';
        },
        taskCompleted(id) {
            // unused method
            // console.log(this.completedTasks);
        },
        taskDeleted(id) {
            // unused method
            // console.log(this.deletedTasks);
        },
    }
});
