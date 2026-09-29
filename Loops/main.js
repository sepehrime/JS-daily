const sleep = (ms) => new Promise((resolve)=> setTimeout(resolve, ms));
const heading =document.getElementById("myHeading");
const button = document.getElementById("toggleBtn");

let isRunning = false;

async function startColorLoop() {
    while (isRunning) {
        heading.style.color = "red";
        await sleep(1000);
        if (!isRunning) break;
        heading.style.color = "blue";
        await sleep(1000);
    }
    heading.style.color = "black";
}

button.addEventListener("click", () =>{
    if (isRunning) {
        isRunning = false;
        button.textContent = "Start";
    } else {
        isRunning = true;
        button.textContent = "Stop";
        startColorLoop();
    }
});
