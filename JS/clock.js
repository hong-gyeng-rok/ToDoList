const clock = document.querySelector("#clock");

//시간을 불러오는 함수
function getClock() {
  //시간을 로컬에서 불러옴
  const date = new Date();
  //불러온 시간을 00:00:00의 형식에 맞게 수정
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const secondes = String(date.getSeconds()).padStart(2, "0");
  //수정된 시간 표시 형식을 html에 입력
  clock.innerText = `${hours}:${minutes}:${secondes}`;
}

// 1초마다 함수를 재실행 시켜 시간을 업데이트해줌
setInterval(getClock, 1000);
