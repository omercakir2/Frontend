function showOrders(){
    form.textArea.innerHTML = ""
    let userId = form.user.value
    let subTotal = form.subtotal.checked

    let orders  = orderItems.filter(x => x.userId == userId)
    let total = 0
    for(let x of orders){
        let product = products.find(y=> y.productId == x.productId)
        form.textArea.innerHTML +=  "\n" + x.quantity+" X "  + " " +  product.name
        if(subTotal){
            form.textArea.innerHTML += " (Subtotal : " + x.quantity +  "x" + product.price + "=" + product.price*x.quantity +"TL)"
        }  
        total += product.price * x.quantity
    }
    form.textArea.innerHTML += "\n" + total  + "TL"
}