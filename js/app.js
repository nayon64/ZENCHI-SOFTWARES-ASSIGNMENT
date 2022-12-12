let colorPicker = document.getElementById("color-picker");
let colorSlot = document.getElementById("color-slot");
let exploreBtn = document.getElementById("explore-btn");
let card=document.getElementById('card')
let positionLeft = document.getElementById("positionLeft");
let positionRight = document.getElementById("positionRight");



colorPicker.addEventListener("change", () => {
	console.log(colorPicker.value)
	let bgCol = colorPicker.value
	colorSlot.style.backgroundColor = bgCol
	exploreBtn.style.backgroundColor = bgCol
	// card.style.bottom="30px"
	
	// document.style.bgColor=bgCol
})

function changeFunc() {
	 
	
   var selectBox = document.getElementById("selectBox");
   var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	console.log(selectedValue);
	if (selectedValue == 1) {
		console.log("left")
		card.style.left = "30px";
		card.style.right = null;
	}
	if (selectedValue == 2) {
		console.log("right")
		card.style.right = "30px";
		card.style.left = null;
	}
 }
