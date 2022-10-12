// 2022-10-11-PM 9:00 ~ AM 1:00
// 2022-10-12-PM 10:00 ~ PM 11:00
/////////////////////////////
// 1. 오늘, 내일, 함께 보기 //
/////////////////////////////

//사용할 변수 선언
const today = document.querySelector(".today");
const tomorrow = document.querySelector(".tomorrow");
const together = document.querySelector(".together");
const rightSection = document.querySelector(".rSection");
const leftSection = document.querySelector(".lSection");
const clickedClass = "hidden";

//버튼 클릭시 사용할 함수 선언
function todayBtnClick() {
  //만약 hidden 있으면, remove. 없으면 add.
  if (rightSection.classList.contains(clickedClass)) {
    rightSection.classList.remove(clickedClass);
  } else {
    rightSection.classList.add(clickedClass);
  }
}

function tomorrowBtnClick() {
  if (leftSection.classList.contains(clickedClass)) {
    leftSection.classList.remove(clickedClass);
  } else {
    leftSection.classList.add(clickedClass);
  }
}

function togetherBtnClick() {
  if (
    leftSection.classList.contains(clickedClass) ||
    rightSection.classList.contains(clickedClass)
  ) {
    leftSection.classList.remove(clickedClass);
    rightSection.classList.remove(clickedClass);
  }
}

//click 시 함수 사용
today.addEventListener("click", todayBtnClick);
tomorrow.addEventListener("click", tomorrowBtnClick);
together.addEventListener("click", togetherBtnClick);

///////////////////////
// 2. 입력 후 li 추가 //
// 3. 삭제 li 삭제    //
///////////////////////

// 사용할 변수 선언
let inputBox = document.querySelector(".add_input"); // input
let addToDo = document.querySelector(".btn"); // input 옆 btn
let toDoList = document.querySelector(".list"); // 할 일 list
let trash = document.querySelector(".trash_icon"); // list 지우는 icon

function plusToDo() {
  var list = document.createElement("li"); // li 생성

  //경고창
  if (!inputBox.value) {
    alert("입력된 내용이 없습니다");
  } else {
    list.innerText = inputBox.value; // 입력 값 li와 함께 추가
    list.innerHTML +=
      "<img src='./img/trash.png' alt='add' class='trash_icon' /> <hr class='list_line' /> ";
    toDoList.appendChild(list);
    toDoList.addEventListener("click", deleteToDo); //삭제 동작
    inputBox.value = ""; // 초기화
  }
}

// click시, space 입력시 함수 실행
addToDo.addEventListener("click", plusToDo);
inputBox.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    plusToDo();
  }
});
