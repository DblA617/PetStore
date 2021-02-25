// This is apart of the headlining section of the main/landing page. 
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 2000,
//   wrap: false
// })


// This is setup for the shop page

  var shop = [
    {
      title: "Dog Banana Pajamas",
      image: "./Images/dogBanana.jpg",
      price: "39.95",
      description: "Cute, comfy, and stylish pajamas."
    },
    {
      title: "Pet Champion Hoodie",
      image: "./Images/dogHoodie.jpg",
      price: "39.95",
      description: "Stylish and warm pet hoodie."
    },
    {
      title: "Pet Block Color T-Shirt",
      image: "./Images/dogShirt.jpg",
      price: "39.95",
      description: " Stylish Tee for your fur-baby"
    },
    {
      title: "Blue Diamond Dog Food",
      image: "./ShopImages/BlueBuffaloDogFood.webp",
      price: '25.00',
      description: 'Quality Dog Food - Good Price, Healthy Choice'
    }
  ];
  var postHTML = ""
  for (var i = 0; i < shop.length; i++){
    var container = "<div class='card col-4'>" 
    var heading = '<div class=" card-body" ' + '"><h3>' + shop[i].title + '</h3>'
      var image = '<img height=\'150px\' width=\'150px\' src="' + shop[i].image + '"/>'
      var price = '<p> $' + shop[i].price + '</p>'
      var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="">add to cart</button></div></div>'
      var concatThis = heading + image + price + description;
      postHTML = postHTML + concatThis

  };
  document.getElementById('market').innerHTML = postHTML



  var shopp = [
    {
    title: "Cat Food",
    image: "./ShopImages/ShebaCatFood.webp",
    price: "25.99",
    description: "Top of the line dry cat food."

    },
    {
      title: "Cat Food",
      image: "./ShopImages/DiamondCatFood.webp",
      price: "15.98",
      description: "Dry Cat Food",

    },
    {
      title: "Cat Food",
      image: "./ShopImages/PurinaOneCatFood.webp",
      price: "19.99",
      description: "Purina One Cat Food"
    }
  ];
  var postHTMLB = ""
  for (var i = 0; i < shopp.length; i++){
    var container2 = "<div class='card col-4'>" 
    var heading2 = '<div class=" card-body" ' + '"><h3>' + shopp[i].title + '</h3>'
      var image2 = '<img height=\'150px\' width=\'150px\' src="' + shopp[i].image + '"/>'
      var price2 = '<p> $' + shopp[i].price + '</p>'
      var description2 = '<div class=""><p>'+ shopp[i].description + '</p><button type="button" class="">add to cart</button></div></div>'
      var concatThis = heading2 + image2 + price2 + description2;
      postHTMLB = postHTMLB + concatThis
  };
  document.getElementById('market-2').innerHTML = postHTMLB






  // Below will be the JS for the Adoption Pics and Profiles


var adopt = [
{
  title: "Phoebe,",
  sex: "Female",
  age: 3,
  image: "Adoption pics/black_white_cat.jpg",
  description: "",
},
{
  title: "",
  sex: "",
  age: "",
  image: "Adoption pics\Brown puppy.jpg",
  description: "",
},
{
  title: "",
  sex: "",
  age: "",
  image: "Adoption pics\White dog.jpg",
  description: "",
},


];

  var postHTMLAU = ""
  for (var i =0; i < adopt.length; i++){
    var container3 = "<div class='card col-4'>"
    var heading3 = "<div class= 'card-body' " + "'><h3>" + adopt[i].title + "</h3>"
    var image3 = '<img height=\'160px\' width=\'160px\' src="' + adopt[i].image + '"/>'
    var sexAge = '<p>' + adopt[i].age + ", " + adopt[i].sex + '</p>'
    var description3 = '<div class=""><p>'+ adopt[i].description + '</p><button type="button" class="">Adopt Me Today</button></div></div>'
    var concatThis = heading3 + image3 + sexAge + description3;
      postHTMLAU = postHTMLAU + concatThis
  };

  document.getElementById('adopt-us').innerHTML = postHTMLAU





  