/* change navbar background on scroll */
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle("window-scroll", scrollY>0);
})