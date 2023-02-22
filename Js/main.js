let userLabels=document.querySelectorAll('.userData')
   ,inputs=document.querySelectorAll('input');


for(let i=0;i<inputs.length;i++){
   inputs[i].addEventListener('focus',function(){
      userLabels[i].style.fontSize='13px';
      userLabels[i].style.transform='translate(10px,2px)';
      inputs[i].style.fontSize='16px';
      inputs[i].style.paddingTop='15px'
   })
   inputs[i].addEventListener('blur',function(){
      userLabels[i].style.fontSize='20px';
      userLabels[i].style.transform='translate(10px,10px)';
      inputs[i].style.fontSize='18px';
      inputs[i].style.paddingTop='15px'
   })
}
