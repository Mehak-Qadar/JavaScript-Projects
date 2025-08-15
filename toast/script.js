let error ='<i class="fa-solid fa-circle-xmark"></i> error'
let success =' <i class="fa-solid fa-circle-check"></i> success'
let invalid ='<i class="fa-solid fa-circle-exclamation"></i>  invalid'
const container = document.querySelector('.toastcontainer')
function createtoast(msg){
const toast=document.createElement('div')
toast.classList.add('toast')
toast.classList.add('right')
toast.innerHTML=msg;
if(msg.includes('error')){
    toast.classList.add('error')
}
if(msg.includes('invalid')){
    toast.classList.add('invalid')
}
container.append(toast)
setTimeout(()=>{
toast.remove()
},5000)
}