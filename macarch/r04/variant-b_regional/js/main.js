/* Minimal behaviour: mobile burger, conditional confidential field, ?system=am-cor and ?topic=comparison preselect. */
(function () {
  'use strict';

  // Mobile navbar burger
  var burger = document.querySelector('.navbar-burger');
  if (burger) {
    burger.addEventListener('click', function (e) {
      e.preventDefault();
      var menu = document.getElementById(burger.dataset.target);
      var open = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Start-a-project form behaviours (only present on start.html)
  var typeSel = document.getElementById('f-type');
  var conf = document.getElementById('confidential-field');
  if (typeSel && conf) {
    var toggle = function () {
      var show = typeSel.value === 'Hardened / secure';
      conf.hidden = !show;
      if (!show) { conf.querySelector('input').checked = false; }
    };
    typeSel.addEventListener('change', toggle);
    toggle();
  }

  // ?system=am-cor pre-selects the structural system radio
  var sys = new URLSearchParams(window.location.search).get('system');
  if (sys === 'am-cor') {
    var radio = document.querySelector('input[name="system"][value="am-cor"]');
    if (radio) { radio.checked = true; }
  }

  // ?topic=comparison pre-selects the enquiry subject
  var topic = new URLSearchParams(window.location.search).get('topic');
  if (topic === 'comparison') {
    var tsel = document.getElementById('f-topic');
    if (tsel) { tsel.value = 'Performance comparison'; }
  }

  // Mockup only: never submit the form
  var form = document.querySelector('.project-form');
  if (form) {
    form.addEventListener('submit', function (e) { e.preventDefault(); });
  }
})();
