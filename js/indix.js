let value1 = document.getElementById('value');
let click = document.getElementById('clike');
let action = document.getElementById('action');
let succ = document.getElementById('succ');
let input = document.getElementById('input');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let none = document.getElementById('none');


click.addEventListener('click',()=>{
    
    if(value1.value==''){
      action.attributes.removeNamedItem('action');
    
    }
 
    
  
})
succ.addEventListener('click',()=>{
    

    if(input.value!='' && input1.value!='' && input2.value!='' && input3.value!='' ){
    input.value='';
    input1.value='';
    input2.value='';
    input3.value='';

    none.style.visibility= "visible";

    setInterval(()=>{
    none.style.visibility= "hidden";

    },3000)
}
 
    
  
})


