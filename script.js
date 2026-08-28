const menu=document.querySelector('.menu-btn'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('reviewForm'), list=document.getElementById('reviewList');
const saved=JSON.parse(localStorage.getItem('nisheliReviews')||'[]');
function addReview(r){const a=document.createElement('article');a.className='review';a.innerHTML=`<div>${r.stars}</div><p>“${r.text.replace(/</g,'&lt;')}”</p><b>— ${r.name.replace(/</g,'&lt;')}</b>`;list.appendChild(a)}
saved.forEach(addReview);
form.addEventListener('submit',e=>{e.preventDefault();const r={name:reviewName.value,stars:reviewStars.value,text:reviewText.value};saved.push(r);localStorage.setItem('nisheliReviews',JSON.stringify(saved));addReview(r);form.reset();alert('Thank you! Your review has been added on this device.');});
