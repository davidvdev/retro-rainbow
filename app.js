const $line = $('.line');
const $header = $('header');

const clearColor = () => {
    $line.removeClass('C64 N64 SF').removeAttr('style');
    $('span').removeClass('purple-1 purple-2');
    $header.children().removeAttr('style');
}

$("#Def").on('click' , () =>{
    clearColor();
    $line.addClass('');
})

$("#C64").on('click' , () =>{
    clearColor();
    $line.addClass('C64');
})

$("#N64").on('click' , () =>{
    clearColor();
    $line.addClass('N64');
    $header.children().css('font-family','Mario64')
})

$("#SF").on('click' , () =>{
    clearColor();
    $line.addClass('SF');
    $header.html(`<h1><span class='purple-1'>RETRO</span> <span class='purple-2'>RAINBOW</span></h1>`);
})

$("#Rand").on('click' , () =>{
    clearColor();
    for (let i = 0; i < $('.line-container').children().length; i++) {
        const R = (Math.ceil(Math.random()*255));
        const G = (Math.ceil(Math.random()*255));
        const B = (Math.ceil(Math.random()*255));
        // console.log(R,G,B)
        $line.eq(i).css('background-color', `rgb(${R},${G},${B})`)
    }
})
