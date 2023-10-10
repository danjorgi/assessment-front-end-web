console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your information has been submitted!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckCompliment = () => {
	alert(`You're as cute as a duck!`)
}

let ducky = document.querySelector('img');

ducky.addEventListener('mouseover', duckCompliment);