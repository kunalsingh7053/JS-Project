let baseurl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_FXkSom3BixjkOM9gTB6AdNgJiqLoQwQPxQed5sT6&base_currency=USD&currencies[]=INR"
let from = document.querySelector('#from');
let to = document.querySelector('#to');




console.log(amount);
async function fuck() {
    let response = await fetch(baseurl);
    let data =  await response.json();
  
}

let dropdown = document.querySelectorAll('select');
let btn = document.querySelector('button');
for (const select of dropdown) {
    
    for(code in countryList)
    {
     let newoption = document.createElement("option");  // create an option element and store it in a variable called 'newOption'
        newoption.innerHTML = code;
        newoption.value = code;
        if(select.name == "from" && code == "USD"){
            newoption.selected = 'selected';
        }
        else if(select.name == "to" && code == "INR")
        {
            newoption.selected = 'selected';

        }
        select.append(newoption);
    
    }
    select.addEventListener('change',(e)=>{
         flagchange(e.target);
        
        
    })
}

function flagchange(element)
{
    
     let code = element.value;
 
     let country = countryList[code];
     console.log(country);
     
  
     let src = `https://flagsapi.com/${country}/flat/64.png`;
     element.parentElement.querySelector('img').src = src;

}
btn.addEventListener('click',async(evt)=>{
evt.preventDefault();

let amount = document.querySelector('#amount');
let amountvalue = amount.value;
if(amountvalue <=0 )
{
    amountvalue = "1";
    amount.value = 1;
}

 let url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_FXkSom3BixjkOM9gTB6AdNgJiqLoQwQPxQed5sT6&base_currency=${from.value}&currencies[]=${to.value}`;
    let response = await fetch(url);
    let data =  await response.json();
    let rate = data.data[to.value]?.value; // Dynamically access the currency's value
    

    
   let finalAmount = rate*amountvalue;
   
   console.log(finalAmount);
 let msg = document.querySelector('.msg');
 msg.innerHTML = `${amountvalue} ${from.value} = ${finalAmount} ${to.value}`; 
    


})
