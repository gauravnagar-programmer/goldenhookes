let check=document.querySelectorAll('.check');
let mainheart=document.querySelectorAll('.mainheart');
let topheart=document.querySelector('.topheart');

check.forEach((elem ,index)=>{
    elem.addEventListener('change' ,()=>{

        if(elem.checked){
            mainheart[index].style.color='red';
         
        }
    
        else{
            mainheart[index].style.color='';
            

        }
    })
})



//header heart js