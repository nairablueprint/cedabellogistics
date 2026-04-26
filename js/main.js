
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
}
const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
},{threshold:.12});
revealItems.forEach(item=>observer.observe(item));

document.querySelectorAll('[data-count]').forEach(el=>{
  const target = Number(el.dataset.count);
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 70));
  const timer = setInterval(()=>{
    current += step;
    if(current >= target){ current = target; clearInterval(timer); }
    el.textContent = current.toLocaleString() + (el.dataset.suffix || '');
  }, 22);
});
