---
---
$ ->
  $(".navbar-burger").click ->
    $(".navbar-burger").toggleClass("is-active")
    $(".navbar-menu").toggleClass("is-active")

  checkSiteStatus = ->
    url = $("#url").val()
    $.ajax
       timeout: 5000
       type: 'GET'
       dataType: 'jsonp'
       url: "https://" + url
       cache: false
       statusCode:
         404: ->
           $(".lights").addClass("red")
         200: ->
            $(".lights").removeClass("red")
            $(".lights").addClass("green")
