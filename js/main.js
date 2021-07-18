$(document).ready(function () {
  // Header support

  $('.header-sup__icon').click(function (e) {
    e.preventDefault()
    $('body').toggleClass('showmenu')
  })
  $('.user-setting').click(function (e) {
    e.stopPropagation()
    $('body').toggleClass('showuser')
  })
  $('.user-setting__login').click(function (e) {
    e.stopPropagation()
    $('body').toggleClass('showuser')
  })
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.user-setting').length) {
      $('body').removeClass('showuser')
    }
  })

  $('.overlay').click(function (e) {
    $('body').removeClass('showmenu')
    $('body').removeClass('showsearch')
  })
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
  $('.modal-signup').click(function () {
    $('.sign-in-modal').addClass('active')
    $('.inner--sign-in-modal').addClass('active')
    setTimeout(function () {
      $('.overlay').removeClass('sign-up-side')
      $('.overlay').addClass('sign-in-side')
      $('.tab-sign-up').addClass('active')
      $('.tab-sign-in').removeClass('active')
      $('.content-sign-up').addClass('active')
      $('.content-sign-in').removeClass('active')
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
    $('body').toggleClass('showmenu')
    // $(this).toggleClass('open')
    // $('.menu-left').toggleClass('collapse')
  })
  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.close-menu').on('click', function () {
    $('body').removeClass('showmenu')
    // $('.menu-left').removeClass('collapse')
  })
  $('.footer-navigation a').on('click', function () {
    $('body').removeClass('showmenu')
    // $('.menu-left').removeClass('collapse')
  })
  $('.toggle .fa-search').click(function () {
    $('body').toggleClass('showsearch')
  })
  $('.toggle .close-search').click(function () {
    $('body').toggleClass('showsearch')
  })
  // Toggle accod
  $('.js-faq-title').on('click', function (e) {
    e.preventDefault()
    var $this = $(this)

    if (!$this.hasClass('faq__active')) {
      $('.js-faq-content').slideUp(800)
      $('.js-faq-title').removeClass('faq__active')
      $('.js-faq-rotate').removeClass('faq__rotate')
    }

    $this.toggleClass('faq__active')
    $this.next().slideToggle()
    $('.js-faq-rotate', this).toggleClass('faq__rotate')
  })
  // Days
  let day_selected = new Date().getDate()
  let optionDay = ''
  optionDay = '<option>Ngày</option>'
  for (let i = 1; i < 32; i++) {
    let day = i <= 9 ? '0' + i : i
    let selected = i === day_selected ? ' selected' : ''
    optionDay +=
      '<option value="' + day + '"' + selected + '>' + day + '</option>'
  }
  $('#dropdownDay').append(optionDay)
  $('#dropdownDayCM').append(optionDay)
  // Month
  let months = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ]
  var month_selected = new Date().getMonth()
  var optionMonth = ''
  optionMonth = '<option>Tháng</option>'
  for (let i = 0; i < months.length; i++) {
    let month_number = i + 1
    let month = month_number <= 9 ? '0' + month_number : month_number
    let selected = i === month_selected ? ' selected' : ''
    optionMonth +=
      '<option value="' + month + '"' + selected + '>' + months[i] + '</option>'
  }
  $('#dropdownMonth').append(optionMonth)
  $('#dropdownMonthCM').append(optionMonth)
  //Year
  let year_satart = 1979
  let year_end = new Date().getFullYear()

  let optionYear = ''
  optionYear = '<option>Năm</option>'

  for (let i = year_end; i >= year_satart; i--) {
    let selected = i === year_end ? ' selected' : ''
    optionYear += '<option value="' + i + '"' + selected + '>' + i + '</option>'
  }
  $('#dropdownYear').append(optionYear)
  $('#dropdownYearCM').append(optionYear)
})
