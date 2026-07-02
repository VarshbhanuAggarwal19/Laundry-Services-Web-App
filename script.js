let cart = [];
let totalPrice = 0;
function goBooking(){
    document.getElementById("service").scrollIntoView({
        behavior:"smooth"
    });
}
function addItem(name,price){
    let item = {
        itemName:name,
        itemPrice:price
    };
    cart.push(item);
    totalPrice = totalPrice + price;
    showCart();
}

function removeItem(name,price){
    for(let i=0;i<cart.length;i++){
        if(cart[i].itemName==name){
            cart.splice(i,1);
            totalPrice = totalPrice - price;
            break;
        }
    }
    showCart();
}

function showCart(){
    let list=document.getElementById("list");
    list.innerHTML="";
    if(cart.length==0){
        list.innerHTML="<li>No Item Added</li>";
    }
    else{
        for(let i=0;i<cart.length;i++){
            let li=document.createElement("li");
            li.innerText=cart[i].itemName+" - ₹"+cart[i].itemPrice;
            list.appendChild(li);
        }
    }
    document.getElementById("total").innerText=totalPrice;
}
function bookNow(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    if(name=="" || email=="" || phone==""){
        alert("Please fill all details.");
        return;
    }
    document.getElementById("msg").innerText =
    "Booking Successful! We will contact you soon.";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

}

function subscribe(){
    let name=document.getElementById("sname").value;
    let email=document.getElementById("semail").value;
    if(name=="" || email==""){
        alert("Please enter your name and email.");
        return;
    }
    document.getElementById("submsg").innerText="Thank you for subscribing!";
    document.getElementById("sname").value="";
    document.getElementById("semail").value="";
}