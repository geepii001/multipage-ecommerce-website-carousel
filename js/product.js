/* -------------product--------------------------------------------------------------------------------------------------- */

//PRODUCTS JSON
let products = null;
      fetch('js/products.json')
      .then(response => response.json())
      .then(data => {
        products = data;
        console.log(products);
        addDataToHTML();
      })
       // add data product to HTML
       let listProduct = document.querySelector('.listProduct');
       function addDataToHTML(){
         products.forEach(product => {
           //create new element Item
           let newProduct = document.createElement('a');
           newProduct.href = '/details.html?id=' + product.id;
           newProduct.classList.add('item');
           newProduct.innerHTML = `
            <img src="${product.image}">
             <h2>${product.name}</h2>
             <div class="price">${product.price}</div>
             ` ;
 
           //add this element in Listproduct
           listProduct.appendChild(newProduct);
         })
       }


