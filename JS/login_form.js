const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.getElementById("greeting");
const logOutBtn = document.getElementById("logout-button");
const exitBtn = document.getElementById("exit-btn");
//import { TODOS_KEY } from "./todo";

const HIDDEN_CLASSNAME = "hidden";
const SHOW_CLASSNAME = "show";
const USERNAME_KEY = "username";

function handleLoginFormSubmit(event) {
  //페이지의 새로고침을 막아줌
  event.preventDefault();
  //유저가 입력한 닉네임을 로컬스토리지에 저장
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  logOutBtn.classList.remove(HIDDEN_CLASSNAME);
  showUsername();
}
//로그아웃 함수
function logOut(event) {
  event.preventDefault;
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logOutBtn.classList.add(HIDDEN_CLASSNAME);
}
//스토리지에 저장된 유저의 닉네임을 "Hello OOO"의 형식으로 표시하는 함수
function showUsername() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
//초기화 함수
function allDelete() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(TODOS_KEY);
  location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//스토리지에 유저의 닉네임이 있으면 유저의 닉네임을 표시
//스토리지에 유저의 닉네임이 없으면 로그인 폼을 표시하는 if문
if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginFormSubmit);
} else {
  //show the greeting
  showUsername();
  logOutBtn.classList.remove(HIDDEN_CLASSNAME);
}

logOutBtn.addEventListener("click", logOut);
exitBtn.addEventListener("click", allDelete);
