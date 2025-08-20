const btn=document.querySelectorAll('.btn')
const AC=document.querySelector('.AC')
const DE=document.querySelector('.DE')
const equal=document.querySelector('.equal')

const inputfield=document.querySelector('.display input')
btn.forEach((b)=>{
b.addEventListener('click', ()=>{
    inputfield.value=inputfield.value+b.innerText
    setdata()
})
    
})

AC.addEventListener('click', ()=>{
    inputfield.value=''
    setdata()
})
DE.addEventListener('click', ()=>{
    inputfield.value=inputfield.value.slice(0, length-1)
    setdata()
})
equal.addEventListener('click', ()=>{
    inputfield.value=eval(inputfield.value)
    setdata()
})

function setdata(){
const set=localStorage.setItem('data', inputfield.value)
console.log(set);

}
function getdata(){
    inputfield.value=localStorage.getItem('data')
}
getdata()