// effect show-slide
(function(){
  // scrolling - init
	setTimeout(init, 1000);
	function init() {

    var scrollElemToWatch_1 = document.querySelector('#photo-article'),
      watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),
      rev1 = new RevealFx(scrollElemToWatch_1, {
      revealSettings : {
        // bgcolor: '#7f40f1',
        bgcolor: '#000',
        direction: 'rl',
				delay: 0,
        onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
        }
      }
    });

    watcher_1.enterViewport(function() {
      rev1.reveal();
      watcher_1.destroy();
    });


    var scrollElemToWatch_2 = document.querySelector('#sect-3'),
      watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
      rev2 = new RevealFx(document.getElementById('img-back'), {
        revealSettings : {
          bgcolor: '#fcf652',
          direction: 'lr',
          delay: 500,
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
          }
        }
      });
			/*,
      rev3 = new RevealFx(document.getElementById('img-front'), {
        revealSettings : {
          bgcolor: '#7f40f1',
          direction: 'lr',
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
          }
        }
      });
			*/

      watcher_2.enterViewport(function() {
        //rev3.reveal();
        rev2.reveal();
        watcher_2.destroy();
      });

  }
})();

var sec_2 = $('#sect-2').offset().top - Math.floor( $( window ).height()/2 );
var getit = true;
var element_ = document.getElementsByClassName('text-article')[0];

window.addEventListener('scroll', function(){
  if (getit) {
    if (window.scrollY >= sec_2) {
      element_.classList += " viewed";
      getit = false;
    }
  }
})

$(".li-wrapper").mouseover(function(){
  console.log('shake it!');
  $(this).find('img').addClass('shake-it');
  $(this).find('span').addClass('shaking');
});

$(".li-wrapper").mouseout(function(){
  console.log('shake it!');
  $(this).find('img').removeClass('shake-it');
  $(this).find('span').removeClass('shaking');
});
