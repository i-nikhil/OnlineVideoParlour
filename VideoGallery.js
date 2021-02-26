const cartData = [
	`<article class="video text-center">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/t3tsMEhlvwM"
    >
<img class="videoThumb"
        src="https://i.gifer.com/CqND.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Intro-1 ₹190</h2>

  <button class="cart-btn redtext text-center" data-cartNo="0" onclick="addToCart(0)">
    Add to Cart 🛒
  </button>
</article>`,
	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/CskchdyN9Qw"
    >
      <img
        class="videoThumb"
        src="https://bcblive.com/wp-content/uploads/lbl-intro-gif.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Intro-2 ₹240</h2>
  <button class="cart-btn redtext text-center" data-cartNo="1" onclick="addToCart(1)">
    Add to Cart 🛒
  </button>
</article>`,

	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/e7eMKW6DZHc"
    >
      <img
        class="videoThumb"
        src="https://thumbs.gfycat.com/ElatedClumsyAxisdeer-max-1mb.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Intro-3 ₹300</h2>
  <button class="cart-btn redtext text-center" data-cartNo="2" onclick="addToCart(2)">
    Add to Cart 🛒
  </button>
</article>`,

	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/7lvXbfNBIQg"
    >
      <img
        class="videoThumb"
        src="https://i.pinimg.com/originals/b7/97/30/b797305e2dbcc14fc6851b4f8db0b0f3.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Travel-1 ₹540</h2>
  <button class="cart-btn redtext text-center" data-cartNo="3" onclick="addToCart(3)">
    Add to Cart 🛒
  </button>
</article>`,

	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/UnKJL_ifwkk"
    >
      <img
        class="videoThumb"
        src="http://static1.squarespace.com/static/56392560e4b0cb1b2c7fce7f/564ff791e4b02fdfadad30da/598d1dc3893fc0cccf605e4d/1507221546378/giphy-8.gif?format=1500w"
    /></a>
  </figure>
  <h2 class="videoTitle">Travel-2 ₹680</h2>
  <button class="cart-btn redtext text-center" data-cartNo="4" onclick="addToCart(4)">
    Add to Cart 🛒
  </button>
</article>`,

	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/SMKPKGW083c"
    >
      <img
        class="videoThumb"
        src="https://www.edreams.com/blog/wp-content/uploads/sites/3/2016/03/mountains-travel.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Travel-3 ₹450</h2>
  <button class="cart-btn redtext text-center" data-cartNo="5" onclick="addToCart(5)">
    Add to Cart 🛒
  </button>
</article>
`,
	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/N5HQLRBOMBg"
    >
      <img
        class="videoThumb"
        src="https://media1.giphy.com/media/l4FAPaGGeB7D1LfIA/200.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Closer-1 ₹85</h2>
  <button class="cart-btn redtext text-center" data-cartNo="6" onclick="addToCart(6)">
    Add to Cart 🛒
  </button>
</article>`,

	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/CrL-lNtN140"
    >
      <img
        class="videoThumb"
        src="https://thumbs.gfycat.com/AdoredTinyFirecrest-size_restricted.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Closer-2 ₹120</h2>
  <button class="cart-btn redtext text-center" data-cartNo="7" onclick="addToCart(7)">
    Add to Cart 🛒
  </button>
</article>`,

	`<article class="video">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/DrSm4tzGvcM"
    >
      <img
        class="videoThumb"
        src="https://i.pinimg.com/originals/94/2d/cd/942dcd09a6e92d09f7502a5d744b8473.gif"
    /></a>
  </figure>
  <h2 class="videoTitle">Closer-3 ₹135</h2>
  <button class="cart-btn redtext text-center" data-cartNo="8" onclick="addToCart(8)">
    Add to Cart 🛒
  </button>
</article>`,
];

const prices = [190, 240, 300, 540, 680, 450, 85, 120, 135];

let userCart= new Set();

window.addEventListener("DOMContentLoaded", init);

function init() {
	loadCarts();
}

function loadCarts() {
	const main = document.querySelector(".main");

	setTimeout(() => {
		let carts = "";
		cartData.forEach((cart) => {
			carts += cart;
		});

		main.innerHTML = carts;
	}, 100);
}

function showCartPopUp() {
  document.querySelector(".cart-popup").classList.remove("hidden");


  setTimeout(() => {
    populateCarts();
  }, 1000);
  
}

function hideCartPopUp() {
	document.querySelector(".cart-popup").classList.add("hidden");
}

function addToCart(index){

  if(userCart.has(index)){
    alert("This item is already in your cart!!")
  }else{
    userCart.add(index);

    alert("cart added successfully")
  }
}

function populateCarts(){

  const userCarts= document.getElementById('users-carts');



  let totalPrice = 0;
  let products = '';

  userCart.forEach(cartIndex=>{
    totalPrice+=prices[cartIndex];
    products+=cartData[cartIndex];
  })


  userCarts.innerHTML=products;
  document.getElementById('total-amount').innerHTML = "₹ " + totalPrice;

}


function checkuot() {
  alert(
`Payment Successful! 
Order Id: ${parseInt(Math.random() * 100000000)}
`);
  userCart.clear()
  populateCarts()
}
