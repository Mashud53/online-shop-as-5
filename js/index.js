let total = 0;
function carHandler(target) {
    const selectedItemContainer = document.getElementById('selected-items')
    const count = selectedItemContainer.childElementCount;
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const p = document.createElement("p");
    p.innerText = `${count + 1}. ${itemName}`;
    // count + "." + " " + itemName;
    selectedItemContainer.appendChild(p);
    // Product Price
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(price);

    const totalPrice = document.getElementById('total-price');


    // replace total price
    totalPrice.innerText = total;
    grandTotal.innerText = total;

    const purchaseBtn = document.getElementById('purchase-btn')
    if(totalPrice.innerText > '0'){
        purchaseBtn.removeAttribute('disabled')
                
    }
    
    if(totalPrice.innerText >= 200){
        couponBtn.removeAttribute('disabled')
    }

}

const couponBtn = document.getElementById('coupon-btn');
const couponField = document.getElementById('coupon-input');
const grandTotal = document.getElementById('grand-total'); 

couponBtn.addEventListener('click', function(){
    if(couponField.value ==='SELL200'){
        const couponFieldValueText = '0.2';
        const couponFieldValue = parseFloat(couponFieldValueText)
        const discountValue = parseFloat(total) * couponFieldValue;
        const discount = document.getElementById('discount')
        discount.innerText = discountValue.toFixed(2);
        const grandTotalValue = parseFloat(total) - discountValue;
        grandTotal.innerText = grandTotalValue;
        couponField.value = ' ';
    }
    else if(couponField.value !=='SELL200'){
        alert('invalid coupon')
        couponField.value = ' ';
        return;
    }
   
    
    

})
document.getElementById('go-home').addEventListener('click', function(){
    location.reload()
})







