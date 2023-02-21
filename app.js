const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks: [
            {
                text: 'Partecipare a lezione',
                done: false 
            },{
                text: 'Fare esercizio assegnato',
                done: true 
            },{
                text: 'Andare in palestra',
                done: false 
            },
        ],

        numberTaskToRemove: 1,
        newTask: '',
      }
    },

    methods: {
        removeTask(taskIndex){
            console.log(taskIndex, this.numberTaskToRemove)
            this.tasks.splice(taskIndex, this.numberTaskToRemove)
        },

        addTask(){
            this.tasks.push({text: this.newTask, done:false})
            this.newTask = ''
        },

        changeTrueFalse(element){
            console.log(element)
            if (element === false){
                this.tasks.done = true
            } else {
                this.tasks.done = false
            }
            console.log(this.tasks.done, this.tasks)
            return this.tasks.done
        }
    }
  }).mount('#app')