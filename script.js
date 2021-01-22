//array of the wares
const hookahsUnsorted = [
{
title: 'Abarid Black',
firm: 'Abarid',
image: 'assets/images/abarid_black.jpg',
price: 1800,
availability: 'Available',
incart: 0
},
{
title: 'Dumok Hookah',
firm: 'Other',
image: 'assets/images/dumok_hookah.jpg',
price: 1500,
availability: 'Available',
incart: 0
},
{
title: 'Dud Shisha Temple Purple',
firm: 'Other',
image: 'assets/images/kalyan-dud-shisha-temple-purple-fcf_enl.jpg',
price: 1200,
availability: 'Available',
incart: 0
},
{
title: 'Meduza Original',
firm: 'Other',
image: 'assets/images/kalyan-meduza.jpg',
price: 2500,
availability: 'Available',
incart: 0
},
{
	title: 'Palka Classic',
	firm: 'Palka',
image: 'assets/images/kalyan-palka-ukraina-classic-bez-kolby.jpg',
price: 1300,
availability: 'Unavailable',
incart: 0
},
{
	title: 'Tiaga',
	firm: 'Other',
image: 'assets/images/kalyan-tiaga-fht_enl.jpg',
price: 1800,
availability: 'Available',
incart: 0
},
{
	title: 'Mini Hookah Vdokh Prany',
	firm: 'Other',
image: 'assets/images/vdokh_prany.jpg',
price: 500,
availability: 'Available',
incart: 0
},
{
	title: 'Koress White',
	firm: 'Other',
image: 'assets/images/koress_white.jpg',
price: 1200,
availability: 'Available',
incart: 0
},
{
	title: 'Lex Circa',
	firm: 'Other',
image: 'assets/images/Lex_Circa.jpg',
price: 1800,
availability: 'Available',
incart: 0
},
{
	title: 'Nube Standard',
	firm: 'Other',
image: 'assets/images/nube.jpg',
price: 1400,
availability: 'Available',
incart: 0
},
{
	title: 'Sky Hookah',
	firm: 'Other',
image: 'assets/images/sky_hookah.jpg',
price: 1200,
availability: 'Available',
incart: 0
},
{
	title: 'Smokah big fua',
	firm: 'Other',
image: 'assets/images/smokah_big_fua.jpg',
price: 2000,
availability: 'Available',
incart: 0
},
{
	title: 'Yahya 600',
	firm: 'Yahya',
image: 'assets/images/yahya_elegance_600.jpg',
price: 1600,
availability: 'Available',
incart: 0
},
{
	title: 'Yahya 07 Blue',
	firm: 'Yahya',
image: 'assets/images/yahya_sy07.jpg',
price: 1200,
availability: 'Unavailable',
incart: 0
},
{
	title: 'Yahya 140',
	firm: 'Yahya',
image: 'assets/images/yahya140.jpg',
price: 1600,
availability: 'Available',
incart: 0
}
];
//applying filters
let hookahs = [];
let yahya = document.getElementById("firm1");
let palka = document.getElementById("firm2");
let abarid = document.getElementById("firm3");
let other = document.getElementById("firm4");
function filterHookahs() {for (let i = 0; i < hookahsUnsorted.length; i++) {
	if (yahya.checked == "true") {
		 {
			if (hookahsUnsorted[i].firm == 'Yahya') {
				hookahs.push(hookahsUnsorted[i])
			}
		}
	}
	if (palka.checked == "true") {
		
			if (hookahsUnsorted[i].firm == 'Palka') {
			hookahs.push(hookahsUnsorted[i])
			}
		}
	
	if (abarid.checked == "true") {
		
			if (hookahsUnsorted[i].firm == 'Abarid') {
			hookahs.push(hookahsUnsorted[i])
			}
		}
	}
	if (other.checked == "true") {
		
			if (hookahsUnsorted[i].firm == 'Other') {
			hookahs.push(hookahsUnsorted[i])
			}
		}
	else {
		hookahs = hookahsUnsorted
		}
	};
;
//inserting wares with pagination
let wares = document.getElementById('wares');
const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let items = 4;
function DisplayList (hookahs, wrapper, items_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = items_per_page * page;
	let end = start + items_per_page;
	let paginatedItems = hookahs.slice(start, end);

	for (let i = 0; i < paginatedItems.length; i++) {
		let container = document.createElement('div');
        container.classList.add('hookah-item');
        let title = document.createElement('h3');
        title.innerText = paginatedItems[i].title;
        let image = document.createElement('img');
        image.src = paginatedItems[i].image;
        let price = document.createElement('p');
		price.innerText = paginatedItems[i].price;
		let addButton = document.createElement('button');
		addButton.innerText = "Add to cart";
		addButton.classList.add('addToCart');
        container.appendChild(title);
        container.appendChild(image);
		container.appendChild(price);
		container.appendChild(addButton);
        list_element.appendChild(container)
	}
}

function SetupPagination (hookahs, wrapper, items_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(hookahs.length / items_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(hookahs, list_element, items, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}
//declaring functions
filterHookahs()
DisplayList(hookahs, list_element, items, current_page);
SetupPagination(hookahs, pagination_element, items);
onLoadCartNumbers();
//working with cart
//selecting buttons
let buttons = document.querySelectorAll('.addToCart');
//checking the number of the items in the cart
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
	cartNumbers(hookahs[i])
  })
}
function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	if (productNumbers) {
		document.getElementById('count').textContent = productNumbers;
	}
}
function cartNumbers(product) {

	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if (productNumbers) {
	localStorage.setItem('cartNumbers', productNumbers + 1);
	document.getElementById('count').textContent = productNumbers + 1;
	} else {
	localStorage.setItem('cartNumbers', 1);
	document.getElementById('count').textContent = 1;
	}
	setItems(product);
}
function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	if (cartItems != null) {
		if (cartItems[product.title] == undefined) {
			cartItems = {
				...cartItems,
				[product.title]: product
			}
		}
		cartItems[product.title].incart += 1;
	} else {
		product.incart = 1;
	cartItems = {
		[product.title]: product
	}
	}
	
	
	localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}