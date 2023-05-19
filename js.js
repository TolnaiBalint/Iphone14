const container = document.getElementById('container')
const buttons = document.querySelectorAll('#controller button')
const perspectiveSlides = document.querySelectorAll('.color__perspective')
let currentColor = 'blue'

// For each color picker button, on click, do the following
buttons.forEach(button => {
	button.addEventListener("click", function() {
		
		// On click, remove the "active" class (black ring) from color circle button
		buttons.forEach(button => {
			button.classList.remove('active');
		})
		// On click, add the "active" class (black ring) to the clicked color circle button
		button.classList.add('active');
		
		// On click, get the newly clicked color circle button's color
		let newColor = button.getAttribute('data-color')
		
		// On click, remove the "rotate" and "rotate-reverse" classes (perspective animations) from the center tile text
		perspectiveSlides.forEach(el=>el.classList.remove('rotate', 'rotate-reverse'))
		perspectiveSlides.forEach(el=>el.offsetHeight) // This call to "offsetHeight" forces the browser to repaint the styles
		
		// Reusable function for adding classes "rotate" or "rotate-reverse" depending on color selected (depends on if it was selected to left or right of the currently selected color)
		function rotateColor(nextColors) {
			if (nextColors.includes(currentColor)) {
				perspectiveSlides.forEach(el=>el.classList.add('rotate'));
			} else {
				perspectiveSlides.forEach(el=>el.classList.add('rotate-reverse'));
			}
			currentColor = newColor
		}
		
		// If the color picked is X style the tile "slide" content to the left, bring opacity from 0 to 1, and do the opposite for the others. Trigger reusable function that adds "rotate" or "rotate-reverse" classes to the center tile text.
		if (newColor == "blue") {
			document.querySelectorAll('.blue-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
			document.querySelectorAll('.purple-slide, .midnight-slide, .starlight-slide, .red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
			rotateColor(["purple", "midnight", "starlight", "red"])
			
		} else if (newColor == "purple") {
			document.querySelectorAll('.purple-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
			document.querySelectorAll('.blue-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
			document.querySelectorAll('.midnight-slide, .starlight-slide, .red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
			rotateColor(["midnight", "starlight", "red"])
			
		} else if (newColor == "midnight") {
			document.querySelectorAll('.midnight-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
			document.querySelectorAll('.blue-slide, .purple-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
			document.querySelectorAll('.starlight-slide, .red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
			rotateColor(["starlight", "red"])
			
		} else if (newColor == "starlight") {
			document.querySelectorAll('.starlight-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
			document.querySelectorAll('.blue-slide, .purple-slide, .midnight-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
			document.querySelectorAll('.red-slide').forEach(el=>{el.style.left = '150%'; el.style.opacity = "0"});
			rotateColor(["red"])
			
		} else if (newColor == "red") {
			document.querySelectorAll('.red-slide').forEach(el=>{el.style.left = '0'; el.style.opacity = "1"});
			document.querySelectorAll('.blue-slide, .purple-slide, .midnight-slide, .starlight-slide').forEach(el=>{el.style.left = '-150%'; el.style.opacity = "0"});
			rotateColor([])
		}
	});
});