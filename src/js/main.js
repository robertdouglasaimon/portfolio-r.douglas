 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	let loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	let burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	let onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	let carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
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
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	let scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	let counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	let contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

})(jQuery);


/*------------------------------------------------------------------------------*/
// Função para aplicar estilos com base na largura da tela


function aplicarEstilos() {
	const foto1 = document.getElementById('foto1');
	const foto2 = document.getElementById('foto2');
	const aboutImg = document.querySelector('.about-img');
  
	if (window.matchMedia('(max-width: 1080px)').matches) {
	  // Oculta a primeira imagem
	  foto1.style.display = 'none';
	  
	  // Exibe e estiliza a segunda imagem
	  foto2.style.display = 'block';
	  foto2.style.width = '150px';
	  foto2.style.height = '150px';
	  foto2.style.borderRadius = '50%';
	  foto2.style.objectFit = 'cover';
	  foto2.style.overflow = 'hidden !important';
	  foto2.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1) ';
	  foto2.style.border = '2px solid white';
  
	  // Centraliza a imagem na div
	  aboutImg.style.display = 'flex';
	  aboutImg.style.justifyContent = 'center';
	  aboutImg.style.alignItems = 'center';
	} else {
	  // Exibe a primeira imagem em telas maiores
	  foto1.style.display = 'block';
	  
	  // Oculta a segunda imagem
	  foto2.style.display = 'none';
	}
  }
  
  // Aplica estilos na inicialização e ao redimensionar a janela
  aplicarEstilos();
  document.addEventListener('DOMContentLoaded',  aplicarEstilos);
  window.addEventListener('resize',  aplicarEstilos);
  
  
/*------------------------------------------------------------------------------*/

//JS que obriga o fechamento do modal ao pressionar a tecla ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      var modals = document.querySelectorAll('.modal');
      modals.forEach(function(modal) {
        var modalInstance = bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
      });
    }
  });


  // Definindo o z-index dos modais
  document.addEventListener('shown.bs.modal', function (event) {
	var modal = event.target;
	modal.style.zIndex = '1055'; // Valor alto para garantir que fique acima dos outros elementos
  });
  
  document.addEventListener('hidden.bs.modal', function (event) {
	var modal = event.target;
	modal.style.zIndex = ''; // Resetar o z-index após o fechamento
  });
  
  document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
	  var modals = document.querySelectorAll('.modal');
	  modals.forEach(function(modal) {
		var modalInstance = bootstrap.Modal.getInstance(modal);
		if (modalInstance) {
		  modalInstance.hide();
		}
	  });
	}
  });
  
/*---CODIGO PARA O VIDEO NO MODAL DE VIDEO DE LOGISTICA---------------------------------------------------------*/
	document.addEventListener('shown.bs.modal', function (event) {
	var modal = event.target;
	if (modal.id === 'modal6') {
		var video = document.getElementById('portfolioVideo');
		video.muted = false;
		video.play(); // Inicia a reprodução do vídeo
	}
	});

	document.addEventListener('hidden.bs.modal', function (event) {
	var modal = event.target;
	if (modal.id === 'modal6') {
		var video = document.getElementById('portfolioVideo');
		video.muted = true;
		video.pause(); // Pausa o vídeo quando o modal é fechado
	}
	});
/*----------------------------------------------------------------------------------------------------------------*/

/* CERTIFICADOS -- 🧠 JavaScript para alternar o botão e mostrar/ocultar --------------------*/
function mostrarCertificado(thumbnail, caminhoFrente, caminhoVerso) {
  const modal = thumbnail.closest('.modal');
  if (!modal) return;

  const categoria = modal.id.replace('modal-', '');
  const idVisualizacao = `visualizacao-${categoria}`;
  const areaVisualizacao = document.getElementById(idVisualizacao);
  if (!areaVisualizacao) return;

  areaVisualizacao.style.position = 'relative';

  // Se já tem certificado, vira ao invés de recriar
  const existente = areaVisualizacao.querySelector('.certificado-flip');
  if (existente) {
    existente.classList.toggle('virado');
    return;
  }

  // Criação do certificado ampliado
  const container = document.createElement('div');
  container.className = 'certificado-flip mt-4';

  const frente = document.createElement('img');
  frente.src = caminhoFrente;
  frente.className = 'img-fluid frente';
  frente.alt = 'Certificado frente';

  const verso = document.createElement('img');
  verso.src = caminhoVerso;
  verso.className = 'img-fluid verso';
  verso.alt = 'Certificado verso';

  container.appendChild(frente);
  container.appendChild(verso);

  container.addEventListener('dblclick', (e) => {
    e.preventDefault();
    e.stopPropagation();
    container.classList.toggle('virado');
  });

  // Botão de fechar
  const fecharBtn = document.createElement('button');
  fecharBtn.innerHTML = '×';
  fecharBtn.className = 'fechar-certificado';
  fecharBtn.onclick = (e) => {
    e.stopPropagation();
    container.remove();
    fecharBtn.remove();
  };

  areaVisualizacao.innerHTML = ''; // limpa antes de inserir
  areaVisualizacao.appendChild(container);
  areaVisualizacao.appendChild(fecharBtn);
}



/*----------------------------------------------------------------------------------------------------------------*/