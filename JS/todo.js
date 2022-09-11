const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

//toDos array에 저장된 입력 값을 저장
function saveToDos() {
  //JSON.stringfy를 이용해 array를 text로 변환
  //localStorage는 array형식으로 저장이 불가능해 text로 변환 시켜줘야함
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//button 클릭시 toDoList 지우기
function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

//입력한 toDo를 html을 통해 보여줌
function paintToDo(newToDo) {
  const li = document.createElement("li");
  //li에 newToDoObj에 있는 id를 부여
  li.id = newToDo.id;

  const span = document.createElement("span");
  //newToDo 입력 값을 innerText를 통해 span에 입력
  span.innerText = newToDo.Text;

  const button = document.createElement("button");
  button.innerText = "X";

  button.addEventListener("click", deleteToDo);

  //li를 toDoList의 자식으로 만들어 list에 추가
  //span, button을 li의 자식으로 만듦
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
// 입력한 toDo를 submit하는 함수
function handleToDosubmit(event) {
  event.preventDefault();

  //input의 현재 value를 새로운 변수에 복사하는 것
  const newToDo = toDoInput.value;
  const newToDoObj = { Text: newToDo, id: Date.now() };

  //input 입력창 비워줌
  toDoInput.value = "";
  paintToDo(newToDoObj);

  //toDos array에 newToDo를 push
  toDos.push(newToDoObj);

  //toDos array에 저장된 입력 값을 저장
  saveToDos();
}

function allDelete() {
  localStorage.removeItem(TODOS_KEY);
  location.reload();
}

toDoForm.addEventListener("submit", handleToDosubmit);

//localStorage에 저장된 값들을 불러옴
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //JSON.stringfy에서 text로 저장되었던 item들을 array형식으로 변환
  const parsedToDos = JSON.parse(savedToDos);

  //localStorage에 기존에 저장된 item들이 있다면 toDos array에 추가 시켜줌
  toDos = parsedToDos;

  //forEach를 통해 array 안에 있는 item들을 화면에 그려줌
  parsedToDos.forEach(paintToDo);
}
