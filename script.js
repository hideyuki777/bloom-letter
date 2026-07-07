const p=new URLSearchParams(location.search);
const f=(p.get('flower')||'A').toUpperCase();
document.getElementById('flowerImage').src='images/'+f+'.jpg';
openBtn.onclick=()=>{
 const c=document.getElementById('petals');
 for(let i=0;i<20;i++){
  const s=document.createElement('span');
  s.className='petal';s.textContent='❀';
  s.style.left=Math.random()*100+'vw';
  s.style.fontSize=(14+Math.random()*12)+'px';
  s.style.animationDelay=Math.random()*0.4+'s';
  c.appendChild(s);
 }
 setTimeout(()=>{
  intro.style.display='none';
  result.classList.remove('hidden');
 },500);
};