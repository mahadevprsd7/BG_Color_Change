function changebg() {
    let r = Math.trunc(Math.random() * 256);
    let g = Math.trunc(Math.random() * 256);
    let b = Math.trunc(Math.random() * 256);

    let bodybg = document.querySelector('body');
    bodybg.style.cssText = `background-color: rgb(${r},${g},${b})`;

    let headbg = document.querySelector('h1');
    headbg.innerHTML = `rgb(${r},${g},${b})`;
}