const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth / 1.2
canvas.height = window.innerHeight / 1.2

canvas.addEventListener("mousemove", (event) => {
    console.log(event.offsetX + ", " + event.offsetY)
});