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



  