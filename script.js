let cart = [];
let total = 0;

// Scroll to Booking Section

function scrollToBooking() {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

}

// Add Item

function addItem(serviceName, price) {

    cart.push({
        name: serviceName,
        price: price
    });

    total = total + price;

    displayCart();

}

// Remove Item

function removeItem(serviceName, price) {

    for (let i = 0; i < cart.length; i++) {

        if (cart[i].name == serviceName) {

            cart.splice(i, 1);

            total = total - price;

            break;

        }

    }

    displayCart();

}

// Display Cart

function displayCart() {

    let cartList = document.getElementById("cartItems");

    cartList.innerHTML = "";

    if (cart.length == 0) {

        cartList.innerHTML = "<li>No Items Added</li>";

    }

    else {

        for (let i = 0; i < cart.length; i++) {

            let item = document.createElement("li");

            item.innerText = cart[i].name + " - ₹" + cart[i].price;

            cartList.appendChild(item);

        }

    }

    document.getElementById("total").innerText = total;

}

// Book Service

function bookService() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name == "" || email == "" || phone == "") {

        alert("Please fill all details.");
        return;

    }

    let params = {

        name: name,
        email: email,
        phone: phone,
        total: total

    };

    emailjs.send(
        "service_3exseu4",
        "template_54wf1pb",
        params
    )

    .then(function () {

        document.getElementById("message").innerText =
        "Thank You For Booking The Service. We will get back to you soon!";

    })

    .catch(function () {

        alert("Email could not be sent.");

    });

}