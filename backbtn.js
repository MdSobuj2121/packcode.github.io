const b = document.querySelector(".btn");
b.addEventListener("mouseover", (event)=>{
    const x = event.pageX - b.offsetLeft;
    const y = event.pageY - b.offsetTop;

    b.style.setProperty("--xPos", x + "px");
    b.style.setProperty("--yPos", y + "px");

});