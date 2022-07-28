const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
console.log(buttonIncrement);
const spam = document.querySelector("#value");
// let counterValue=0

// buttonDecrement.addEventListener("click", () => {
//     counterValue += 1;
//     console.log(counterValue);
//  spam.textContent=counterValue
    
// });
// buttonDecrement.addEventListener("click", () => {
//      counterValue -= 1;
//     console.log(counterValue);
//  spam.textContent=counterValue
// });

const counter = {
    value: 0,
    handelbuttonDecrement() {
        this.value -=1
    },
      handelbuttonIncrement() {
          this.value +=1      
    }

}
 const changButtonIDecremen=buttonDecrement.addEventListener("click", () => {  
    counter.handelbuttonDecrement();
    spam.textContent=counter.value
 });

const changButtonIIncremen=buttonIncrement.addEventListener("click", () => {   
    counter.handelbuttonIncrement();
    spam.textContent=counter.value
});


