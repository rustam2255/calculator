// Tugmachani bosish orqali qiymat qo'shish
function appendValue(value) {
  document.getElementById('display').value += value;
}

// Ekranni tozalash
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Oxirgi belgini o'chirish
function deleteLast() {
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display.slice(0, -1);
}

// Hisoblash
function calculate() {
  let display = document.getElementById('display').value;
  try {
      document.getElementById('display').value = eval(display);
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

// Klaviatura kiritishini qo'llab-quvvatlash
document.addEventListener('keydown', function(event) {
  const key = event.key; // Bosilgan tugmachaning qiymati
  const display = document.getElementById('display');
  
  // Agar raqam yoki nuqta bo'lsa, qo'shish
  if (!isNaN(key) || key === '.') {
      appendValue(key);
  }
  // Agar arifmetik belgilar bo'lsa, qo'shish
  else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendValue(key);
  }
  // Enter tugmasi bosilganda hisoblash
  else if (key === 'Enter') {
      calculate();
  }
  // Backspace bosilganda oxirgi belgini o'chirish
  else if (key === 'Backspace') {
      deleteLast();
  }
  // Escape bosilganda ekranni tozalash
  else if (key === 'Escape') {
      clearDisplay();
  }
  // Agar boshqa tugmalar bosilsa, hech narsa qilmaslik
  else {
      event.preventDefault();
  }
});
