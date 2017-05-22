/*global $*/
/* global navigator */
/* global filepicker */

// $(document).ready(function($){
// $(document).ready(function(){
//   cambiarActive();
// });
setTimeout(cambiarActive, 1000);

  /** Search open start **/
  $(document).on('click','#searchButton', function(event){
  // $('#searchButton').click(function(){
    $(this).toggleClass('active');
    $('.desktop-menu').toggleClass('col-md-7 col-lg-8 visible-md visible-lg').addClass('hidden');
    $('#navbar-search').parent().toggleClass('col-md-1 col-md-8 col-lg-9');
    $('.searchBox').toggleClass('hidden').css('width', '345');
    $('.searchBox').focus();
    $('#searchIcon').toggleClass('fa-times');
    $('.searchResults').slideToggle(500);
  });
  
  $(document).on('click','#searchResults', function(event){
  // $('#searchButton').click(function(){
    $(this).toggleClass('active');
    $('.desktop-menu').toggleClass('col-md-7 col-lg-8 visible-md visible-lg').addClass('hidden');
    $('#navbar-search').parent().toggleClass('col-md-1 col-md-8 col-lg-9');
    $('.searchBox').toggleClass('hidden').css('width', '345');
    $('.searchBox').focus();
    $('#searchIcon').toggleClass('fa-times');
    $('.searchResults').slideToggle(500);
  });
  
  /** Search zoom disable start **/   
  $(document).on('click','#searchButton', zoomDisable);
  // $("#searchButton").on('click', zoomDisable);
  function zoomDisable(){
    $('head meta[name=viewport]').remove();
    $('head').prepend('<meta name="viewport" content="user-scalable=no" />');
    setTimeout(zoomEnable, 1000);
  }

  function zoomEnable(){
    $('head meta[name=viewport]').remove();
    $('head').prepend('<meta name="viewport" content="user-scalable=yes" />');
  }
  /** Search zoom disable end **/  
  /** Search open end **/

  /** Menu Open start **/
  $(document).on('click', function(e){
    if($(e.target).is('.navbar-ham *')){
      $('.menu').addClass('visible-menu');
    } else {
      $('.menu').removeClass('visible-menu');
    }
  });
  /** Menu Open end **/

  /** Scroll to Sagardotegiak start **/
  $(document).on('click','.btn-encuentra', function(event){
      event.preventDefault();
      var target = "#" + this.getAttribute('data-target');
      $('html, body').animate({
          scrollTop: $(target).offset().top -80
      }, 1500);
  });
  /** Scroll to Sagardotegiak end **/

  /** Access window open/close start **/
  $(document).on('click','.btn-access', function(event){
  // $('.btn-access').on('click', function(){
    $('.accessWrapper').fadeIn();
    $("#accessWindow").css('display','block');
    $('#user').focus();
  });

  $(document).on('click','#closeAccess', function(event){
  // $('#closeAccess').click(function(){
    $('.accessWrapper').fadeOut();		
    $('#accessWindow').fadeOut();
	});
	
	$(document).mouseup(function (e){
     var access = $("#accessWindow");
     if (!access.is(e.target) && access.has(e.target).length === 0){
         access.fadeOut(500);
     }
  });
  /** Access window open/close end **/

  /** Stat window open/close start **/
  $(document).on('click','.btn-stats', function(event){
  // $('.btn-stats').on('click', function(){
    $('.statsWrapper').fadeIn(150);
    $("."+event.target.id).css('display','block');
  });
  
   $(document).on('click','.closeStats', function(event){
  // $('.closeStats').click(function(){
    $('.statsWrapper').fadeOut();
    $('.stats').fadeOut();
	});

  $(document).mouseup(function (e){
     var stats = $(".stats");
     if (!stats.is(e.target) && stats.has(e.target).length === 0){
         stats.fadeOut(500);
     }
  });
  /** Stat window open/close end **/

  /** Language color change start **/
  function cambiarActive(){
    var app_lang = window.app_language;
    
    if ( app_lang === "es" ){
      $('.idiomas').children('.es').removeClass('idiomas-non-active');
      $('.idiomas-side').children('.es').removeClass('idiomas-side-non-active');
      $('.idiomas').children('.es').addClass('idiomas-active');
      $('.idiomas-side').children('.es').addClass('idiomas-side-active');
      $('.idiomas').children('.eus').removeClass('idiomas-active');
      $('.idiomas-side').children('.eus').removeClass('idiomas-side-active');
      $('.idiomas').children('.eus').addClass('idiomas-non-active');
      $('.idiomas-side').children('.eus').addClass('idiomas-side-non-active');
      $('.idiomas').children('.en').removeClass('idiomas-active');
      $('.idiomas-side').children('.en').removeClass('idiomas-side-active');
      $('.idiomas').children('.en').addClass('idiomas-non-active');
      $('.idiomas-side').children('.en').addClass('idiomas-side-non-active');
    } else if( app_lang === "eu" ){
      $('.idiomas').children('.eus').removeClass('idiomas-non-active');
      $('.idiomas-side').children('.eus').removeClass('idiomas-side-non-active');
      $('.idiomas').children('.eus').addClass('idiomas-active');
      $('.idiomas-side').children('.eus').addClass('idiomas-side-active');
      $('.idiomas').children('.es').removeClass('idiomas-active');
      $('.idiomas-side').children('.es').removeClass('idiomas-side-active');
      $('.idiomas').children('.es').addClass('idiomas-non-active');
      $('.idiomas-side').children('.es').addClass('idiomas-side-non-active');
      $('.idiomas').children('.en').removeClass('idiomas-active');
      $('.idiomas-side').children('.en').removeClass('idiomas-side-active');
      $('.idiomas').children('.en').addClass('idiomas-non-active');
      $('.idiomas-side').children('.en').addClass('idiomas-side-non-active');
    } else if( app_lang === "en" ){
      $('.idiomas').children('.en').removeClass('idiomas-non-active');
      $('.idiomas-side').children('.en').removeClass('idiomas-side-non-active');
      $('.idiomas').children('.en').addClass('idiomas-active');
      $('.idiomas-side').children('.en').addClass('idiomas-side-active');
      $('.idiomas').children('.eus').removeClass('idiomas-active');
      $('.idiomas-side').children('.eus').removeClass('idiomas-side-active');
      $('.idiomas').children('.eus').addClass('idiomas-non-active');
      $('.idiomas-side').children('.eus').addClass('idiomas-side-non-active');
      $('.idiomas').children('.es').removeClass('idiomas-active');
      $('.idiomas-side').children('.es').removeClass('idiomas-side-active');
      $('.idiomas').children('.es').addClass('idiomas-non-active');
      $('.idiomas-side').children('.es').addClass('idiomas-side-non-active');
    }
  }
  /** Language color change end **/

  /** Confirmation for ¿?¿? start **/
  var confirmar;
  function seguro(){
    confirmar = confirm("¿Seguro?"); 
    if (confirmar){
      // si pulsamos en aceptar
      return true;
    }else{ 
      // si pulsamos en cancelar
      return false;
    }           
  }
  /** Confirmation for ¿?¿? end **/

  /** filepicker from filestack start **/
  $(document).on('click','#foto2', function(event){
  // $("#foto2").click(function(){
    filepicker.setKey("AnjcKYi0oTomOZxBk7c7Ez");
    filepicker.pick({
      imageQuality: 50,
      mimetype: 'image/*',
      container: 'window',
      services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
    },
    function(Blob){
      $("#foto").val(Blob.url);
    },
    function(FPError){
      console.log(FPError.toString());
    });
  });
  /** filepicker from filestack end **/

  /** Show contact of places start **/
  var mostrado = false;
  $(document).on('click','#contactoSidreria', function(event){
  // $("#contactoSidreria").click(function(){
    if(mostrado === false){
      $("#mostrarcontacto").fadeIn(1000);
      mostrado = true;
    }else if(mostrado === true){
      $("#mostrarcontacto").fadeOut(1000); 
      mostrado = false;
    }
  });
  /** Show contact of places end **/

/** Swipe open/close menu start **/
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)){
    $(document).bind("touchstart",empezar);
    $(document).bind("touchend",terminar);
  }

  var eancho;
  var ealto;
  var sancho;
  var salto;
  var mancho;
  var malto;
  var stop = 0;
  var stop2;
  var mstop;

  function empezar(event){
    malto = 0;
  	var touch = event.originalEvent.changedTouches[0];
  	eancho = touch.pageX;
  	ealto = touch.pageY;
  	stop = $(this).scrollTop();
  }

  function terminar(event){
  	var touch = event.originalEvent.changedTouches[0];
  	stop2 = $(this).scrollTop();
  	sancho = touch.pageX;
  	salto = touch.pageY;
  	mancho = sancho - eancho;
  	malto = salto - ealto;
  	mstop = stop - stop2;
  	if (mstop < 0){
	    mstop = mstop* -1;
  	}
  	if (malto < 0){
	    malto = malto* -1;
  	}
  	if (mancho < 0){
	    mancho = mancho* -1;
  	}
  	malto = malto*3;
  	if (mancho > malto){
  	  if (mancho > mstop){
  	    if (eancho > sancho){
  	      $('.menu').removeClass('visible-menu');
  	    } else if (sancho > eancho){
  	      $('.menu').addClass('visible-menu');
  	    }
  	  }
  	}
  }
  /** Swipe open/close menu end **/
// });




/* Facebook */
window.fbAsyncInit = function() {
  if(typeof(window.cordova) != "undefined"){
    FB = window.facebookConnectPlugin;
  } 
    // iniciamos la aplicación de Facebook
    // FB.init({
    //     appId      : '765683296917544',
    //     status     : true,
    //     xfbml      : true,
    //     cookie     : true
    // });
    
    // si no está conectado, muestra la ventana de conexión
    $(document).on("click", ".btn-facebook, .btn-aviso", function(){
        var idItem = $(this).data('numero');
        var button = $(this).data('button');
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                getAPI(idItem, button);
            } else {
                fb_login(idItem, button);
            }
        });
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/es_ES/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fb_login(idItem, button){
    FB.login(function(response){
        if (response.authResponse){
            getAPI(idItem, button);
        }
    }, {"scope":"email,user_birthday,user_location"});
}

function getAPI(idItem, button){
    // obtiene información del usuario y la muestra
    FB.api("/me?fields=id,name,email,age_range,birthday,gender,location", function(response){
        window.fb_user = response.id;
        // Hace la llamada AJAX
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://kupelike-rails.herokuapp.com/votes",
            // url: "https://kupelike-rails-oalba.c9users.io/votes",
            headers: {
                'Accept':'application/json'//,
                // 'Content-Type':'application/json'
            },
            data: {response: response, item_id: idItem, button: button },
            success: function (response) {
              if (window.fb_user == response.user_id){
                alert(response.aviso);
              }
              $("#"+response.id).html(response.votes + "<i class='fa fa-heart fa-1x' aria-hidden='true'></i>");
            }
        });
    });
    // App.item.update({votes: idItem});
}