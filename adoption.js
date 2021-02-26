 // Below will be the JS for the Adoption Pics and Profiles


 var adopt = [
    {
      title: "Phoebe",
      sex: "Female",
      age: "3 yr old",
      image: "./AdoptionPics/black_white_cat.jpg",
      description: "This precious girl is ready for a new home. Good with other pets and children. Vaccinations are up to date.",
    },
    {
      title: "Jax",
      sex: "Male",
      age: "5 mo. old",
      image: "./AdoptionPics/BrownPuppy.jpg",
      description: "Jax is fairly new. Very playful! In need of plenty of attention and training; due to him still being young. He is potty trained, and loves to play outside. Current vaccinations are up to date, will need another round in a few months.",
    },
    {
      title: "",
      sex: "Male",
      age: "7 yr old",
      image: "./AdoptionPics/WhiteDog.jpg",
      description: "This old guy is in need of his 'fur'-ever home! He is the sweetest. Loves to cuddle, take walks, and go for rides in the car. Great with other pets and children. Vaccinations are up to date."
    },
    
    
    ];
    
      var postHTMLAU = "";
      for (var i =0; i < adopt.length; i++){
        var container3 = "<div class='card col-3'>"
        var heading3 = "<div class= 'card-body' " + "'><h3>" + adopt[i].title + "</h3>"
        var image3 = '<img height=\'160px\' width=\'160px\' src="' + adopt[i].image + '"/>'
        var sexAge = '<h4>' + adopt[i].age + ", " + adopt[i].sex + '</h4>'
        var description3 = '<div class=""><p>'+ adopt[i].description + '</p><button type="button" class="btn btn-dark" data-toggle="modal" data-target="#adoptModal">Adopt Me Today</button></div></div>'
        var concatThis = heading3 + image3 + sexAge + description3;
        postHTMLAU = postHTMLAU + concatThis
      };
    
      document.getElementById('adopt-us').innerHTML = postHTMLAU
    


      $('#adoptModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })


    