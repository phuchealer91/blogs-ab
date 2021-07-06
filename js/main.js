$(document).ready(function () {
  // MODAL LOGIN

  $('.sign-in-modal').click(function () {
    $('.sign-in-modal').removeClass('active')
    $('.inner--sign-in-modal').removeClass('active')
  })

  $('.inner--sign-in-modal').click(function (e) {
    e.stopPropagation()
  })

  $('.close-x').click(function () {
    $('.sign-in-modal').removeClass('active')
    $('.inner--sign-in-modal').removeClass('active')
  })
  $('.close-login').click(function () {
    $('.sign-in-modal').removeClass('active')
    $('.inner--sign-in-modal').removeClass('active')
  })

  /* MODAL */
  $('.modal-sign').click(function () {
    $('.sign-in-modal').addClass('active')
    $('.inner--sign-in-modal').addClass('active')
    setTimeout(function () {
      $('.overlay').removeClass('sign-up-side')
      $('.overlay').addClass('sign-in-side')
      $('.tab-sign-up').removeClass('active')
      $('.tab-sign-in').addClass('active')
      $('.content-sign-up').removeClass('active')
      $('.content-sign-in').addClass('active')
    }, 400)
  })

  $('.inner--sign-in-modal .close-modal').click(function () {
    $('.sign-in-modal').removeClass('active')
    $('.inner--sign-in-modal').removeClass('active')
  })

  $('.val-info .tabs').click(function () {
    if ($(this).hasClass('tab-sign-in') == true) {
      $('.overlay').removeClass('sign-up-side')
      $('.overlay').addClass('sign-in-side')
      $('.tab-sign-up').removeClass('active')
      $('.tab-sign-in').addClass('active')
      $('.content-sign-up').removeClass('active')
      $('.content-sign-in').addClass('active')
    } else {
      $('.overlay').removeClass('sign-in-side')
      $('.overlay').addClass('sign-up-side')
      $('.tab-sign-in').removeClass('active')
      $('.tab-sign-up').addClass('active')
      $('.content-sign-in').removeClass('active')
      $('.content-sign-up').addClass('active')
    }
  })

  //Greetings
  $('.input-firstname').keyup(function () {
    var getText = $(this).val()
    console.log(getText)
    $('.greetings-name').html(getText)
  })

  $('.input-lastname').keyup(function () {
    var getText = $(this).val()
    console.log(getText)
    $('.greetings-surname').html(getText)
  })
  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function () {
    $('#body').toggleClass('showmenu')
    // $(this).toggleClass('open')
    // $('.menu-left').toggleClass('collapse')
  })
  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.close-menu').on('click', function () {
    $('#body').removeClass('showmenu')
    // $('.menu-left').removeClass('collapse')
  })
  $('.footer-navigation a').on('click', function () {
    $('#body').removeClass('showmenu')
    // $('.menu-left').removeClass('collapse')
  })
})
