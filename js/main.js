$(document).ready(function () {
  // Header support

  $('.header-sup__icon').click(function (e) {
    e.preventDefault()
    $('body').toggleClass('showmenu')
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
  //END
  // Cavans
  var canvas = document.getElementById('chain'),
    can_w = parseInt(canvas.getAttribute('width')),
    can_h = parseInt(canvas.getAttribute('height')),
    ctx = canvas.getContext('2d')

  // console.log(typeof can_w);

  var ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      alpha: 1,
      phase: 0,
    },
    ball_color = {
      r: 255,
      g: 255,
      b: 255,
    },
    R = 2,
    balls = [],
    alpha_f = 0.03,
    alpha_phase = 0,
    // Line
    link_line_width = 0.8,
    dis_limit = 260,
    add_mouse_point = true,
    mouse_in = false,
    mouse_ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      type: 'mouse',
    }

  // Random speed
  function getRandomSpeed(pos) {
    var min = -1,
      max = 1
    switch (pos) {
      case 'top':
        return [randomNumFrom(min, max), randomNumFrom(0.1, max)]
        break
      case 'right':
        return [randomNumFrom(min, -0.1), randomNumFrom(min, max)]
        break
      case 'bottom':
        return [randomNumFrom(min, max), randomNumFrom(min, -0.1)]
        break
      case 'left':
        return [randomNumFrom(0.1, max), randomNumFrom(min, max)]
        break
      default:
        return
        break
    }
  }
  function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  function randomNumFrom(min, max) {
    return Math.random() * (max - min) + min
  }
  console.log(randomNumFrom(0, 10))
  // Random Ball
  function getRandomBall() {
    var pos = randomArrayItem(['top', 'right', 'bottom', 'left'])
    switch (pos) {
      case 'top':
        return {
          x: randomSidePos(can_w),
          y: -R,
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        }
        break
      case 'right':
        return {
          x: can_w + R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed('right')[0],
          vy: getRandomSpeed('right')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        }
        break
      case 'bottom':
        return {
          x: randomSidePos(can_w),
          y: can_h + R,
          vx: getRandomSpeed('bottom')[0],
          vy: getRandomSpeed('bottom')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        }
        break
      case 'left':
        return {
          x: -R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed('left')[0],
          vy: getRandomSpeed('left')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        }
        break
    }
  }
  function randomSidePos(length) {
    return Math.ceil(Math.random() * length)
  }

  // Draw Ball
  function renderBalls() {
    Array.prototype.forEach.call(balls, function (b) {
      if (!b.hasOwnProperty('type')) {
        ctx.fillStyle =
          'rgba(' +
          ball_color.r +
          ',' +
          ball_color.g +
          ',' +
          ball_color.b +
          ',' +
          b.alpha +
          ')'
        ctx.beginPath()
        ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
      }
    })
  }

  // Update balls
  function updateBalls() {
    var new_balls = []
    Array.prototype.forEach.call(balls, function (b) {
      b.x += b.vx
      b.y += b.vy

      if (b.x > -50 && b.x < can_w + 50 && b.y > -50 && b.y < can_h + 50) {
        new_balls.push(b)
      }

      // alpha change
      b.phase += alpha_f
      b.alpha = Math.abs(Math.cos(b.phase))
      // console.log(b.alpha);
    })

    balls = new_balls.slice(0)
  }

  // loop alpha
  function loopAlphaInf() {}

  // Draw lines
  function renderLines() {
    var fraction, alpha
    for (var i = 0; i < balls.length; i++) {
      for (var j = i + 1; j < balls.length; j++) {
        fraction = getDisOf(balls[i], balls[j]) / dis_limit

        if (fraction < 1) {
          alpha = (1 - fraction).toString()

          ctx.strokeStyle = 'rgba(0,0,0,' + alpha + ')'
          ctx.lineWidth = link_line_width

          ctx.beginPath()
          ctx.moveTo(balls[i].x, balls[i].y)
          ctx.lineTo(balls[j].x, balls[j].y)
          ctx.stroke()
          ctx.closePath()
        }
      }
    }
  }

  // calculate distance between two points
  function getDisOf(b1, b2) {
    var delta_x = Math.abs(b1.x - b2.x),
      delta_y = Math.abs(b1.y - b2.y)

    return Math.sqrt(delta_x * delta_x + delta_y * delta_y)
  }

  // add balls if there a little balls
  function addBallIfy() {
    if (balls.length < 20) {
      balls.push(getRandomBall())
    }
  }

  // Render
  function render() {
    ctx.clearRect(0, 0, can_w, can_h)

    renderBalls()

    renderLines()

    updateBalls()

    addBallIfy()

    window.requestAnimationFrame(render)
  }

  // Init Balls
  function initBalls(num) {
    for (var i = 1; i <= num; i++) {
      balls.push({
        x: randomSidePos(can_w),
        y: randomSidePos(can_h),
        vx: getRandomSpeed('top')[0],
        vy: getRandomSpeed('top')[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      })
    }
  }
  // Init Canvas
  function initCanvas() {
    canvas.setAttribute('width', window.innerWidth)
    canvas.setAttribute('height', window.innerHeight)

    can_w = parseInt(canvas.getAttribute('width'))
    can_h = parseInt(canvas.getAttribute('height'))
  }
  window.addEventListener('resize', function (e) {
    console.log('Window Resize...')
    initCanvas()
  })

  function goMovie() {
    initCanvas()
    initBalls(30)
    window.requestAnimationFrame(render)
  }
  goMovie()
})
