const submit = document.querySelector('.sub');
const input = document.querySelector('.input');
const sub = document.querySelector('.subscribe');
const success = document.querySelector('.success');
const dismiss = document.querySelector('.dis')
const label = document.querySelector('.err');
const placeholder = input.placeholder;
const userEmail = input.value;
const userEmailOutput = document.querySelector('.mail-output');

submit.addEventListener('click', () => {
    const email = input.value.trim();
    const isValidEmail = email.includes('@');

    if(input.value == "" || !isValidEmail){
        input.classList.add('error');
        label.classList.add('error');
    }
    else{
        sub.classList.add('active');
        success.classList.add('active')
        userEmailOutput.textContent = `${email}`;
    }
    hideErrorOnTyping();
})




dismiss.addEventListener('click', () => {
    sub.classList.remove('active');
    success.classList.remove('active');
    input.value = "";
})

function hideErrorOnTyping() {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      label.classList.remove('error');
    });
  }





