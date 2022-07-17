const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not( occupied )"); // para seleccionar todos los asientos y filas que no estan ocupadas
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();

let ticketPrice = +movieSelect.value

// Save selected movie index and price 

function setMovieData(movieIndex, moviePrice) {

	localStorage.setItem("selectedMovieIndex", movieIndex);
	localStorage.setItem("SelectedMoviePrice", moviePrice);
}


//Update total and count
function updateSelectCount() {
	const selectedSeats = document.querySelectorAll(".row .seat.selected")

	//sin arrow  function 
	// const seatsIndex = [  ...selectedSeats  ].map(  function  ( seat ) {
	//     return [ ...seats ].indexOf( seat );
	// });

	// con arrow function 
	const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

	localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

	console.log(seatsIndex);

	const selectSeatsCount = selectedSeats.length;
	count.innerText = selectSeatsCount;
	total.innerText = selectSeatsCount * ticketPrice;

}

// Get data from localStorage and show it in UI 
function populateUI() { //JSON.parse to make [] again 
	const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

	if (selectedSeats !== null && selectedSeats.length > 0) {
		seats.forEach((seat, index) => {

			if (selectedSeats.indexOf(index) > -1) {

				seat.classList.add('selected') 
			}
		});
	}


	//revisar los error
	const selectedMovieIndex =localStorage.getItem("selectedMovieIndex")

	// get movie localStorage
	if ( selectedMovieIndex !== null){
		movieSelect.selectedIndex = selectedMovieIndex;
	}

}

// Movie selected event
movieSelect.addEventListener("change", e => {
	ticketPrice = +e.target.value;

	// To select the index of the input ( Drowdonw)  console.log( e.target.selectedIndex, e.target.value);

	setMovieData(e.target.selectedIndex, e.target.value);
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

})

// Initial count and total set 
updateSelectCount()