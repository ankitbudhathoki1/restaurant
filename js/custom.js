$('.main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.special-menu-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
$('.testimonial-items').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

// settings for notice modal
$('document').ready(function(){
$('#notice').modal('show')
})



// password show hide
let eye = document.getElementById("eye");
let password = document.getElementById("password");

eye.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        eye.setAttribute("class", "fa-solid fa-eye")
    } else{
        password.type = "password";
        eye.setAttribute("class", "fa-solid fa-eye-slash")
    }
}