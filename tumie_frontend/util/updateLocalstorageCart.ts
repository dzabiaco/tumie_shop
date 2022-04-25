export default function updateLocalstorageCart (cart:any){
    const cartLocal = JSON.parse(<string>localStorage.getItem("cart"));
    console.log(`FROM function`);
    const cartArray = [];
    cartArray.push(cart);
    console.log(cartArray);
    localStorage.setItem("cart", JSON.stringify(cartArray));
}