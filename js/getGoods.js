function getGoods() {

	const links = document.querySelectorAll('.navigation-link');

	const getData = () => {
		fetch('/Willberries_JS/db/db.json')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				console.log(data);
				localStorage.setItem('goods', JSON.stringify(data));
			})			
	}	

	links.forEach(function(link) {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			getData();
		})
	})

	getData();

	// localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]));
	// console.log(JSON.parse(localStorage.getItem('goods')));
	//localStorage.removeItem('goods');	


	

}

getGoods()