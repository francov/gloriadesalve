function switchLanguageTo(lang) {
  var previous_lang = window.current_lang;
  window.current_lang = lang;
  window.localStorage.setItem("lang", lang);
  $(document.documentElement).removeClass("lang-" + previous_lang);
  $(document.documentElement).addClass("lang-" + lang);
  $(".switch-to-lang-" + previous_lang).removeClass("disabled");
  $(".switch-to-lang-" + lang).addClass("disabled");
}

function setLanguage() {
  window.current_lang = window.localStorage.getItem("lang");

  switch (window.current_lang) {
  case "en":
    switchLanguageTo("en");
    break;
  case "it":
    switchLanguageTo("it");
    break;
  default:
    switchLanguageTo("it");
    break;
  }
}

// handle page load
$(setLanguage);

// handle switch requests
$(".switch-to-lang-it").click(function () { switchLanguageTo("it"); });
$(".switch-to-lang-en").click(function () { switchLanguageTo("en"); });

