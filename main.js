document.addEventListener('click', e => {
	// Selects the question:
	if (e.target.matches('.accordion__question')) {
		console.log('button')

		// for each question element checks if it's the same which was clicked, when the element is NOT the same, this will remove the class show. 
		//This allows to only have one question element open (so if I click on another question element the one which was open will close and the new one will be the only one opened). 
		//The other effect of this is that we can close the same element by clicking the question element again (as previously it was only possible by opening another element and there was always one element opened) 
		document.querySelectorAll('.accordion__question').forEach(question => {
			if (question !== e.target) {
				question.classList.remove('show')
			}
		})
		document.querySelectorAll('.accordion__icon').forEach(icon => {
			if (icon !== e.target.nextElementSibling) {
				icon.classList.remove('show')
			}
		})

		document.querySelectorAll('.accordion__answer').forEach(answer => {
			if (answer !== e.target.parentElement.nextElementSibling) {
				answer.classList.remove('show')
			}
		})
		e.target.classList.toggle('show')
		e.target.nextElementSibling.classList.toggle('show')
		e.target.parentElement.nextElementSibling.classList.toggle('show')
	}

	// Selects the arrow icon:
	if (e.target.matches('.accordion__icon ')) {
		console.log('button')

		document.querySelectorAll('.accordion__question').forEach(question => {
			if (question !== e.target.previousElementSibling) {
				question.classList.add('show')
			}
		})
		document
			.querySelectorAll('.accordion__icon')
			.forEach(icon => {
				if(icon !== e.target){
					icon.classList.remove('show')
				}
			})
		document
			.querySelectorAll('.accordion__answer')
			.forEach(answer => {
				if(answer !== e.target.parentElement.nextElementSibling){
					answer.classList.remove('show')
				}
			})

		e.target.classList.toggle('show')
		e.target.previousElementSibling.classList.toggle('show')
		e.target.parentElement.nextElementSibling.classList.toggle('show')
	}
})
