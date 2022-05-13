const url = "https://simpsons-quotes-api.herokuapp.com/quotes";

const app = new Vue({
    el:"#app",
    data:{
        combo: {}
    },
    created(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.combo = data;
                console.log(this.combo)
            })
        }
    }
})