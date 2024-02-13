const val=document.querySelector('.value');
val.innerHTML='0';

let equ="";
let op1="";
let op2="";
let sign="";

const num = document.querySelectorAll('.button');
num.forEach( n => {
    n.addEventListener('click',function(){
      
      console.log('clicked');
      let number=parseInt(n.getAttribute('data-value'))
      
      if(number===100 && !sign) number='+';
      else if(number===200 && !sign) number='-';
      else if(number===300 && !sign) number='/';
      else if(number===400 && !sign) number='*';
      else if(number===500 && !sign) number='.';

      if(equ===""){
        equ=equ.concat(number)
      }else{
        equ=equ.concat(number)
      }
      val.innerHTML=equ;
    })
});

document.querySelector('.but2').addEventListener('click',function(){
  let res=eval(equ)
  console.log(eval(equ))
  equ=res.toString();
  val.innerHTML=res;
})

document.querySelector('#del').addEventListener('click',()=>{
  equ=equ.slice(0,-1);
  val.innerHTML=equ;
  console.log('clicked');
})

document.querySelector('.but1').addEventListener('click',function(){
  equ=""
  val.innerHTML=equ;
})