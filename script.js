/* =====================================================
   TOAST MESSAGE
   ===================================================== */

function showMessage(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}



/* =====================================================
   FORM SUBMISSION
   FRONTEND DEMO ONLY
   ===================================================== */

function demoSubmit(event, message) {

    event.preventDefault();

    showMessage(message);

    event.target.reset();

}



/* =====================================================
   REQUEST FOOD
   ===================================================== */

function requestFood(food) {

    showMessage(
        food +
        " selected. Continue to the Request Food section."
    );


    document
        .getElementById("request")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* =====================================================
   SEARCH AND FILTER FOOD
   ===================================================== */

function filterFood() {


    const searchInput =
        document.getElementById("search");


    const categoryInput =
        document.getElementById("category");


    const locationInput =
        document.getElementById("location");


    const search =
        searchInput.value.toLowerCase();


    const category =
        categoryInput.value;


    const location =
        locationInput.value;


    const foodCards =
        document.querySelectorAll(".food-card");


    foodCards.forEach(function(card) {


        const food =
            card.dataset.food.toLowerCase();


        const cardCategory =
            card.dataset.category;


        const cardLocation =
            card.dataset.location;


        const matchesSearch =
            food.includes(search);


        const matchesCategory =
            !category ||
            cardCategory.includes(category);


        const matchesLocation =
            !location ||
            cardLocation === location;


        if (
            matchesSearch &&
            matchesCategory &&
            matchesLocation
        ) {

            card.style.display = "grid";

        }

        else {

            card.style.display = "none";

        }

    });

}



/* =====================================================
   DONATION STATUS
   ===================================================== */

let trackingIndex = 0;


const trackingStates = [

    "Collected",

    "Distributed",

    "Completed"

];


function advanceStatus() {


    trackingIndex++;


    if (
        trackingIndex >=
        trackingStates.length
    ) {

        trackingIndex = 0;

    }


    const statusText =
        document.getElementById("statusText");


    statusText.textContent =
        trackingStates[trackingIndex];


    showMessage(
        "Demo status changed to " +
        trackingStates[trackingIndex]
    );

}



/* =====================================================
   DASHBOARD PERIOD
   ===================================================== */

function changePeriod(period) {

    showMessage(
        "Dashboard period changed to " +
        period
    );

}