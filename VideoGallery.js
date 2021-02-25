const cartData = [
	`<article class="video text-center">
  <figure>
    <a
      class="fancybox fancybox.iframe"
      href="https://youtu.be/t3tsMEhlvwM"
    >
      <img
        class="videoThumb"
        src="https://i.ytimg.com/an_webp/t3tsMEhlvwM/mqdefault_6s.webp?du=3000&sqp=CNru3YEG&rs=AOn4CLAE2rbOYVGTSyg5meGFBhGQGP4HDw"
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
        src="https://i.ytimg.com/an_webp/CskchdyN9Qw/mqdefault_6s.webp?du=3000&sqp=CKzq3YEG&rs=AOn4CLD_RGuepjHWFvtBWlk6Vf-CoC3fug"
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
        src="https://i.ytimg.com/an_webp/e7eMKW6DZHc/mqdefault_6s.webp?du=3000&sqp=CLDK3YEG&rs=AOn4CLAop6iN08vqOXgBAMi9Q_ntuxnd_w"
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
        src="https://i.ytimg.com/an_webp/7lvXbfNBIQg/mqdefault_6s.webp?du=3000&sqp=CIjz3YEG&rs=AOn4CLAaXnxs2i1RqEb59jpv6326_VFnZg"
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
        src="https://i.ytimg.com/an_webp/UnKJL_ifwkk/mqdefault_6s.webp?du=3000&sqp=CMju3YEG&rs=AOn4CLBOUTVZQcA0H6CisCIpCo3hbj-icw"
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
        src="https://i.ytimg.com/an_webp/SMKPKGW083c/mqdefault_6s.webp?du=3000&sqp=CL7O3YEG&rs=AOn4CLAwHUaahjjiXsI5OFNUrzT0Bp96Xg"
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
        src="https://i.ytimg.com/an_webp/N5HQLRBOMBg/mqdefault_6s.webp?du=3000&sqp=CNjk3YEG&rs=AOn4CLDiBf35UsqNe4dg0un4QaHCTt8ziA"
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
        src="https://i.ytimg.com/an_webp/CrL-lNtN140/mqdefault_6s.webp?du=3000&sqp=CP2I3oEG&rs=AOn4CLBwhyTiFguFsBKbdFWHikj5aK3ztQ"
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
        src="https://i.ytimg.com/an_webp/DrSm4tzGvcM/mqdefault_6s.webp?du=3000&sqp=CP3t3YEG&rs=AOn4CLBRyVJVuVHG84plc2OxBkqFiAjHCw"
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