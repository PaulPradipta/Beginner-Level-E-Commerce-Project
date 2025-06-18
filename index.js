window.onload = ()=> {
    const account = document.getElementById("account");
    account.onmouseover = ()=> {
        const accountMenu = document.getElementById("account-menu");
        accountMenu.style.display = "flex";
    }

    // account.onmouseout = ()=> {
    //     const accountMenu = document.getElementById("account-menu");
    //     accountMenu.style.display = "none";
    // }

    // Open Cart on clicking Cart Button
    const cartBtn = document.getElementById("cart-btn");
    cartBtn.onclick = ()=> {
        const cartOverlay = document.getElementById("cart-overlay");
        cartOverlay.style.display = "block"
        // cartOverlay.style.animation = "fadeIn 0.5s linear forwards";

        const cartList = document.getElementById("cart-list");
        cartList.style.animation = "slideIn 0.7s linear forwards"
        
    }

    // Close Cart
    const closeCart = document.getElementById("close-btn");
    closeCart.onclick = ()=> {
        const cartOverlay = document.getElementById("cart-overlay");
        const cartList = document.getElementById("cart-list");
        cartList.style.animation = "slideOut 0.7s linear forwards";
        setTimeout(function(){
            cartOverlay.style.display = "none";
        },800);
        
    }


    // Add to Cart Functionality
    const increaseQnt = document.getElementsByClassName("increase-qnt");
    for(let btn of increaseQnt) {
        btn.onclick = ()=> {
            const div = btn.parentElement;
            const label = div.getElementsByClassName("qnt")[0];
            const text = Number(label.innerHTML);
            label.innerHTML = text+1
        }
    }

    // Remove from Cart Functionality
    const decreaseQnt = document.getElementsByClassName("decrease-qnt");
    for(let btn of decreaseQnt) {
        btn.onclick = ()=>{
            const div = btn.parentElement;
            const label = div.getElementsByClassName("qnt")[0];
            const text = Number(label.innerHTML);
            if(text == 1) {
                label.innerHTML = "1";
            }
            else {
                label.innerHTML = text-1;
            }
            
        }
    }

    // Coundown Functionality
    const endDate = "29 August 2025 12:00 PM"

    const clock = ()=>{
        const end = new Date(endDate);
        const now = new Date();
        const diff = (end-now)/1000;
        
        const daysCal = Math.floor(diff/3600/24);
        const days = document.getElementById("days");
        days.innerHTML = daysCal;

        const hrsCal =Math.floor(diff / 3600) % 24 ;
        const hours = document.getElementById("hour");
        hours.innerHTML = hrsCal;

        const minCal = Math.floor((diff/60)%60);
        const min = document.getElementById("min");
        min.innerHTML = minCal;

        const secCal = Math.floor(diff)%60;
        const sec = document.getElementById("secs");
        // console.log(sec);
        sec.innerHTML = secCal;
    }

    
    setInterval(()=>{
        clock();
    },1000)
}