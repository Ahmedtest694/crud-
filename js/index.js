// var prouductNameInput = document.getElementById("productname");
// var prouductPriceInput = document.getElementById("productprice");
// var prouductCategoryInput = document.getElementById("productcategory");
// var prouductDescInput = document.getElementById("productdescription");
// var prouductImageInput = document.getElementById("productimage");
// var productSearchInput = document.getElementById("search");
// var addbtn = document.getElementById("add-btn");
// var updatebtn = document.getElementById("update-btn");
// var productList;
// var myIndex;
// if (localStorage.getItem("products") == null) {
//   var productList = [];
// } else {
//   productList = JSON.parse(localStorage.getItem("products"));
//   displayProducts(productList);
// }

// function addProduct() {

//   if ( prouductNameInput.classList.contains("is-valid")
//   && prouductPriceInput.classList.contains("is-valid")
//   && prouductCategoryInput.classList.contains("is-valid")
//   && prouductDescInput.classList.contains("is-valid") 
//   ){
//     var products = {
//     name: prouductNameInput.value,
//     price: prouductPriceInput.value,
//     category: prouductCategoryInput.value,
//     description: prouductDescInput.value,
//     image: `image/${prouductImageInput.files[0]?.name}`,
//   };
//    productList.push(products);
//   console.log(productList);
//   localStorage.setItem("products", JSON.stringify(productList));
//   clear();
//   displayProducts(productList);
// }
// else{
//   alert("please enter valid data")
// }
//   }

  
  

 
// function clear() {
//   prouductNameInput.value = null;
//   prouductPriceInput.value = null;
//   prouductCategoryInput.value = null;
//   prouductDescInput.value = null;
//   prouductImageInput.value = null;
// }

// function deleteProduct(deleteProduct) {
//   productList.splice(deleteProduct, 1);
//   localStorage.setItem("products", JSON.stringify(productList));
//   displayProducts(productList);
// }

// function searchProduct(word) {
//   var word = productSearchInput.value;
//   //   var cartoona = ``;
//   var searchedProducts = [];
//   for (var i = 0; i < productList.length; i++) {
//     if (
//       productList[i].name.toLowerCase().includes(word.toLowerCase()) == true
//     ) {
//       searchedProducts.push(productList[i]);

//       //  still command this line

//       //     cartoona += `
//       //     <div class="col-md-2 ">
//       //         <div class="item">
//       //             <img src="${productList[i].image}" alt="iphone" class="w-100">
//       //             <h2 class="h4"> name : ${productList[i].name}</h2>
//       //             <p>Price: ${productList[i].price}</p>
//       //             <p>Category: ${productList[i].category}</p>
//       //             <p>Description: ${productList[i].description}</p>
//       //             <button onclick="deleteProduct(${i})" class="btn btn-danger m-3"><i class="fas fa-trash"></i> Delete</button>
//       //             <button onclick="updateProduct(${i})" class="btn btn-warning"><i class="fas fa-edit"></i> Update</button>
//       //         </div>
//       //     </div>

//       // ` STILL COMMAND THIS LINE
//     }
//   }
//   // document.getElementById("myrow").innerHTML = cartoona;         this line still command 


//   displayProducts(searchedProducts);
// }

// function displayProducts(arr) {
//   var cartoona = ``;
//   for (var i = 0; i < arr.length; i++) {
//     cartoona += `
//         <div class="col-md-2 ">
//             <div class="item">
//                 <img src="${arr[i].image}" alt="iphone" class="w-100">
//                 <h2 class="h4"> name : ${arr[i].name}</h2>
//                 <p>Price: $${arr[i].price}</p>
//                 <p>Category: ${arr[i].category}</p>
//                 <p>Description: ${arr[i].description}</p>
//                 <button onclick="deleteProduct(${i})" class="btn btn-danger m-3"><i class="fas fa-trash"></i> Delete</button>
//                 <button onclick="edit(${i})" class="btn btn-warning"><i class="fas fa-edit"></i> Update</button>

//             </div>
//         </div>
// </div>
// `;
//   }
//   document.getElementById("myrow").innerHTML = cartoona;
// }


// function validateInputs(element){

//   var regex = {
//     productname: /^[A-Z][a-z]{3,8}$/,
//     productprice: /^[1-9][0-5]{2,5}$/,
//     productcategory: /^(Electronics|Clothing|Home & Kitchen|Books|Toys)$/i,
//     productdescription: /^[A-Z][a-z]{3,}$/i,
//   };

//   if (regex[element.id].test(element.value)) {
//     element.classList.add("is-valid");
//     element.classList.remove("is-invalid");
//     element.nextElementSibling.classList.add("d-none");
    
//   } else {
//     element.classList.add("is-invalid");
//     element.classList.remove("is-valid");
//     element.nextElementSibling.classList.remove("d-none");
//   }
// }


// function edit(index){
//   console.log(index);
//   myIndex = index;
//   prouductNameInput.value = productList[index].name;
//   prouductPriceInput.value = productList[index].price;
//   prouductCategoryInput.value = productList[index].category;
//   prouductDescInput.value = productList[index].description;
//   addbtn.classList.add("d-none");
//   updatebtn.classList.remove("d-none");
//   // this make validation icons appear when clicking update
//   prouductImageInput.classList.add("is-valid");
//   validateInputs(prouductNameInput);
//   validateInputs(prouductPriceInput);
//   validateInputs(prouductCategoryInput);
//   validateInputs(prouductDescInput);


// }
// function updateProduct(){
//   if ( prouductNameInput.classList.contains("is-valid")
//   && prouductPriceInput.classList.contains("is-valid")
//   && prouductCategoryInput.classList.contains("is-valid")
//   && prouductDescInput.classList.contains("is-valid") 
//   ){
//   productList[myIndex].name = prouductNameInput.value;
//   productList[myIndex].price = prouductPriceInput.value;
//   productList[myIndex].category = prouductCategoryInput.value;
//   productList[myIndex].description = prouductDescInput.value;
//   localStorage.setItem("products", JSON.stringify(productList));
//   displayProducts(productList);
//   addbtn.classList.remove("d-none");
//   updatebtn.classList.add("d-none");
//   }
//   else{
//     alert("please enter valid data")  

   




//   }
// }










// another broject

// var main = document.querySelector("#main img");
// var branches = document.querySelectorAll(".branches img");

// for (var i = 0; i < branches.length; i++) {
//   branches[i].addEventListener("click", function (e) {
      
//     var mysrc=(e.target.src);
//     main.setAttribute("src",mysrc);
    
//   })
// }


// var lightbox = document.querySelector(".lightbox");
var images = document.querySelectorAll(".item img");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    console.log(e.target);
    

    

  })
    
}
