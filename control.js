// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// show rule

function show_rule(target, event) {
  console.log('show_rules');
  target.classList.toggle('active');
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// hide rules

function hide_rules(event) {
  console.log('hide_rules');
  document.querySelectorAll('div.active').forEach(e => {
    e.classList.remove('active');
  });
  event.stopPropagation();
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// initialize

// ✅ ป้องกันไม่ให้การคลิกที่ modal หรือ icon ด้านใน trigger rule ซ้ำ
document.querySelectorAll('div.rule').forEach(rule => {
  rule.addEventListener('click', (event) => {
    // ถ้าคลิกที่ modal ข้างใน (หรือ element ที่อยู่ใน modal) → ไม่ทำงาน
    if (event.target.closest('.modal') || event.target.closest('.window')) {
      return;
    }
    rule.classList.toggle('active');
  });
});

// ปิด modal เมื่อคลิก blackout
document.querySelectorAll('div.blackout').forEach(e => {
  e.addEventListener('click', hide_rules);
});

// ไม่ให้คลิกใน window ส่งต่อออกไป (ปิด modal)
document.querySelectorAll('div.window').forEach(e => {
  e.addEventListener('click', (event) => event.stopPropagation());
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// theme toggle

const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
