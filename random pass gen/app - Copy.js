const passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector(".generate-btn");
const copyIcon = document.querySelector(".copy-icon");
const PASSWORD_LENGTH = 12;

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-={}[]~|/?><";

const ALL_CHARS = UPPERCASE + LOWERCASE + NUMBERS + SYMBOLS;

const getRandomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];

const createPassword = () => {
  let password = [
    getRandomChar(UPPERCASE),
    getRandomChar(LOWERCASE),
    getRandomChar(NUMBERS),
    getRandomChar(SYMBOLS)
  ];

  while (password.length < PASSWORD_LENGTH) {
    password.push(getRandomChar(ALL_CHARS));
  }

  password = password.sort(() => Math.random() - 0.5).join('');
  passwordBox.value = password;
};

const copyToClipboard = () => {
  if (!passwordBox.value) return;
  navigator.clipboard.writeText(passwordBox.value);
  alert("Password copied to clipboard!");
};

generateBtn.addEventListener("click", createPassword);
copyIcon.addEventListener("click", copyToClipboard);

