function clicked_next(){
  var current = $("#btn-suround").data("current");

  if (current == '5') {
    $("#btn-suround").data("current", 1);

  } else {

    current = parseInt(current)+1;
    $("#btn-suround").data("current", current);
  }

  if (current == 1) {
    $("#link-current").attr("href", "/visual_storytelling.html");
  }else if(current == 2){
    $("#link-current").attr("href", "/web_design.html");
  } else if (current == 3) {
    $("#link-current").attr("href", "/tech_solutions.html");
  } else if (current == 4) {
    $("#link-current").attr("href", "/brand_development.html");
  }else{
    $("#link-current").attr("href", "/inbound_marketing.html");
  }

  $('div.actived').addClass('hidden')[0];
  $('.list-title').removeClass('actived');

  $('.list-title[data-position='+current+']').removeClass('hidden');
  $('.list-title[data-position='+current+']').addClass('actived');


  $('img.to-slide').addClass('hidden')[0];
  $('img.to-slide').removeClass('actived');

  $('img.to-slide[data-pos='+current+']').removeClass('hidden');
  $('img.to-slide[data-pos='+current+']').addClass('actived');
}

function clicked_prev(){
  var current = $("#btn-suround").data("current");

  if (current == '1') {
    $("#btn-suround").data("current", 5);
    current = 5;

  } else {
    current = parseInt(current)-1;
    $("#btn-suround").data("current", current);
  }

  if (current == 1) {
    $("#link-current").attr("href", "/visual_storytelling.html");
  }else if(current == 2){
    $("#link-current").attr("href", "/web_design.html");
  } else if (current == 3) {
    $("#link-current").attr("href", "/tech_solutions.html");
  } else if (current == 4) {
    $("#link-current").attr("href", "/brand_development.html");
  }else{
    $("#link-current").attr("href", "/inbound_marketing.html");
  }

  $('div.actived').addClass('hidden')[0];
  $('.list-title').removeClass('actived');

  var title = $('.list-title[data-position='+current+']').removeClass('hidden');
  var title = $('.list-title[data-position='+current+']').addClass('actived');

  $('img.to-slide').addClass('hidden')[0];
  $('img.to-slide').removeClass('actived');

  $('img.to-slide[data-pos='+current+']').removeClass('hidden');
  $('img.to-slide[data-pos='+current+']').addClass('actived');
}

// effect show-slide
(function(){
  console.log('cargado');
	setTimeout(function(){
    document.getElementById('wrap-title').dataset.status = 'loaded';
    console.log('final');
	}, 800)

  // loading - init
	setTimeout(init, 0);
	function init() {
		document.body.classList.remove('loading');
		var rev1 = new RevealFx(document.querySelector('#title-service'), {
			revealSettings : {
				bgcolor: '#000',
        direction: 'lr',
				onCover: function(contentEl, revealerEl) {
					contentEl.style.opacity = 1;
				}
			}
		});
		rev1.reveal();
  }
})();
