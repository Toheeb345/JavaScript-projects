const faqs = document.querySelectorAll('.question');

faqs.forEach((faq) => {
    const arrow = faq.querySelector('span');

    arrow.addEventListener('click', () => {
        faqs.forEach((ans) => {
            if(ans !== faq){
                ans.classList.remove('show-answer');
            }
        })
        faq.classList.toggle('show-answer');
    })
})