const img = document.querySelector("img");
const select1 = document.querySelector("#currency-one");
const select2 = document.querySelector("#currency-two");
const input1 = document.querySelector("#amount-one");
const input2 = document.querySelector("#amount-two");

const rate = document.querySelector("#rate");
const btn = document.querySelector("#btn");

img.draggable = false;


//Fetch exchange rates and update the DOM

async function calculate () {
    const currency1 = select1.value;
    const currency2 = select2.value;

    const res = await fetch(`https://v6.exchangerate-api.com/v6/234fde1f86a9ac95117b1a87/latest/${currency1}`)
    const data = await res.json()
    const rates = data.conversion_rates[currency2]

    rate.innerText = (`1 ${currency1} = ${rates} ${currency2}`);
    input2.value = (input1.value * rates).toFixed(2);
}


//Event Listeners
select1.addEventListener("change", calculate);
input1.addEventListener("input", calculate);
select2.addEventListener("change", calculate);
input2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
    const temp = select1.value;
    select1.value = select2.value;
    select2.value = temp;
    calculate();
})

calculate();