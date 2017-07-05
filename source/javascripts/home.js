// home js y elementos comunes
function changeSlider(){
  var current = document.getElementsByClassName('slider')[0];
  var next = document.getElementsByClassName('slider-next')[0];
  var back = document.getElementsByClassName('slider-back')[0];

  current.dataset.state = 'gone';
  setTimeout( function(){
    next.dataset.state = 'go';
    $(current).removeClass('slider');
    $(current).addClass('slider-back');

    $(next).removeClass('slider-next');
    $(next).addClass('slider');

    $(back).removeClass('slider-back');
    $(back).addClass('slider-next');

    current.dataset.state = 'stay';
    next.dataset.state = 'stay';
    back.dataset.state = 'stay';
  }, 1000);
}

$(document).ready(function(){

  if (document.getElementById('raiz')) {
    document.getElementById('raiz').addEventListener('click', function(){
      var action = this.dataset.toggle;
      var btns = document.getElementsByClassName('child');
      if (action=='true') {
        for (var i = btns.length - 1; i >= 0; i--) {
          btns[i].dataset.show = 'true';
        }
        this.dataset.toggle = "false";
      }else{
        for (var i = btns.length - 1; i >= 0; i--) {
          btns[i].dataset.show = 'false';
        }
        this.dataset.toggle = "true";
      }
    });
  }
})

$(document).ready(function(){

  if ( $('#sec-1') && $('#sec-2') && $('#sec-3') && $('#sec-4') && $('#sec-5')) {
    var limit = $('#sec-2').offset().top;

    /*  global values - elements */
    var f_span = document.getElementById('first-msg');

    /*  global values - position */
    var posx = screen.width/2;

    var limit_text_effect = Math.floor( ($('#sec-1').height()) / 2 );
    var limit_parallax = $('#sec-3').offset().top;
    var limit_parallax_square = $('#sec-4').offset().top + Math.floor($('#sec-4').height() / 2);
    var limit_animation = $('#sec-5').offset().top;

    var img1 = document.getElementById('img-1');
    var img2 = document.getElementById('img-2');
    var img_ = img1.dataset;

    var lastScrollTop = 0;
    var scrollPosSlow = 5;
    var scrollPosNormal = 7;
    var scrollPosFast = 10;
  }

  // scroll events
  window.addEventListener("scroll", function(){
    // img-social event
    if (window.scrollY >= limit) {
      img_.state = 'gone';
    }else{
      img_.state = 'stay';
    }

    // text section 2 animation
    if (window.scrollY >= limit_text_effect) {
      var text_sec2 =  document.getElementById('text-sec2');
      text_sec2.dataset.state = 'show';
      document.getElementsByClassName('active-spec')[0].dataset.state = 'show';
    }

    // parallax blog
    if (window.scrollY >= limit_parallax) {

      var st = window.pageYOffset;
      if (st > lastScrollTop){

        if (scrollPosFast > -170 ) {

          scrollPosSlow -= 5;
          scrollPosNormal -= 7;
          scrollPosFast -= 10;

        }

      } else {
        if (scrollPosFast < 170) {

          scrollPosSlow += 5;
          scrollPosNormal += 7;
          scrollPosFast += 10;
        }

      }
      lastScrollTop = st;

      document.getElementById('colum1').style.webkitTransform = "translateY("+scrollPosSlow+"px)";
      document.getElementById('colum2').style.webkitTransform = "translateY("+scrollPosFast+"px)";
      document.getElementById('colum3').style.webkitTransform = "translateY("+scrollPosNormal+"px)";

    }

    // animation square
    if (window.scrollY >= limit_parallax_square) {
      var square = document.getElementById('squa-container');
      square.dataset.state = 'show';
    }
  });

  // hovers events
  img2.addEventListener("mouseover", function(){
    img_.state = 'stay';
  });

  img2.addEventListener("mouseleave", function(){
    if (window.scrollY >= limit) {
      img_.state = 'gone';
    }else{
      img_.state = 'stay';
    }
  });

  img1.addEventListener("mouseover", function(){
    if (window.scrollY >= limit) {
        img_.state = 'stay';
    }
  });

  img1.addEventListener("mouseleave", function(){
    if (window.scrollY >= limit) {
      img_.state = 'gone';
    }else{
      img_.state = 'stay';
    }
  });

  // click events
  document.getElementById('ul-specialities').addEventListener('click', function(e){
    if (e.target && e.target.nodeName == 'LI') {
      // changing text
      f_span.className = 'changing-text';
      setTimeout(function(){
        f_span.className = 'wait';
        f_span.innerHTML = e.target.innerHTML;
        f_span.className += ' new-text';
      }, 1000);

      // changing image
      var index     = e.target.dataset.index;
      var arrIndex  = document.querySelectorAll('#wrap-images-specialties img');
      $('.img-spec').removeClass('active-spec');
      console.log(index);
      console.log(arrIndex[index-1]);
      arrIndex[index-1].className += ' active-spec';

    }
  })

});

// slider home
$(document).ready(function(){
  if (document.getElementsByClassName('slider')) {
    console.log('presente');
    setInterval(function(){changeSlider();}, 10000);
  }else {
    console.log('no presente');
  }
});

$(document).ready(function(){
  var imgHeight = $('#hs-cta-img-d5c9a180-eba4-4386-9dd5-811872b875b6').height();

  document.getElementById('squa-container').style.top = imgHeight/2;
  console.log(imgHeight);
});
