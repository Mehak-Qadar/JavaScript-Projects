const btn = document.querySelector('.btn')
const notes = document.querySelector('.notes')
function shownotes(){
    notes.innerHTML=localStorage.getItem('notes')
}
shownotes()
function updatestorage(){
    localStorage.setItem('notes', notes.innerHTML)
}
btn.addEventListener('click', () => {
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    const para = document.createElement('p')
    const icon = document.createElement('i')
    para.className = 'note'
    para.setAttribute("contenteditable", "true")
    icon.className = 'fa-solid fa-trash'
    notes.appendChild(wrapper).appendChild(para)
    wrapper.appendChild(icon)
    updatestorage()
})
notes.addEventListener('click', (e) => {
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove()
        updatestorage()
    }
    else if(e.target.tagName==='P'){
        const allpara=document.querySelectorAll('.note')
        allpara.forEach((para)=>{    
            para.onkeyup=function(){
                updatestorage()
            }
        })
    }
    else{
        console.log('hello');
        
    }

})

