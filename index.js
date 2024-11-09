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

document.querySelector('.switch2').addEventListener('click',function(){
   document.querySelector('body').style.backgroundColor='hsl(0, 0%, 90%)';
   document.querySelector('.header').style.color= 'black';
   document.querySelector('.switch2').style.backgroundColor=' hsl(25, 98%, 40%)'; 
   document.querySelector('.switch').style.backgroundColor=' hsl(0, 5%, 81%)';
   document.querySelector('.display').style.backgroundColor='hsl(0, 0%, 93%)';
   document.querySelector('.value').style.color='black';
   document.querySelector('.container').style.backgroundColor=' hsl(0, 5%, 81%)';
   document.querySelector('#del').style.backgroundColor='hsl(185, 42%, 37%)';
   document.querySelector('.but1').style.backgroundColor='hsl(185, 42%, 37%)';
   document.querySelector('.switch1').style.backgroundColor='hsl(0, 5%, 81%)';
   document.querySelector('.switch3').style.backgroundColor='hsl(0, 5%, 81%)';
})

document.querySelector('.switch3').addEventListener('click',function(){

  document.querySelector('body').style.backgroundColor='hsl(268, 75%, 9%)';
  document.querySelector('.header').style.color= 'hsl(52, 100%, 62%)';
  document.querySelector('.switch3').style.backgroundColor='hsl(176, 100%, 44%)'; 
  document.querySelector('.switch').style.backgroundColor=' hsl(0, 5%, 81%)';
  document.querySelector('.display').style.backgroundColor='hsl(268, 71%, 12%)';
  document.querySelector('.value').style.color='hsl(52, 100%, 62%)';
  document.querySelector('.container').style.backgroundColor='hsl(268, 71%, 12%)';
  document.querySelector('#del').style.backgroundColor='hsl(185, 42%, 37%)';
  document.querySelector('.but1').style.backgroundColor='hsl(185, 42%, 37%)';
  const all = document.querySelectorAll('.button');
  for(a in all){
    console.log('clicked')
    console.log(a.nodeName)
  }

  document.querySelector('.switch2').style.backgroundColor='hsl(0, 5%, 81%)';
  document.querySelector('.switch1').style.backgroundColor='hsl(0, 5%, 81%)';
})