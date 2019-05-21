// Vue is an instance
new Vue({
    // to connect/control the vue-app division in html file,
    // 'el' -> element is used
    el: '#vue-app',
    data: {
         name: 'Rahul Trivedi',
         job: 'Intern',
         website: 'https://vuejs.org/v2/guide/',
         wage: 10,
         showName : true,
         vowels: ['a','e', 'i', 'o', 'u'],
         fruits: [
             {name: 'Apple', color: 'Red'},
             {name: 'Orange', color: 'Orange'},
             {name: 'Kiwi', color: 'green'}
              ] 
            },
    methods: {
        greet(time){
            return 'Hello! What are you do\'in at ' + time + ' ' + this.name + '? I know you are an ' + this.job +'!';
        },
        salary(){
            return 'I earn $' + this.wage + ' per hour!';
        },
        changeWage(amount){
            if(this.wage>=1){
                return this.wage += amount; 
            }else
             {return this.wage = 0;
            }
             
        },
        updateName(e){
            this.name = e.target.value
        },
        updatePosition(e){
            this.job = e.target.value
        },
        logMsg(){
            console.log("Message Logged")
        },
        toggle(){
            this.showName = ! this.showName
        }

    }
});