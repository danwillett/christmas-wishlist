var homeBt = document.getElementById('home-button')
console.log(homeBt)

var bodyBt = document.getElementById('body-button');
var beautyBt = document.getElementById('beauty-button');
var biologyBt = document.getElementById('biology-button');

var homeEl = document.querySelectorAll('.home');
console.log(homeEl);
var bodyEl = document.querySelectorAll('.body');
var beautyEl = document.querySelectorAll('.beauty');
var biologyEl = document.querySelectorAll('.biology');

hideBody = function() {
    $(bodyEl).hide();
}

hideBeauty = function() {
    $(beautyEl).hide();
}

hideBiology = function() {
$(biologyEl).hide();
}

hideHome = function() {
    $(homeEl).hide();
    console.log('working?')

    // $('#bio-pic').hide()
}

hideBody();
hideBeauty();
hideBiology();

bodyBt.addEventListener("click", function(event){
    event.preventDefault;
    event.stopPropagation;
console.log("hi")
$(bodyEl).show();

hideBeauty();
hideBiology();
hideHome();

})

beautyBt.addEventListener("click", function(event){
    event.stopPropagation;
    event.preventDefault;
    console.log("hi")
    $(beautyEl).show();
    
    hideBody();
    hideBiology();
    hideHome();
    
    })

    biologyBt.addEventListener("click", function(event){
        event.stopPropagation;
        event.preventDefault;
        console.log("hi")
        $(biologyEl).show();
        
        hideBody();
        hideBeauty();
        hideHome();
        
        })

homeBt.addEventListener("click", function(event){
    event.stopPropagation;
    event.preventDefault;
    console.log("hi")
    $(homeEl).show();
    
    hideBody();
    hideBeauty();
    hideBiology();
    
    })
    // $(bodyBt).click(function(){
    //     console.log($('#home'))
    //     $('#home').hide();

    //     $('#body').removeClass('blank');
    //     $('#beauty').addClass('blank');
    //     $('#biology').addClass('blank')

    // })

    // $(beautyBt).click(function(){
    //     $('#home').addClass('blank');

    //     $('beauty').removeClass('blank')
    //     $('body').addClass('blank')
    //     $('biology').addClass('blank')
    // })

    // $(biologyBt).click(function(){
    //     $('home').addClass('blank');

    //     $('#beauty').addClass('blank')
    //     $('#body').addClass('blank')
    //     $('#biology').removeClass('blank')
    // })

    // $(homeBt).click(function(){

    //     $('#beauty').addClass('blank')
    //     $('#body').addClass('blank')
    //     $('#biology').addClass('blank')
    //     $('#home').removeClass('blank')
    // })



