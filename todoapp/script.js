const todolist=document.querySelector('ul')
const btn=document.querySelector('.btn')
const inputfield = document.querySelector('.input-field')


btn.addEventListener('click', ()=>{
    if(inputfield.value==='')
    {
       alert('must write something')
    }
    else{
        const todoitem=document.createElement('li')
        todoitem.innerText=inputfield.value
        todolist.append(todoitem)
        inputfield.value=''
        const span=document.createElement('span');
        span.innerHTML= '&times;'
        todoitem.append(span)
        setdata()
    
        // span.addEventListener('click', ()=>{
        //     todoitem.remove()
        //  setdata()
          
        // })
        // todoitem.addEventListener('click', () => {
        //     todoitem.classList.toggle('checked')
        //     setdata()
        // })
    }
})
todolist.addEventListener('click', (e)=>{
    if(e.target.tagName==='SPAN'){
        e.target.closest('li').remove()
    setdata()
    }
    else if(e.target.tagName==='LI'){

        e.target.closest('li').classList.toggle('checked')
        setdata()
    }
})
function setdata(){
    const setdata=localStorage.setItem('data',todolist.innerHTML)
    
}

function getdata(){
   todolist.innerHTML=localStorage.getItem('data')                
}
getdata()



















// function setdata(){
//     const setdata=localStorage.setItem('data',todolist.innerHTML)   
// }
// function getdata(){
//    todolist.innerHTML=localStorage.getItem('data')

// }

// getdata()