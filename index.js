/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
    let shipName = document.getElementById('shippingName');
    let billName = document.getElementById('billingName');
    let shipZip = document.getElementById('shippingZip');
    let billZip = document.getElementById('billingZip');

    if (same.checked == true){
        billName.value = shipName.value;
        billZip.value = shipZip.value;

    }else{
        billName.value ='';
        billZip.value ='';
    }
    
} 