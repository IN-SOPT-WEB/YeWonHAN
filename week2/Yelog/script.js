// 2022-10-12-PM 11:00 ~ AM 3:00
// 2022-10-14 AM 1:00 ~ AM 2:00
// 2022-10-14 AM 6:00 ~ AM 7:30
// 2022-10-14 PM 8:00 ~ PM 10:30

//dropDown js로 구현하기

//변수 선언
const dropDown = document.querySelector(".dropDownBox");
const pickOption = dropDown.querySelector(".dropDownFace");
const options = dropDown.querySelectorAll(".option");
const text = dropDown.querySelector(".faceText");
const selectText = document.querySelector(".optionText");

//동작 선언
options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".optionText").innerText;

    //선택한 것 face에 넣음.
    text.innerText = selectedOption;

    //dropDown 닫음.
    dropDown.classList.remove("active");
  });
});

//클릭 이벤트 선언
pickOption.addEventListener("click", () => dropDown.classList.toggle("active"));
