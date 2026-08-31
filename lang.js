// Переключатель языка. По умолчанию — язык браузера, дальше запоминается.
(function () {
  var KEY = "vaultic-lang";
  var stored;
  try { stored = localStorage.getItem(KEY); } catch (e) { stored = null; }
  var lang = stored || ((navigator.language || "en").slice(0, 2) === "ru" ? "ru" : "en");

  function apply(next) {
    document.body.className = next;
    document.documentElement.lang = next;
    var buttons = document.querySelectorAll(".switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.lang === next));
    }
    try { localStorage.setItem(KEY, next); } catch (e) {}
  }

  apply(lang);
  document.querySelector(".switch").addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (button) apply(button.dataset.lang);
  });
})();
