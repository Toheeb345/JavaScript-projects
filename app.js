const slide = document.querySelector('.slide-btn');
const slider = document.querySelector('.slider');
const yearly = document.querySelector('.yearly');
const monthly = document.querySelector('.monthly');
const monthPrice = document.querySelectorAll('.month-price');
const yearPrice = document.querySelectorAll('.year-price');
const arcade = document.querySelector('.arcade');
const advanced = document.querySelector('.advanced');
const pro = document.querySelector('.pro');
const prices = document.querySelectorAll('.price');
const durations = document.querySelectorAll('.duration');
const checkDivs = document.querySelectorAll('.check');
const btns = document.querySelectorAll('.sidebar-btn');
const checkBoxs = document.querySelectorAll("input[type='checkbox']");
const secondPage = document.querySelector('.second-page');
const firstPage = document.querySelector('.first-page');
const thirdPage = document.querySelector('.third-page');
const fourthPage = document.querySelector('.fourth-page');
const btnBgs = document.querySelectorAll('.sidebar button');
const firstBtn = document.querySelector('.sidebar button.first-btn');
const changePlan = document.querySelector('.change-plan');
const addOnName = document.querySelectorAll('.add-on-name');
const addOnPrice = document.querySelectorAll('#add-on-price');
const lowerOrder = document.querySelector('.lower-order');
const infoInput = document.querySelectorAll('.info-input');
const errLabel = document.querySelectorAll('.err-label')
const selectedPlan = document.querySelector('.selected-plan')
const priceOfPlan = document.querySelector('#price-of-plan')
const realPrice = document.querySelector('#real-price')
const planDuration = document.querySelector('.plan-duration')
const totalDuration = document.querySelector('.total-duration')
const addDuration = document.querySelector('.add-duration');
const thank = document.querySelector('.thank');



let loopEnabled = true;


slider.addEventListener('click', () => {
    slide.classList.toggle('active');
    yearly.classList.toggle('active');
    monthly.classList.toggle('active');
    updatePrices();
    monthPrice.forEach((price) => {
        price.classList.toggle('active')
    })
    yearPrice.forEach((price) => {
        price.classList.toggle('active')
    })
})
const updatePrices = () => {
    if (loopEnabled) {
        prices.forEach(price => {
          if (!price.dataset.originalPrice) {
            price.dataset.originalPrice = price.textContent;
          }
          const yearPrice = price.textContent * 10;
          price.textContent = yearPrice;
          durations.forEach(duration => {
            duration.textContent = `/yr`;
          })
        });
        
        planDuration.textContent = `(Yearly)`
        totalDuration.textContent = `(per year)`
        loopEnabled = false;
      } else {
        prices.forEach(price => {
          price.textContent = price.dataset.originalPrice;
          durations.forEach(duration => {
            duration.textContent = `/mo`;
          })
        });
        planDuration.textContent = `(Monthly)`
        totalDuration.textContent = `(per month)`

        loopEnabled = true; 
      }
};


arcade.addEventListener('click', () => {
  const arcadeValue = arcade.dataset.plan
  const pricesArray = []; 

  prices.forEach(price => {
    const reprice = price.textContent;
    pricesArray.push(reprice); 
  });

  selectedPlan.textContent = arcadeValue;
  priceOfPlan.textContent = pricesArray[0];

  console.log(arcadeValue, pricesArray[0]); 
});
advanced.addEventListener('click', () => {
  const advanceValue = advanced.dataset.plan
  const pricesArray = []; 

  prices.forEach(price => {
    const reprice = price.textContent;
    pricesArray.push(reprice); 
  });

  selectedPlan.textContent = advanceValue;
  priceOfPlan.textContent = pricesArray[1];

  console.log(advanceValue, pricesArray[1]); 
});
pro.addEventListener('click', () => {
  const proValue = pro.dataset.plan
  const pricesArray = []; 

  prices.forEach(price => {
    const reprice = price.textContent;
    pricesArray.push(reprice); 
  });

  selectedPlan.textContent = proValue;
  priceOfPlan.textContent = pricesArray[2];

  console.log(proValue, pricesArray[2]); 
});

let globalPrice;


checkDivs.forEach((checkDiv, index) => { 

  checkDiv.addEventListener('click', () => {
    checkBoxs[index].checked = !checkBoxs[index].checked;
    checkDiv.classList.toggle('active');
    
    const name = addOnName[index].textContent;
    let price = addOnPrice[index].textContent;
    let globalPrice = price;
    const html = `<div class="order2" data-index="${index}">
                      <p>${name}</p>
                      <p class="month-price">+$<span class="price" id="realPrice" data-originalPrice="9">${price}</span><span class="duration"></span></p>
                  </div>`;

      // updatePrices();
    if (checkBoxs[index].checked) {
      // If the checkbox is checked, append the HTML
      lowerOrder.innerHTML += html;
    } else {
      // If the checkbox is unchecked, remove the HTML if it exists in the lowerOrder
      const existingOrder = lowerOrder.querySelector(`div[data-index="${index}"]`);
      if (existingOrder) {
        existingOrder.remove();
      }
    }
  });
});





function updateActivePage(activePage) {
  [firstPage, secondPage, thirdPage, fourthPage, thank].forEach(page => {
    if (page === activePage) {
      page.classList.add('active');
      firstPage.classList.add('non-active')
    } else {
      page.classList.remove('active');
      firstPage.classList.add('non-active')
    }
  });
}


// Define a function to update the active button
const updateActiveBtn = (activeBtn) => {
  [btnBgs[0],btnBgs[1],btnBgs[2],btnBgs[3]].forEach(btn => {
    if (btn === activeBtn) {
      btn.classList.add('active')
    }
    else if(activeBtn === btnBgs[0]){
      firstBtn.classList.remove('active');
      firstBtn.classList.remove('non-active')
      btnBgs.forEach(btn => {
        btn.classList.remove('active')
      })
    } else{
      btn.classList.remove('active')
      firstBtn.classList.add('non-active')
    }
  })
}


for (const btn of btns) {
  btn.addEventListener('click', () => {
    const btnValue = btn.dataset.page;
      
    if (btnValue === "2") {
      let isAnyInputEmpty = false; // Flag to track if any input is empty
      infoInput.forEach((input, index) => {
        const label = errLabel[index]; // Select the corresponding label for the current input
    
        if (input.value === "") {
          isAnyInputEmpty = true;
          label.classList.add('active');
          input.classList.add('err-active');
        } else {
          label.classList.remove('active'); // Remove "active" class only for the corresponding label
          input.classList.remove('err-active');
        }
      });
    
      if (!isAnyInputEmpty) {
        updateActivePage(secondPage);
        updateActiveBtn(btnBgs[1]);
      }
    }
      else if (btnValue === "1") {
        updateActivePage(firstPage);
        updateActiveBtn(btnBgs[0])
      }
       else if (btnValue === "3") {
        infoInput.forEach((input, index) => {
          if (infoInput[0].value === "" ||  infoInput[1].value === "" || infoInput[2].value  === "") {
            errLabel.forEach((label, num) => {
              label.classList.add('active')
            })
            input.classList.add('err-active')
          }
          else{
            updateActivePage(thirdPage);
            updateActiveBtn(btnBgs[2])
            errLabel.forEach((label, num) => {
              label.classList.remove('active')
            })
            input.classList.remove('err-active')
          }
        })


      }
      else if (btnValue === "4") {
        infoInput.forEach((input, index) => {
          if (infoInput[0].value === "" ||  infoInput[1].value === "" || infoInput[2].value  === "") {
            errLabel.forEach((label, num) => {
              label.classList.add('active')
            })
            input.classList.add('err-active')
          }
          else{
            updateActivePage(fourthPage);
            updateActiveBtn(btnBgs[3])
            errLabel.forEach((label, num) => {
              label.classList.remove('active')
            })
            input.classList.remove('err-active')
          }
        })



      }
      else if (btnValue === "5") {
        infoInput.forEach((input, index) => {
          if (infoInput[0].value === "" ||  infoInput[1].value === "" || infoInput[2].value  === "") {
            errLabel.forEach((label, num) => {
              label.classList.add('active')
            })
            input.classList.add('err-active')
          }
          else{
            updateActivePage(thank);
            updateActiveBtn(btnBgs[3])
            errLabel.forEach((label, num) => {
              label.classList.remove('active')
            })
            input.classList.remove('err-active')
          }
        })



      }
  });
}

infoInput.forEach((input, index) => {
  input.addEventListener('keyup', () => {
    errLabel.forEach((label, num) => {
      label.classList.remove('active')
    })
    input.classList.remove('err-active')
  })
})

changePlan.addEventListener('click', () => {
  updateActivePage(secondPage);
  updateActiveBtn(btnBgs[1])
})


// Function to calculate the total price
function calculateTotalPrice() {
  const planPrice = parseInt(priceOfPlan.textContent); // Get the selected plan price
  const addOnPrices = Array.from(lowerOrder.querySelectorAll('.price'))
    .map(addonPrice => parseInt(addonPrice.textContent)); // Get the prices of selected add-ons
  const totalPrice = planPrice + addOnPrices.reduce((acc, curr) => acc + curr, 0); // Calculate the total price
  return totalPrice;
}


// Function to update the total price Update the total price on the fourth page
function updateTotalPrice() {
  const totalPriceElement = document.querySelector('.output-price');
  const totalDurationElement = document.querySelector('.total-duration');
  const totalPrice = calculateTotalPrice();

  const totalOutputDuration = document.querySelector('.total-output-duration');
  totalOutputDuration.textContent = loopEnabled ? '/mo' : '/yr'; // Update the text content directly

  totalPriceElement.innerHTML = `+$${totalPrice}<span class="total-output-duration">${totalOutputDuration.textContent}</span>`;
  totalDurationElement.textContent = loopEnabled ? '(per month)' : '(per year)';
}

// Attach a MutationObserver to the totalOutputDuration element
const totalOutputDuration = document.querySelector('.total-output-duration');
const observer = new MutationObserver(updateTotalPrice);

observer.observe(totalOutputDuration, { characterData: true, subtree: true });


// Attach event listeners for plan selection
arcade.addEventListener('click', updateTotalPrice);
advanced.addEventListener('click', updateTotalPrice);
pro.addEventListener('click', updateTotalPrice);

// Attach event listeners for add-on selection
checkDivs.forEach((checkDiv, index) => {
  checkDiv.addEventListener('click', updateTotalPrice);
});

// Attach event listener for switching between monthly and yearly pricing
slider.addEventListener('click', updateTotalPrice);

