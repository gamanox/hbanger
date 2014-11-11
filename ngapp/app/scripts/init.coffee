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
  
  
  sendNewsletter = ->
    $('.newsbtn p').html 'Thanks'
  error = (response, status, xhr) ->
    alert "error"
    return
  $('.showSubscribe').on 'click', ->
    $('.newsbtn').removeClass 'showSubscribe'
    $('.newsbtn').addClass 'sendformBtn'
    $('.newsletter-cont').addClass 'show'
    $('.newsbtn p').html 'subscribe'
    $('.sendformBtn').on 'click', ->
      $('.newsletter-cont').removeClass 'show'
      $('.newsbtn p').html 'Sending'
      $.post('http://www.mynewsletterbuilder.com/tools/ext_subscribe', $('#subscribe').serialize())
      
      $('.newsbtn p').html 'Thanks'
          
        

  #resize()

  if navigator.userAgent.match(/iPad/i)
    $("#viewport").attr "content", "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0"
    if window.orientation is 0
      $('#rotardispisitivo').css
        display: 'block'
    else if window.orientation is 90
      $('#rotardispisitivo').css
        display: 'block'