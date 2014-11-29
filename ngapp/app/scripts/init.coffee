# Angular initialization only (and global scope handlers)
# use appropriate directories for controllers/directives etc.

# angular_app = angular.module('hbanger', [])

# angular_app
# .run(
#   [
#     "$rootScope",
#     ($rootScope) ->
#       # Global events such as $(window).resize
#       return
#   ]
# )


jQuery ->
  $('body').prepend('<div id="fb-root"></div>')

  $.ajax
    url: "#{window.location.protocol}//connect.facebook.net/en_US/all.js"
    dataType: 'script'
    cache: true
get_age = (born, now) ->
  birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate())
  if now >= birthday
    now.getFullYear() - born.getFullYear()
  else
    now.getFullYear() - born.getFullYear() - 1
$("#button").click ->
  
addSubscriber = (correo)->
  
    #dataType: "JSONP"
window.fbAsyncInit = ->
  FB.init(appId: '303987353132508', cookie: true)
  addSubscriber = ->
    FB.getLoginStatus (response) ->
      #statusChangeCallback response
      console.log response.status
      if response.status is 'connected'
        #Logged into your app and Facebook.
        FB.api "/me", (response) ->
          console.log JSON.stringify(response)
          dob = response.birthday
          now = new Date()
          fulllocation = response.location.name
          location = fulllocation.split(", ")

          birthdate = dob.split("/")
          born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0])
          age = get_age(born, now)
          console.log birthdate[2] + " : " + birthdate[1] + " : " + birthdate[0]


          email = response.email
          fullname = response.name
          city = location[0]
          state = location[1]
          country = location[2]
          gender = response.gender
          console.log 'nombre: '+fullname
          console.log 'edad: '+age
          console.log 'email: '+email

          console.log 'ciudad: '+city
          console.log 'estado: '+state
          console.log 'pais: '+country

          url="http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[custom_2]="+gender+"&details[custom_1]="+age+"&details[full_name]="+fullname+"&details[email]="+email+"&details[city]="+city+"&details[state]="+state+"&details[country]="+country
          # console.log url
          $.ajax
            url: url
            type: "POST"
            crossDomain: true
          
        console.log 'conectado'
      else if response.status is 'not_authorized'
        #The person is logged into Facebook, but not your app.
        FB.login (response) ->
          FB.api "/me", (response) ->
            console.log JSON.stringify(response)
            dob = response.birthday
            now = new Date()
            fulllocation = response.location.name
            location = fulllocation.split(", ")

            birthdate = dob.split("/")
            born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0])
            age = get_age(born, now)
            console.log birthdate[2] + " : " + birthdate[1] + " : " + birthdate[0]


            email = response.email
            fullname = response.name
            city = location[0]
            state = location[1]
            country = location[2]
            gender = response.gender
            console.log 'nombre: '+fullname
            console.log 'edad: '+age
            console.log 'ciudad: '+city
            console.log 'estado: '+state
            console.log 'pais: '+country

            url="http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[custom_2]="+gender+"&details[custom_1]="+age+"&details[full_name]="+fullname+"&details[email]="+email+"&details[city]="+city+"&details[state]="+state+"&details[country]="+country
            # console.log url
            $.ajax
              url: url
              type: "POST"
              crossDomain: true

      else
        FB.login (response) ->
          FB.api "/me", (response) ->
            console.log JSON.stringify(response)
            dob = response.birthday
            now = new Date()
            fulllocation = response.location.name
            location = fulllocation.split(", ")

            birthdate = dob.split("/")
            born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0])
            age = get_age(born, now)
            console.log birthdate[2] + " : " + birthdate[1] + " : " + birthdate[0]


            email = response.email
            fullname = response.name
            city = location[0]
            state = location[1]
            country = location[2]
            gender = response.gender
            console.log 'nombre: '+fullname
            console.log 'edad: '+age
            console.log 'ciudad: '+city
            console.log 'estado: '+state
            console.log 'pais: '+country

            url="http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[custom_2]="+gender+"&details[custom_1]="+age+"&details[full_name]="+fullname+"&details[email]="+email+"&details[city]="+city+"&details[state]="+state+"&details[country]="+country
            # console.log url
            $.ajax
              url: url
              type: "POST"
              crossDomain: true

  $('#sign_in').click (e) ->
    e.preventDefault()
    FB.login (response) ->
      window.location = '/auth/facebook' if response.authResponse
  $('.showSubscribe').on 'click', (e)->
    e.preventDefault()
    addSubscriber()



  # $('#sign_out').click (e) ->
  #   FB.getLoginStatus (response) ->
  #     FB.logout() if response.authResponse
  #   true



validateEmail = ($email) ->
  emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  unless emailReg.test($email)
    false
  else
    true
pageView = (page) ->
  
  # console.log('analytics: ' + page);
  ga "send", "pageview", "/" + page



supportsOrientationChange = "onorientationchange" of window
orientationEvent = (if supportsOrientationChange then "orientationchange" else "resize")
window.addEventListener orientationEvent, (->
  if window.orientation is 0
    $('#rotardispisitivo').css
      display: 'none'
  else if window.orientation is 90
    $('#rotardispisitivo').css
      display: 'block'
  return
), false
resize = ->
  ratio = undefined
  wH = undefined
  wW = undefined
  aspect = 1.33
  wH = $(window).height()
  wW = $(window).width()
  ratio = wW / wH
  if wW > wH
    if ratio > aspect
      $(".splashbg").width wW
      $(".splashbg").height "auto"
      vidH = $(".splashbg").height()
      $(".splashbg").css
        position: "absolute"
        top: "50%"
        left: "50%"
        marginLeft: (wW / 2) * -1 + "px"
        marginTop: ((vidH-wH)/2)+(wH/2) * -1 + "px"

    else
      $(".splashbg").width wH * aspect
      $(".splashbg").height wH
      $(".splashbg").css
        position: "absolute"
        top: "50%"
        left: "50%"
        marginLeft: ((wH * aspect) / 2) * -1 + "px"
        marginTop: (wH / 2) * -1 + "px"

  else
    $(".splashbg").height wH
    $(".splashbg").width wH * aspect
    $(".splashbg").css
      position: "absolute"
      top: "50%"
      left: "50%"
      marginLeft: ((wH * aspect) / 2) * -1 + "px"
      marginTop: (wH / 2) * -1 + "px"

$ ->
  

  $(document.body).on "appear", ".shown", (e, $affected) ->
    
    # add class called “appeared” for each appeared element
    $(this).addClass "appeared"
    return

  $(".shown").appear force_process: true
  $('#footer .created').on 'click', ->
    $('#created').addClass 'show'
  $('#created .close').on 'click', ->
    $('#created').removeClass 'show'
  sendNewsletter = ->
    $('.newsbtn p').html 'Thanks'
  error = (response, status, xhr) ->
    alert "error"
    return
  # $('.showSubscribe').on 'click', ->
  #   $('.newsbtn').removeClass 'showSubscribe'
  #   $('.newsbtn').addClass 'sendformBtn'
  #   $('.newsletter-cont').addClass 'show'
  #   $('.newsbtn p').html 'subscribe'
  #   $('.sendformBtn').on 'click', ->
  #     $('.newsbtn p').html 'Sending'
  #     emailaddress = $('.email').val()
  #     if !validateEmail(emailaddress)
  #       $('.email').val ''
  #       $('.email').attr
  #         placeholder: 'wrong email'
  #       $('.newsbtn p').html 'subscribe'
        
  #     else
  #       #$.post('http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&', $('#subscribe').serialize())
  #       email = $('.email').val()
  #       url="http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[email]="+email
  #       console.log url
  #       $.ajax
  #         url: url
  #         type: "POST"
  #         crossDomain: true
  #         #dataType: "JSONP"

  #       #$.post('http://www.mynewsletterbuilder.com/tools/ext_subscribe', $('#subscribe').serialize())
  #       #$("#subscribe").submit();
  #       $('.newsletter-cont').removeClass 'show'
        
  #       $('.newsbtn p').html 'Thanks'
  #       pageView 'newsletter/sign_up'
  #       setTimeout ->
  #         $('.newsbtn').removeClass 'sendformBtn'
  #         $('.newsbtn').addClass 'showSubscribe'
  #       , 2000
  wH = $(window).height()
  wW = $(window).width()
  $('.splash').height wH
  if navigator.userAgent.match(/iPad/i)
    $("#viewport").attr "content", "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0"
    if window.orientation is 0
      $('#rotardispisitivo').css
        display: 'none'
    else if window.orientation is 90
      $('#rotardispisitivo').css
        display: 'none'
          

     

  #resize()
  