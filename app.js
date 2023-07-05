const clock = document.querySelector('.clock');

const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const d = now.toLocaleDateString();
    

    const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
    <div class="date">${d}</div>
    `;




    clock.innerHTML = html;

const dateChange = document.querySelector('.date');

const colors = ["red", "green", "yellow", "black", "purple"]


    dateChange.addEventListener("click", () => {
        let randomColors = Math.floor(Math.random() * 5)  ;
        
        dateChange.style.color = colors[randomColors];
    });

};

setInterval(tick, 1000);



