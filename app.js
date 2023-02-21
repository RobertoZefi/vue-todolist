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

      }
    },

    methods: {
        removeTask(taskIndex){
            console.log(taskIndex, this.numberTaskToRemove)
            this.tasks.splice(taskIndex, this.numberTaskToRemove)
        }
    }
  }).mount('#app')