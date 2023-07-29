const mark = document.querySelector('.mark');
const actives = document.querySelectorAll('.active')
const notificationNum = document.querySelector('.top h4 button')

mark.addEventListener('click', () => {
    actives.forEach(active => {
        active.style.display = "none";
    })
    notificationNum.style.display = "none";
})