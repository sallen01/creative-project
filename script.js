document.getElementById("colorSubmit").addEventListener("click", function(event) {
  event.preventDefault();
	const value = document.getElementById("colorInput").value;
	if (value === "")
		return;
	const url = "https://x-colors.herokuapp.com/api/random/" + value;
	fetch(url)
	    .then(function(response) {
	      return response.json();
			}).then(function(json) {
				let color = json.hex;
			document.body.style.backgroundColor = color;
		})
	});
