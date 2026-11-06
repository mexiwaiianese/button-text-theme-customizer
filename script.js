// Load saved theme or use defaults
const saved = JSON.parse(localStorage.getItem('theme') || '{}');

const root = document.documentElement;
const textColorInput = document.getElementById('textColor');
const buttonTextColorInput = document.getElementById('buttonTextColor');
const buttonBgInput = document.getElementById('buttonBg');
const resetBtn = document.getElementById('reset');

function applyTheme(theme) {
  root.style.setProperty('--text-color', theme.textColor || '#1a1a1a');
  root.style.setProperty('--button-text-color', theme.buttonTextColor || '#ffffff');
  root.style.setProperty('--button-bg', theme.buttonBg || '#2563eb');
  
  textColorInput.value = theme.textColor || '#1a1a1a';
  buttonTextColorInput.value = theme.buttonTextColor || '#ffffff';
  buttonBgInput.value = theme.buttonBg || '#2563eb';
}

function saveTheme() {
  const theme = {
    textColor: textColorInput.value,
    buttonTextColor: buttonTextColorInput.value,
    buttonBg: buttonBgInput.value
  };
  localStorage.setItem('theme', JSON.stringify(theme));
  applyTheme(theme);
}

// Event listeners
textColorInput.addEventListener('input', saveTheme);
buttonTextColorInput.addEventListener('input', saveTheme);
buttonBgInput.addEventListener('input', saveTheme);

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('theme');
  applyTheme({});
});

// Initial apply
applyTheme(saved);
