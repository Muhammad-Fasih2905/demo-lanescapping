document.querySelectorAll('.menu').forEach(b=>b.addEventListener('click',()=>{
  const u=document.getElementById('nav-list');b.setAttribute('aria-expanded',u.classList.toggle('open'));}));
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function tween(r,to,ms,done){const from=+r.value,t0=performance.now();
  if(calm){r.value=to;r.dispatchEvent(new Event('input'));done&&done();return}
  (function f(t){const k=Math.min((t-t0)/ms,1),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;
    r.value=from+(to-from)*e;r.dispatchEvent(new Event('input'));
    k<1?requestAnimationFrame(f):done&&done()})(t0)}
document.querySelectorAll('.ba').forEach(el=>{
  const r=el.querySelector('input');
  r.addEventListener('input',()=>el.style.setProperty('--pos',r.value+'%'));
  r.dispatchEvent(new Event('input'));
  const bar=document.createElement('div');bar.className='ba-btns';
  bar.innerHTML='<button type="button">Show before</button><button type="button">Show after</button>';
  el.after(bar);
  const [b,a]=bar.children;
  b.onclick=()=>tween(r,100,700);a.onclick=()=>tween(r,0,700);
  new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();
    r.value=100;r.dispatchEvent(new Event('input'));setTimeout(()=>tween(r,50,1600),250)}},{threshold:.5}).observe(el);
});
const f=document.getElementById('quote-form');
if(f)f.addEventListener('submit',e=>{e.preventDefault();f.style.display='none';document.getElementById('ok').style.display='block'});
document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());
