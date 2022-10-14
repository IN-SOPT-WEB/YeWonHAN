// tag 만들기

// 변수 선언
const tagInput = document.querySelector("#tag");

// 유효성 검사
const tagIsEmpty = (tag) => {
  if (tag == null || tag == " " || tag.length <= 0) {
    alert("태그를 입력하세요");
    return false;
  } else return true;
};

// tag 생성 함수
const createTag = (tag) => {
  const divTag = document.createElement("div");
  const tagWrite = document.createElement("span");

  divTag.className = "tag";
  tagWrite.textContent = tag;

  //클릭시 제거
  divTag.addEventListener("click", removeTag);

  //tag 추가
  divTag.appendChild(tagWrite);

  return divTag;
};

const appendTag = (parentId, referenceId, newNode) => {
  const parentElement = document.querySelector(`#${parentId}`);
  const referenceElement = document.querySelector(`#${referenceId}`);
  parentElement.insertBefore(newNode, referenceElement);
};

const clearTextContent = (targetId) => {
  const target = document.querySelector(`#${targetId}`);
  target.value = "";
};

const addTag = (e) => {
  const { keyCode, target } = e;
  const { value: tagText } = target;

  //유효성 검사
  if (keyCode == 13 && tagIsEmpty(tagText)) {
    appendTag("tagDiv", "tag", createTag(tagText));
    clearTextContent("tag");
  }
};

// 제거
const removeTag = (e) => {
  e.currentTarget.remove();
};

//실행
tagInput.addEventListener("keyup", addTag);
