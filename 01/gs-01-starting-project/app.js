/*
const input = document.querySelector("#goal");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
// const value = [];
button.addEventListener("click", () => {
// if(input.value){
//   value.push(input.value);
// }
// if(value.length > 0) {
//   let html = '';
//   value.forEach(function(e){
//       html += `<li>${e}</li>`;
//   })
//   ul.innerHTML = html;
// }
// input.value = '';

const listElement = document.createElement("li")
listElement.textContent  = input.value;
ul.appendChild(listElement);
input.value = '';
})
*/

//Vue

Vue.createApp({
    data: () => {
        return{
            goals:[],
            input:''
        }
    },
    methods:{
        addGoals(){
            this.goals.push(this.input)
            this.input = ''
        }

    }
}).mount("#app")