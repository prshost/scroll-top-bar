let bar = document.querySelector(".bar");

window.addEventListener('scroll', (e) => {
    let y = window.scrollY;
    let h = window.innerHeight;
    let t = y / (document.body.scrollHeight - h) * 100;

    bar.style.width = `${t}%`
   
})