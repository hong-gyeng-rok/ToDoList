//명언 목록
const quotes = [
  {
    quote:
      "경험은 최고의 스승이다. 그리고 최악의 경험은 가장 훌륭한 수업인 것이다.",
    author: "조던 B. 피터슨",
  },
  {
    quote:
      "오늘의 자신을 어제의 자신과 비교하되, 오늘의 다른 사람과 비교하지 마라.",
    author: "조던 B. 피터슨",
  },
  {
    quote:
      "우리는 종종 우리 자신이 가지고 있지 않은 것에 대해서 너무 과대평가하고 우리가 가진 것에 대해서는 너무 과소평과하는 경향이 있다.",
    author: "조던 B. 피터슨",
  },
  {
    quote:
      "세상에는 당신이 올인하지 않으면 플레이할 수 없는 게임들이 있다는 것을 명심해라.",
    author: "조던 B. 피터슨",
  },
  {
    quote: "새로운 기술을 마스터하려면 그거를 가지고 놀 줄 알아야 한다.",
    author: "조던 B. 피터슨",
  },
  {
    quote:
      "인생은 비극이다. 너는 작고 결점이 많고 무지하고 나약하며 그 밖의 모든 것은 거대하고 복잡하며 압도적이다.",
    author: "조던 B. 피터슨",
  },
  {
    quote: "스스로를 도와줘야할 사람처럼 대해라.",
    author: "조던 B. 피터슨",
  },
  {
    quote: "쉬운 길이 아니라 의미있는 길을 선택하라.",
    author: "조던 B. 피터슨",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
//quotes(명언목록) array에 랜덤한 숫자를 입력하여 랜덤한 명언이 출력되게 설정
const ramdomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = ramdomQuotes.quote;
author.innerText = ramdomQuotes.author;
