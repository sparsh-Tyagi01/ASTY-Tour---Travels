function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const resultElement = document.getElementById('result');

 if(fromCurrency=="USD" && toCurrency=="INR"){
    resultElement.textContent= `${amount*84.89} Rupee`
 }else if(fromCurrency=="USD" && toCurrency=="USD"){
    resultElement.textContent= `${amount} Dollar`
 }else if(fromCurrency=="USD" && toCurrency=="EUR"){
    resultElement.textContent= `${amount*0.95} Euro`
 }else if(fromCurrency=="USD" && toCurrency=="GBP"){
    resultElement.textContent= `${amount*0.79} Pound sterling`
 }else if(fromCurrency=="INR" && toCurrency=="INR"){
    resultElement.textContent= `${amount} Rupee`
 }else if(fromCurrency=="INR" && toCurrency=="USD"){
    resultElement.textContent= `${amount*0.012} Dollar`
 }else if(fromCurrency=="INR" && toCurrency=="EUR"){
    resultElement.textContent= `${amount*0.011} Euro`
 }else if(fromCurrency=="INR" && toCurrency=="GBP"){
    resultElement.textContent= `${amount*0.0093} Pound sterling`
 }else if(fromCurrency=="EUR" && toCurrency=="INR"){
    resultElement.textContent= `${amount*89.07} Rupee`
 }else if(fromCurrency=="EUR" && toCurrency=="USD"){
    resultElement.textContent= `${amount*1.05} Dollar`
 }else if(fromCurrency=="EUR" && toCurrency=="EUR"){
    resultElement.textContent= `${amount} Euro`
 }else if(fromCurrency=="EUR" && toCurrency=="GBP"){
    resultElement.textContent= `${amount*0.83} Pound sterling`
 }else if(fromCurrency=="GBP" && toCurrency=="INR"){
    resultElement.textContent= `${amount*107.45} Rupee`
 }else if(fromCurrency=="GBP" && toCurrency=="USD"){
    resultElement.textContent= `${amount*1.27} Dollar`
 }else if(fromCurrency=="GBP" && toCurrency=="EUR"){
    resultElement.textContent= `${amount*1.21} Euro`
 }else if(fromCurrency=="GBP" && toCurrency=="GBP"){
    resultElement.textContent= `${amount} Pound sterling`
 }
}