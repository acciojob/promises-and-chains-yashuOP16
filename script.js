const form = document.getElementById("myForm");

form.addEvnetListner('submit' , function (e) {
	event.preventDefault();

	const age = document.getElementById('age').value;
	const name = document.getElementById('name').value;

	if(age === '' || name = ''){
		alert('please enter valid details')
		return;
	}

	const votingPromise = new Promise((resolve, reject) => {
		setTimeout (() => {
			if(age > 18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry . You aren't old enough.`)
			}
		}, 4000)
	})

	 votingPromise
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
    });
})