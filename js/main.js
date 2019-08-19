$(document).ready(() =>{
    $(".toggle").click(() =>{
        $("nav").toggleClass("menu");
        $("header").toggleClass("menu");
    })

})

$(".desc").each(function(index){        
    var characters = $(this).text().split(""); 
    $this = $(this);
    $this.empty();
    $.each(characters, function(i, el){
        $this.append("<span class='letters'> "+ el +" </span>");
    })
})

anime.timeline({loop: false})
.add({
    targets: '.title',
    opacity: 1,
    scale: [0,1],
    duration: 300,
    easing: 'easeInOutExpo',
    delay: anime.stagger(100)
})
.add({
    targets: '.desc',
    opacity: 1
})
.add({
    targets: '.desc .letters',
    scale: [4,1],
    opacity: [0,1],
    duration: 100,
    easing: 'easeInOutExpo',
    delay: anime.stagger(10)
})
.add({
    targets: '.btn',
    opacity:1,
    scale: [0,1],
    duration: 300,
    easing: 'easeInOutExpo',
    delay: anime.stagger(51)
})
.add({
    targets: '.portfolio',
    scale: [4,1],
    opacity: [0,1],
    duration: 1000,
    easing: 'easeInOutExpo',
    delay: anime.stagger(120)
})
.add({
    targets: 'header h1',
    direction: 'alternate',
    opacity: [0,1],
    delay: anime.stagger(30),
    duration: 100
})
.add({
    targets: '.toggle',
    direction: 'alternate',
    opacity: [0,1],
    delay: anime.stagger(10)
});

