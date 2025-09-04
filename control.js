// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// control.js

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// show rule

  function show_rule (target, event) {
    console.log('show_rules');
    target.classList.toggle('active');
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// hide rules

  function hide_rules (event) {
    console.log('hide_rules');
    document.querySelectorAll('div.active').forEach(e => {
      e.classList.remove('active');
    });
    event.stopPropagation();
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// initialize

function show_rule(rule, event) {
  console.log('show_rules');

  // หา window ที่อยู่ข้างใน rule
  const window = rule.querySelector('.window');
  if (window) {
    window.classList.toggle('active');
  }
  
  event.stopPropagation();
}

document.querySelectorAll('div.rule').forEach(rule => {
  rule.addEventListener('click', show_rule.bind(null, rule));
});

  document.querySelectorAll('div.blackout').forEach(e => {
    e.addEventListener('click',hide_rules);
  });
  document.querySelectorAll('div.window').forEach(e => {
    e.addEventListener('click', (event) => event.stopPropagation());
  });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  });

