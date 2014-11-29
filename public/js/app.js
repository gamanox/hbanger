var addSubscriber, get_age, orientationEvent, pageView, resize, supportsOrientationChange, validateEmail;

jQuery(function() {
  $('body').prepend('<div id="fb-root"></div>');
  return $.ajax({
    url: "" + window.location.protocol + "//connect.facebook.net/en_US/all.js",
    dataType: 'script',
    cache: true
  });
});

get_age = function(born, now) {
  var birthday;
  birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
  if (now >= birthday) {
    return now.getFullYear() - born.getFullYear();
  } else {
    return now.getFullYear() - born.getFullYear() - 1;
  }
};

$("#button").click(function() {});

addSubscriber = function(correo) {};

window.fbAsyncInit = function() {
  FB.init({
    appId: '303987353132508',
    cookie: true
  });
  addSubscriber = function() {
    return FB.getLoginStatus(function(response) {
      console.log(response.status);
      if (response.status === 'connected') {
        FB.api("/me", function(response) {
          var age, birthdate, born, city, country, dob, email, fulllocation, fullname, gender, location, now, state, url;
          console.log(JSON.stringify(response));
          dob = response.birthday;
          now = new Date();
          fulllocation = response.location.name;
          location = fulllocation.split(", ");
          birthdate = dob.split("/");
          born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0]);
          age = get_age(born, now);
          console.log(birthdate[2] + " : " + birthdate[1] + " : " + birthdate[0]);
          email = response.email;
          fullname = response.name;
          city = location[0];
          state = location[1];
          country = location[2];
          gender = response.gender;
          console.log('nombre: ' + fullname);
          console.log('edad: ' + age);
          console.log('email: ' + email);
          console.log('ciudad: ' + city);
          console.log('estado: ' + state);
          console.log('pais: ' + country);
          url = "http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[custom_2]=" + gender + "&details[custom_1]=" + age + "&details[full_name]=" + fullname + "&details[email]=" + email + "&details[city]=" + city + "&details[state]=" + state + "&details[country]=" + country;
          return $.ajax({
            url: url,
            type: "POST",
            crossDomain: true
          });
        });
        return console.log('conectado');
      } else if (response.status === 'not_authorized') {
        return FB.login(function(response) {
          return FB.api("/me", function(response) {
            var age, birthdate, born, city, country, dob, email, fulllocation, fullname, gender, location, now, state, url;
            console.log(JSON.stringify(response));
            dob = response.birthday;
            now = new Date();
            fulllocation = response.location.name;
            location = fulllocation.split(", ");
            birthdate = dob.split("/");
            born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0]);
            age = get_age(born, now);
            console.log(birthdate[2] + " : " + birthdate[1] + " : " + birthdate[0]);
            email = response.email;
            fullname = response.name;
            city = location[0];
            state = location[1];
            country = location[2];
            gender = response.gender;
            console.log('nombre: ' + fullname);
            console.log('edad: ' + age);
            console.log('ciudad: ' + city);
            console.log('estado: ' + state);
            console.log('pais: ' + country);
            url = "http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[custom_2]=" + gender + "&details[custom_1]=" + age + "&details[full_name]=" + fullname + "&details[email]=" + email + "&details[city]=" + city + "&details[state]=" + state + "&details[country]=" + country;
            return $.ajax({
              url: url,
              type: "POST",
              crossDomain: true
            });
          });
        });
      } else {
        return FB.login(function(response) {
          return FB.api("/me", function(response) {
            var age, birthdate, born, city, country, dob, email, fulllocation, fullname, gender, location, now, state, url;
            console.log(JSON.stringify(response));
            dob = response.birthday;
            now = new Date();
            fulllocation = response.location.name;
            location = fulllocation.split(", ");
            birthdate = dob.split("/");
            born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0]);
            age = get_age(born, now);
            console.log(birthdate[2] + " : " + birthdate[1] + " : " + birthdate[0]);
            email = response.email;
            fullname = response.name;
            city = location[0];
            state = location[1];
            country = location[2];
            gender = response.gender;
            console.log('nombre: ' + fullname);
            console.log('edad: ' + age);
            console.log('ciudad: ' + city);
            console.log('estado: ' + state);
            console.log('pais: ' + country);
            url = "http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[custom_2]=" + gender + "&details[custom_1]=" + age + "&details[full_name]=" + fullname + "&details[email]=" + email + "&details[city]=" + city + "&details[state]=" + state + "&details[country]=" + country;
            return $.ajax({
              url: url,
              type: "POST",
              crossDomain: true
            });
          });
        });
      }
    });
  };
  $('#sign_in').click(function(e) {
    e.preventDefault();
    return FB.login(function(response) {
      if (response.authResponse) {
        return window.location = '/auth/facebook';
      }
    });
  });
  return $('.showSubscribe').on('click', function(e) {
    e.preventDefault();
    return addSubscriber();
  });
};

validateEmail = function($email) {
  var emailReg;
  emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test($email)) {
    return false;
  } else {
    return true;
  }
};

pageView = function(page) {
  return ga("send", "pageview", "/" + page);
};

supportsOrientationChange = "onorientationchange" in window;

orientationEvent = (supportsOrientationChange ? "orientationchange" : "resize");

window.addEventListener(orientationEvent, (function() {
  if (window.orientation === 0) {
    $('#rotardispisitivo').css({
      display: 'none'
    });
  } else if (window.orientation === 90) {
    $('#rotardispisitivo').css({
      display: 'block'
    });
  }
}), false);

resize = function() {
  var aspect, ratio, vidH, wH, wW;
  ratio = void 0;
  wH = void 0;
  wW = void 0;
  aspect = 1.33;
  wH = $(window).height();
  wW = $(window).width();
  ratio = wW / wH;
  if (wW > wH) {
    if (ratio > aspect) {
      $(".splashbg").width(wW);
      $(".splashbg").height("auto");
      vidH = $(".splashbg").height();
      return $(".splashbg").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: (wW / 2) * -1 + "px",
        marginTop: ((vidH - wH) / 2) + (wH / 2) * -1 + "px"
      });
    } else {
      $(".splashbg").width(wH * aspect);
      $(".splashbg").height(wH);
      return $(".splashbg").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: ((wH * aspect) / 2) * -1 + "px",
        marginTop: (wH / 2) * -1 + "px"
      });
    }
  } else {
    $(".splashbg").height(wH);
    $(".splashbg").width(wH * aspect);
    return $(".splashbg").css({
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: ((wH * aspect) / 2) * -1 + "px",
      marginTop: (wH / 2) * -1 + "px"
    });
  }
};

$(function() {
  var error, sendNewsletter, wH, wW;
  $(document.body).on("appear", ".shown", function(e, $affected) {
    $(this).addClass("appeared");
  });
  $(".shown").appear({
    force_process: true
  });
  $('#footer .created').on('click', function() {
    return $('#created').addClass('show');
  });
  $('#created .close').on('click', function() {
    return $('#created').removeClass('show');
  });
  sendNewsletter = function() {
    return $('.newsbtn p').html('Thanks');
  };
  error = function(response, status, xhr) {
    alert("error");
  };
  wH = $(window).height();
  wW = $(window).width();
  $('.splash').height(wH);
  if (navigator.userAgent.match(/iPad/i)) {
    $("#viewport").attr("content", "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0");
    if (window.orientation === 0) {
      return $('#rotardispisitivo').css({
        display: 'none'
      });
    } else if (window.orientation === 90) {
      return $('#rotardispisitivo').css({
        display: 'none'
      });
    }
  }
});

var MainController;

MainController = [
  '$scope', function($scope) {
    return $scope.msg = "Hello World";
  }
];



;

;
//# sourceMappingURL=app.js.map