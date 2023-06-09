

const draggables = document.querySelectorAll('.draggable')
const dropZone=document.querySelector('.dropzone')
let currentDraggable = null;
const button=document.querySelector('.btn')


button.addEventListener('click',(e)=>{
   window.location.reload()
})


draggables.forEach(draggable=>{
    draggable.addEventListener('dragstart',()=>{
       draggable.classList.add('dragging')
       currentDraggable = draggable;
    })

    draggable.addEventListener('dragend',()=>{
        draggable.classList.remove('dragging')
        currentDraggable = null;
     })
    
})

dropZone.addEventListener('dragover',(event)=>{
    event.preventDefault()
})

dropZone.addEventListener('drop',(event)=>{
    event.preventDefault();
    if (currentDraggable) {
        dropZone.append(currentDraggable);
        currentDraggable.classList.add('success');
          
          }
         
})




