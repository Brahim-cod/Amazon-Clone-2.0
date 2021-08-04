function getItems() {
    
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                make: doc.data().make,
                name: doc.data().name,
                rating: doc.data().rating,
                price: doc.data().price
            })
        });
        generateitem(items);
    });
    
}

function addToCart(item) {
    let cartItem = db.collection('cart-items').doc(item.id);

    cartItem.get()
    .then(function(doc) {
        
        if(doc.exists){

            cartItem.update({
                quantity: doc.data().quantity + 1
            })

        } else {

            cartItem.set({
                image: item.image,
                make: item.make,
                name: item.name,
                rating: item.rating,
                price: item.price,
                quantity: 1
            })

        }

    })



};

function generateitem(items) {
    
    let itemsHTML = "";
    items.forEach((items) => {
        let doc = document.createElement('div');
        doc.classList.add("main-product", "mr-5", "mt-5");
        doc.innerHTML = `
                <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                    <img class="w-full h-full object-contain" src="${items.image}">
                </div>
                <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                    ${items.name}
                </div>
                <div class="product-make text-green-700 font-bold">
                    ${items.make}
                </div>
                <div class="product-rating text-yellow-300 font-bold my-1">
                    ⭐⭐⭐⭐⭐ ${items.rating}
                </div>
                <div class="product-price font-bold text-gray-700 text-lg">
                    ${numeral(items.price).format('$0,0.00')}
                </div>
        `;
        let addToCartEl = document.createElement('div');
        addToCartEl.classList.add("add-to-cart", "bg-yellow-500", "flex", "justify-center", "items-center", "rounded-lg", "text-white", "text-lg", "h-8", "w-28", "cursor-pointer", "mt-1", "hover:bg-yellow-600")
        addToCartEl.innerHTML = 'Add to cart';
        addToCartEl.addEventListener(
            "click",
            function () {
                addToCart(items);
            }
        );
        doc.appendChild(addToCartEl);
        document.querySelector('.main-section-products').appendChild(doc);
    })
}

getItems();