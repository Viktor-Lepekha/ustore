//array of the wares
const hookahsUnsorted = [
{
title: 'Abarid Black',
firm: 'Abarid',
withCup: false,
coloredFlask: false,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/abarid_black.jpg',
price: 1800,
availability: true,
incart: 0
},
{
title: 'Dumok Hookah',
firm: 'Other',
withCup: true,
coloredFlask: false,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/dumok_hookah.jpg',
price: 1500,
availability: true,
incart: 0
},
{
title: 'Dud Shisha Temple Purple',
firm: 'Other',
withCup: true,
coloredFlask: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/kalyan-dud-shisha-temple-purple-fcf_enl.jpg',
price: 1200,
availability: true,
incart: 0
},
{
title: 'Meduza Original',
firm: 'Other',
withCup: true,
coloredFlask: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/kalyan-meduza.jpg',
price: 2500,
availability: true,
incart: 0
},
{
title: 'Palka Classic',
firm: 'Palka',
withCup: false,
coloredFlask: false,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/kalyan-palka-ukraina-classic-bez-kolby.jpg',
price: 1300,
availability: false,
incart: 0
},
{
title: 'Tiaga',
firm: 'Other',
withCup: true,
coloredFlask: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/kalyan-tiaga-fht_enl.jpg',
price: 1800,
availability: true,
incart: 0
},
{
title: 'Mini Hookah Vdokh Prany',
firm: 'Other',
withCup: true,
coloredFlask: false,
mini: true,
description: "Lorem ipsum",
image: 'assets/images/vdokh_prany.jpg',
price: 500,
availability: true,
incart: 0
},
{
title: 'Koress White',
firm: 'Other',
withCup: false,
coloredFlask: false,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/koress_white.jpg',
price: 1200,
availability: true,
incart: 0
},
{
title: 'Lex Circa',
firm: 'Other',
withCup: true,
coloredFlask: false,
image: 'assets/images/Lex_Circa.jpg',
price: 1800,
availability: true,
incart: 0
},
{
title: 'Nube Standard',
firm: 'Other',
withCup: false,
coloredFlask: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/nube.jpg',
price: 1400,
availability: true,
incart: 0
},
{
title: 'Sky Hookah',
firm: 'Other',
withCup: true,
coloredFlask: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/sky_hookah.jpg',
price: 1200,
availability: true,
incart: 0
},
{
title: 'Smokah big fua',
firm: 'Other',
withCup: true,
coloredFlask: true,
kaloud: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/smokah_big_fua.jpg',
price: 2000,
availability: true,
incart: 0
},
{
title: 'Yahya 600',
firm: 'Yahya',
withCup: true,
coloredFlask: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/yahya_elegance_600.jpg',
price: 1600,
availability: true,
incart: 0
},
{
title: 'Yahya 07 Blue',
firm: 'Yahya',
withCup: true,
coloredFlask: true,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/yahya_sy07.jpg',
price: 1200,
availability: false,
incart: 0
},
{
title: 'Yahya 140',
firm: 'Yahya',
withCup: true,
coloredFlask: false,
mini: false,
description: "Lorem ipsum",
image: 'assets/images/yahya140.jpg',
price: 1600,
availability: true,
incart: 0
}
];
//applying filters
let hookahs = hookahsUnsorted;
let filters = document.getElementsByClassName("filter");
for (let i = 0; i < filters.length; i++) {
	filters[i].addEventListener('click', () => {
		if (filters[0].checked) {
				hookahs = [];
				for (i=0; i<hookahsUnsorted.length; i++) {
					if (hookahsUnsorted[i].withCup) {
				hookahs.push(hookahsUnsorted[i]);
				}}DisplayList(hookahs, list_element, items, current_page);
				SetupPagination(hookahs, pagination_element, items);
				cartButtons()
				} else if (filters[1].checked) {
					 	hookahs = [];
						for (i=0; i<hookahsUnsorted.length; i++) {
						 		if (hookahsUnsorted[i].coloredFlask) {
						 	hookahs.push(hookahsUnsorted[i]);
						 	}}DisplayList(hookahs, list_element, items, current_page);
							 SetupPagination(hookahs, pagination_element, items);
							 cartButtons()
						 	 
				} else if (filters[2].checked) {
						hookahs = [];
					   for (i=0; i<hookahsUnsorted.length; i++) {
								if (hookahsUnsorted[i].kaloud) {
							hookahs.push(hookahsUnsorted[i]);
							}}DisplayList(hookahs, list_element, items, current_page);
							SetupPagination(hookahs, pagination_element, items);
							cartButtons()
							 
			   } else if (filters[0].checked && filters[1].checked) {
					hookahs = [];
				   for (i=0; i<hookahsUnsorted.length; i++) {
							if (hookahsUnsorted[i].withCup || hookahsUnsorted[i].coloredFlask) {
						hookahs.push(hookahsUnsorted[i]);
						}}DisplayList(hookahs, list_element, items, current_page);
						SetupPagination(hookahs, pagination_element, items);
						cartButtons()
						
		   } else if (filters[1].checked && filters[2].checked) {
				hookahs = [];
			   for (i=0; i<hookahsUnsorted.length; i++) {
						if (hookahsUnsorted[i].coloredFlask || hookahsUnsorted[i].kaloud) {
					hookahs.push(hookahsUnsorted[i]);
					}}DisplayList(hookahs, list_element, items, current_page);
					SetupPagination(hookahs, pagination_element, items);
					cartButtons()
					
	   } else if (filters[0].checked && filters[2].checked) {
			hookahs = [];
		   for (i=0; i<hookahsUnsorted.length; i++) {
					if (hookahsUnsorted[i].withcup || hookahsUnsorted[i].kaloud) {
				hookahs.push(hookahsUnsorted[i]);
				}}DisplayList(hookahs, list_element, items, current_page);
				SetupPagination(hookahs, pagination_element, items);
				cartButtons()
				
   } else if (filters[0].checked && filters[1].checked && filters[2].checked) {
	{	hookahs = [];
	   for (i=0; i<hookahsUnsorted.length; i++) {
				if (hookahsUnsorted[i].withcup || hookahsUnsorted[i].coloredFlask || hookahsUnsorted[i].kaloud) {
			hookahs.push(hookahsUnsorted[i]);
			}}DisplayList(hookahs, list_element, items, current_page);
			SetupPagination(hookahs, pagination_element, items);
			cartButtons()
			} 
	}else {
	   hookahs = hookahsUnsorted;
	   DisplayList(hookahs, list_element, items, current_page);
		SetupPagination(hookahs, pagination_element, items);
		cartButtons()
   }
	})
}
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
		let description = document.createElement('p');
		description.innerText = paginatedItems[i].description;
        let price = document.createElement('p');
		price.innerText = paginatedItems[i].price;
		let addButton = document.createElement('button');
		addButton.innerText = "Add to cart";
		addButton.classList.add('addToCart');
		if (paginatedItems[i].availability == false) {
			addButton.classList.add('unavailable')
		};
        container.appendChild(title);
		container.appendChild(image);
		container.appendChild(description);
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
		cartButtons();
	});
	return button;
}
//declaring functions
DisplayList(hookahs, list_element, items, current_page);
SetupPagination(hookahs, pagination_element, items);
onLoadCartNumbers();
displayCart();
cartButtons();
//working with cart
//selecting buttons
function cartButtons() {
	let addButtons = document.querySelectorAll('.addToCart');
for (let i = 0; i < addButtons.length; i++) {
	
	if (addButtons[i].classList.contains('unavailable')) {
		addButtons[i].addEventListener('click', () => {
			alert('This item is currently unavailable')})
	} else {
		addButtons[i].addEventListener('click', () => {
	if (current_page == 2) {
		cartNumbers(hookahs[i+4]);
		totalCost(hookahs[i+4]);
		displayCart()	
	}
	else if (current_page == 3) {
		cartNumbers(hookahs[i+8]);
		totalCost(hookahs[i+8]);
		displayCart()	
	}
	else if (current_page == 4) {
		cartNumbers(hookahs[i+12]);
		totalCost(hookahs[i+12]);
		displayCart()	
	}
	else {
	cartNumbers(hookahs[i]);
	totalCost(hookahs[i]);
	displayCart()
	 }});
}
}};

//checking the number of items in the cart
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
//adding items to cart
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
//calculating total cost
function totalCost(hookah) {
	let cartCost = localStorage.getItem('totalCost');
	cartCost = Number(cartCost)
	if (cartCost != null) {
		localStorage.setItem('totalCost', cartCost + hookah.price);
	} else {
		localStorage.setItem('totalCost', hookah.price);
	}	
}
//showing the cart
function displayCart() {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	let theCart = document.getElementById('cart');
	let cartCost = localStorage.getItem('totalCost');
	cartCost = Number(cartCost)
	if (cartItems) {
		theCart.innerHTML = '';
		Object.values(cartItems).map(item => {
			theCart.innerHTML +=`<div class = "product">
			<img class= "inCartPic" src=${item.image}>
			<span>${item.incart} ${item.title} for ${item.price} UAH
			</span>
			</div>`
		})
	} else {
		theCart.innerHTML = 'The Cart is empty'
	}
	theCart.innerHTML += `<div>Total: ${cartCost} UAH</div>
		<div><button id="clearStorage">Clear Cart</button></div>`
	let clearButton = document.getElementById('clearStorage');
	clearButton.addEventListener('click', () => localStorage.clear()
	);
	clearButton.addEventListener('click', () => location.reload()
	);
}

