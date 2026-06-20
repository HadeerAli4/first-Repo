const container = document.getElementById("products");

async function FetchDate(){
try{
    const response = await axios.get(`https://dummyjson.com/products`);
    const products = response.data.products;
    //can use foreach or map
    products.map(p => {
        const mydiv = document.createElement('div');
        mydiv.classList.add('card-product');
        mydiv.innerHTML=`
        <img src= ${p.images[0]} alt= ${p.description}>
        <h2>${p.title}</h2>
        <p>$${p.price}</p>
        <button class ="add-btn" onclick= "Add()" > Add to cart </button>
        `;
        container.appendChild(mydiv);
    })

}catch(error){
    console.log(`Error: ${error}`);
}
}
FetchDate();


let spanCount = document.getElementById('cartCount');
const addBtns = document.querySelectorAll('add-btn'); 
let counter = localStorage.getItem('cart-count');
spanCount.innerHTML = counter;

function Add(){
        counter ++;
            localStorage.setItem('cart-count',counter);
            spanCount.innerHTML = counter;
            alert("Item successfully added to Cart!");
};

function Clear(){
    localStorage.clear();
    counter =0;
    spanCount.innerHTML = counter;
    alert("Cart Cleared ");
}
/*
const nightBtn = document.getElementById('night');
        const nightIcon = nightBtn.querySelector('i');

        nightBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                nightIcon.classList.replace('fa-moon', 'fa-sun');
            } else {
                nightIcon.classList.replace('fa-sun', 'fa-moon');
            }
        });

*/

const toggleBtn = document.getElementById('night');
toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
})

