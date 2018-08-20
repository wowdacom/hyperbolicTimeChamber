var $star = $('.star')
var $circle = $('.circle')
var $square = $('.square')

var screenConfig = {
    opening: {
        duration: 5
    }
}

var ans = []

function opening(){
    TweenLite.to($star, screenConfig.opening.duration, {rotation: 360, ease: Power2.easeOut})
    TweenLite.to($circle, screenConfig.opening.duration, {rotation: 360, ease: Power2.easeOut})
    TweenLite.to($square, screenConfig.opening.duration, {rotation: -360, ease: Power2.easeOut})

    TweenLite.to($circle, screenConfig.opening.duration / 2, {css:{scale:1.1}})
    TweenLite.to($circle, screenConfig.opening.duration / 2, {css:{scale:1}, delay: screenConfig.opening.duration / 2})

    TweenLite.to($square, 1.6, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - 1})
    TweenLite.to($circle, 1.6, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - 0.7})
    TweenLite.to($star, 0.6, {css: {scale: 7}, ease: Power2.easeOut, delay: screenConfig.opening.duration - 0.4, onComplete: function (){
        $('.opening').remove()
        screenQ1Start()
    }})
}


function screenQ1Start () {
    $('.screenQ1').css('background', '#1469FF')
    $('.screenQ1 .text-block').animate({opacity: 0}, 500, function(){
        $('.screenQ1 .question-section').animate({opacity: 1}, 500)
    })

    $('.screenQ1 .question-section-options').click(function(e) {
        var value = $(e.target).attr('data-value')
        if (!value) return
        ans.push(value)

        $square.remove()
        $triangle.remove()
        $circle.remove()

        TweenLite.to($('.screenQ1 .animation-section'), 0.5, {css: {left: '0%'}, onComplete: function (){
            $('.screenQ1').remove()
            screenQ2Start()
        }} )
    })



    var $square = $('.screenQ1 .animation-section .animation-section-square')
    var $triangle = $('.screenQ1 .animation-section .animation-section-triangle')
    var $circle = $('.screenQ1 .animation-section .animation-section-circle')

    TweenLite.to($('.screenQ1 .animation-section'), 1, {css: {left: '60%'}, delay: 1})
    TweenLite.to($square, 2, {css: {top: '100px'}, ease: Power3.easeOut, delay: 2})
    TweenLite.to($triangle, 2, {css: {top: '300px'}, ease: Power3.easeOut, delay: 2})
    TweenLite.to($circle, 2, {css: {bottom: '-100px'}, ease: Power3.easeOut, delay: 2})

    TweenLite.to($square, 4, {rotation: 360, ease: Power3.easeOut, delay: 4})
    TweenLite.to($triangle, 4, {rotation: -360, ease: Power3.easeOut, delay: 4})
    TweenLite.to($circle, 4, {css: {x: '+=20', y: '+=30'}, ease: Power3.easeOut, delay: 4})
}

function screenQ2Start () {

    
}
opening()