let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



// OPEN POPUP
function openPurchasePopup() {
    const popup = document.getElementById("purchasePopup");
    if (popup) popup.style.display = "flex";
}

// CLOSE BUTTON
const closeBtn = document.getElementById("closePopupBtn");
if (closeBtn) {
    closeBtn.onclick = function() {
        document.getElementById("purchasePopup").style.display = "none";
    };
}

// PURCHASE BUTTON
const purchaseBtn = document.getElementById("confirmPurchaseBtn");
if (purchaseBtn) {
    purchaseBtn.onclick = function() {
        let name = document.getElementById("userName").value;
        let email = document.getElementById("userEmail").value;
        let card = document.getElementById("userCard").value;

        if (name === "" || email === "" || card === "") {
            alert("Please fill in all fields!");
            return;
        }

        alert("Congrats! You made a purchase!");
    };
}

// Ticket Buy Now Popup
function openTicketPopup() {
    const popup = document.getElementById("ticketPopup");
    if (popup) popup.style.display = "flex";
}

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const ticketPopup = document.getElementById("ticketPopup");
    const closeTicketBtn = document.getElementById("closeTicketBtn");
    const confirmTicketBtn = document.getElementById("confirmTicketBtn");

    // Close popup
    if (closeTicketBtn && ticketPopup) {
        closeTicketBtn.addEventListener('click', () => {
            ticketPopup.style.display = "none";
        });
    }

    // Validate and confirm purchase
    if (confirmTicketBtn && ticketPopup) {
        confirmTicketBtn.addEventListener('click', () => {
            const name = document.getElementById("ticketName").value;
            const email = document.getElementById("ticketEmail").value;
            const card = document.getElementById("ticketCard").value;

            if (!name || !email || !card) {
                alert("Please fill in all fields!");
                return;
            }

            alert("Congrats! Your ticket purchase is confirmed!");
            ticketPopup.style.display = "none";
        });
    }
});

