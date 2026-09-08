document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));

// The portfolio assets currently live at the repository root. Keep the HTML readable
// while mapping the original local asset paths to their deployed GitHub/Vercel paths.
document.querySelectorAll('[href^="assets/"],[src^="assets/"]').forEach(el=>{
  const attr=el.hasAttribute('href')?'href':'src';
  const value=el.getAttribute(attr);
  el.setAttribute(attr,value.split('/').pop());
});