// TODO: Declare any global variables we need
let totalHeads = 0
let totalTails = 0
let currentSide = 0
let total = totalHeads + totalTails


document.addEventListener('DOMContentLoaded', function () {
	
    // TODO: Add event listener and handler for flip and clear buttons
	document.getElementById('flip').addEventListener('click', () => {
		let weFlippedHeads = Math.random() < .50 
		
		if(weFlippedHeads){
			document.getElementById('penny-image').src = "assets/images/penny-heads.jpg"
			document.getElementById('message').textContent = "It was flipped heads"
			console.log("weFlippedHeads")
			totalHeads += 1
			total += 1
			console.log(total)
			console.log(totalHeads)
		}else{
			document.getElementById('penny-image').src = "assets/images/penny-tails.jpg"
			document.getElementById('message').textContent = "It was flipped Tails"
			console.log("weFlippedTails")
			totalTails += 1
			total += 1
			console.log(total)
			console.log(totalTails)
		}
		
		
		
		let totalHeadsPercent = 0
		let totalTailsPercent = 0
		
		if(total > 0){
			totalHeadsPercent = Math.round((totalHeads/total) * 100) 
			totalTailsPercent = Math.round((totalTails/total) * 100)
		}
		
		document.getElementById('heads').textContent = totalHeads
		document.getElementById('heads-percent').textContent = totalHeadsPercent
		document.getElementById('tails').textContent = totalTails
		document.getElementById('tails-percent').textContent = totalTailsPercent
	})


	document.getElementById('clear').addEventListener('click', () => {
		totalHeads = 0
		totalTails = 0
		total = 0
		
		document.getElementById('heads').textContent = totalHeads
		document.getElementById('heads-percent').textContent = 0 + '%'
		document.getElementById('tails').textContent = totalHeads
		document.getElementById('tails-percent').textContent = 0 + '%'
	})

})