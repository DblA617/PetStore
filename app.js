// This is apart of the headlining section of the main/landing page. 
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})


// This is setup for the shop page
// var shop = [
//   {
//     title: 'Beds',
//     image: "",
//     price: '$7.50 and up',
//     description: "It's a pet bed"
//   }
//   ];
//   var postHTML = ""
//   for (var i = 0; i < shop.length; i++){
//     var container = '<div class="container" ' + '>'
//       var heading = '<div class=" ' + '"><h2>' + shop[i].title + '</h2>'
//       var image = '<img src="' + shop[i].image + '"/>'
//       var price = '<p> $' + shop[i].price + '</p>'
//       var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="">add to cart</button></div></div>'
//       var concatThis = heading + image + price + description;
//       postHTML = postHTML + concatThis
//   }
//   document.getElementById('market').innerHTML = postHTML

  var beds = [
    {
      title: "Beds",
      image: "",
      price: "$39.95",
      description: "Plush oversized pet bed"
    }
  ];
  var innerHTML = ""
  for (var i = 0; <shop.length; i++){
    var container = "<div class='container'>"
    var heading = '<div class=" ' + '"><h2>' + shop[i].title + '</h2>'
      var image = '<img src="' + shop[i].image + '"/>'
      var price = '<p> $' + shop[i].price + '</p>'
      var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="">add to cart</button></div></div>'
      var concatThis = heading + image + price + description;
      postHTML = postHTML + concatThis

  };
  document.getElementById('market').innerHTML = postHTML