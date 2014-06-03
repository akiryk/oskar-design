$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

var $expand = $('#expand-languages'),
    $selectedLanguage = $('#selected-language'),
    $mainSelectLanguage = $('#main-select-language'),
    $currActive = $mainSelectLanguage.find('.active'),
    $currText = $currActive.text();
    $languages = $('#main-select-language').find('li'),
    $searchButton = $('.main-search-button'),
    origHeight = "58px";

$expand.click(function(){
  var $this = $(this);
  $this.toggleClass('expanded');
  if ($this.hasClass('expanded')){
//    $searchButton.animate({opacity: 0.0}, 500);
    $this.animate({ height: "20rem"}, 250, function(){
      // anim complete
      $mainSelectLanguage.fadeIn(200);
    }).css('overflow', 'visible');

  } else {
//    $searchButton.animate({opacity: 1.0}, 500);
    $(this).animate({ height: origHeight}, 250).css('overflow', 'visible');
    $mainSelectLanguage.slideUp(200);
  }
});

$mainSelectLanguage.on('mouseover', 'li', function(e){
  event.preventDefault();
  $languages.removeClass('active');
  $( this ).addClass('active');
  $selectedLanguage.text($(this).text());
});

$mainSelectLanguage.on('mouseout', 'li', function(e){
  event.preventDefault();
  $(this).removeClass('active');
  $currActive.addClass('active');
  $selectedLanguage.text($currText);
});

$mainSelectLanguage.on('click', 'li', function(e){
  $currText = $(this).text();
  $currActive.removeClass('plus');
  $currActive = $(this);
  $currActive.addClass('plus');
});