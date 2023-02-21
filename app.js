const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks: [
            {
                text: 'Partecipare a lezione',
                done: true 
            },{
                text: 'Fare esercizio assegnato',
                done: false 
            },{
                text: 'Andare in palestra',
                done: false 
            }
        ]

      }
    }
  }).mount('#app')