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
let inputBox = document.querySelector(".add_input"); // 할 일 입력창
let addToDo = document.querySelector(".btn"); // 버튼
let toDoList = document.querySelector(".list"); // 할 일 리스트창
let trash = document.querySelector(".trash_icon");
