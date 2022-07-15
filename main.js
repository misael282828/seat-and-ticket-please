const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not( occupied )"); // para seleccionar todos los asientos y filas que no estan ocupadas
const  count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value


//Update total and count
function updateSelectCount(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected")

    const selectSeatsCount = selectedSeats.length;
    count.innerText = selectSeatsCount;
    total.innerText = selectSeatsCount * ticketPrice;
}

// Movie selected event
movieSelect.addEventListener("change", e=>{
    ticketPrice =+e.target.value;
    updateSelectCount()

})

// Seat click event
container.addEventListener("click", e => {
 //   console.log(e.target); 
   
 if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    // console.log(e.target);
 }
    e.target.classList.toggle("selected")
    updateSelectCount()
} )