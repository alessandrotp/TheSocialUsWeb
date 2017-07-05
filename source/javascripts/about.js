// This is where it all goes :)

// effect show-slide
(function() {
	setTimeout(init, 1000);
	function init() {
		//************************ Example 1 - reveal on load ********************************

		var rev1 = new RevealFx(document.querySelector('#about-title-1'), {
			revealSettings : {
				//bgcolor: '#7f40f1',
				bgcolor: '#000',
				delay: 0,
        direction: 'rl',
				onCover: function(contentEl, revealerEl) {
					contentEl.style.opacity = 1;
				}
			}
		});
		rev1.reveal();
		document.getElementById('about-title-1').classList.remove('loading');

		var rev2 = new RevealFx(document.querySelector('#text-white-column'), {
			revealSettings : {
				//bgcolor: '#fcf652',
        direction: 'lr',
				bgcolor: '#000',
				delay: 250,
				onCover: function(contentEl, revealerEl) {
					contentEl.style.opacity = 1;
				}
			}
		});
		rev2.reveal();
		document.getElementById('text-white-column').classList.remove('loading');

    var scrollElemToWatch_1 = document.getElementById('about-title-3'),

			watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),
			rev3 = new RevealFx(scrollElemToWatch_1, {
				revealSettings : {
					bgcolor: '#fcf652',
					delay: 0,
					direction: 'rl',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev4 = new RevealFx(document.querySelector('#p_text_sec_2'), {
				revealSettings : {
					bgcolor: '#7f40f1',
					delay: 0,
					direction: 'rl',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev5 = new RevealFx(document.querySelector('#first-ant-wrapper'), {
				revealSettings : {
					bgcolor: '#7f40f1',
					delay: 500,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),

			scrollElemToWatch_2 = document.getElementById('second-ant-wrapper'),
			watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
			rev6 = new RevealFx(scrollElemToWatch_2, {
				revealSettings : {
					bgcolor: '#fcf652',
					delay: 500,
					direction: 'rl',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev7 = new RevealFx(document.querySelector('#s-a-3-right'), {
				revealSettings : {
					bgcolor: '#7f40f1',
					direction: 'rl',
					delay: 250,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev8 = new RevealFx(document.querySelector('#p-sec-3'), {
				revealSettings : {
					bgcolor: '#7f40f1',
					direction: 'lr',
					delay: 0,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev12 = new RevealFx(document.querySelector('#s-a-3-right-2'), {
				revealSettings : {
					bgcolor: '#7f40f1',
					direction: 'rl',
					delay: 250,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			scrollElemToWatch_3 = document.getElementById('p-sec-4'),
			watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),
			rev9 = new RevealFx(scrollElemToWatch_3, {
				revealSettings : {
					bgcolor: '#fcf652',
					direction: 'rl',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev10 = new RevealFx(document.querySelector('#s-a-3-left'), {
				revealSettings: {
					bgcolor: '#7f40f1',
					delay: 250,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			}),
			rev11 = new RevealFx(document.querySelector('#s-a-3-left-2'), {
				revealSettings: {
					bgcolor: '#7f40f1',
					delay: 250,
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					}
				}
			});

    watcher_1.enterViewport(function() {

			rev3.reveal();
			rev4.reveal();
			rev5.reveal();
			watcher_1.destroy();
		});

		watcher_2.enterViewport(function() {
			rev6.reveal();
			rev7.reveal();
			rev8.reveal();
			rev12.reveal();
			watcher_2.destroy();
		});

		watcher_3.enterViewport(function() {
			rev9.reveal();
			rev10.reveal();
			rev11.reveal();
			watcher_3.destroy();
		});

  }
})();

// scroll blocks
$(document).ready(function(){
	// scroll events

	var limit_block_1 = $('#sec-about-2').offset().top - Math.floor( $( window ).height()/2 );
	var limit_block_2 = $('#sec-about-4').offset().top - Math.floor( $( window ).height()/4 );

	var blocks = document.getElementsByClassName('block-big');

	window.addEventListener("scroll", function(){

    if (window.scrollY >= limit_block_1) {
      blocks[0].dataset.show = 'up';
    }
		if (window.scrollY >= limit_block_2) {
			blocks[1].dataset.show = 'up';
			console.log('pase 2');
    }
	})

})
