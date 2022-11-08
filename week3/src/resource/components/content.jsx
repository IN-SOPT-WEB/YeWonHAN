import React, { useState } from "react";
import Score from "../content/score";
import Button from "../content/button";
import ReturnButton from "../content/returnPage";
import ShowImg from "../content/img";
import Modal from "../content/modal";
import End from "../content/end";

// Quiz data --
export default function Content() {
  const quiz = [
    {
      quizImg: "뚜뚜.jpg",
      options: [
        { option: "삐삐", isCorrect: false },
        { option: "뚜뚜", isCorrect: true },
        { option: "크롱", isCorrect: false },
        { option: "뽀뽀", isCorrect: false },
      ],
    },
    {
      quizImg: "로디.jpg",
      options: [
        { option: "포비", isCorrect: false },
        { option: "루피", isCorrect: false },
        { option: "패티", isCorrect: false },
        { option: "로디", isCorrect: true },
      ],
    },
    {
      quizImg: "루피.jpg",
      options: [
        { option: "루피", isCorrect: true },
        { option: "포비", isCorrect: false },
        { option: "크롱", isCorrect: false },
        { option: "에디", isCorrect: false },
      ],
    },
    {
      quizImg: "뽀로로.jpg",
      options: [
        { option: "통통이", isCorrect: false },
        { option: "크롱", isCorrect: false },
        { option: "에디", isCorrect: false },
        { option: "뽀로로", isCorrect: true },
      ],
    },
    {
      quizImg: "에디.jpg",
      options: [
        { option: "포비", isCorrect: false },
        { option: "해리", isCorrect: false },
        { option: "에디", isCorrect: true },
        { option: "삐삐", isCorrect: false },
      ],
    },
    {
      quizImg: "크롱.jpg",
      options: [
        { option: "크롱", isCorrect: true },
        { option: "루피", isCorrect: false },
        { option: "뽀로로", isCorrect: false },
        { option: "에디", isCorrect: false },
      ],
    },
    {
      quizImg: "통통이.jpg",
      options: [
        { option: "포비", isCorrect: false },
        { option: "뽀뽀", isCorrect: false },
        { option: "통통이", isCorrect: true },
        { option: "뚜뚜", isCorrect: false },
      ],
    },
    {
      quizImg: "패티.jpg",
      options: [
        { option: "포비", isCorrect: false },
        { option: "크롱", isCorrect: false },
        { option: "에디", isCorrect: false },
        { option: "패티", isCorrect: true },
      ],
    },
    {
      quizImg: "해리.jpg",
      options: [
        { option: "해리", isCorrect: true },
        { option: "패티", isCorrect: false },
        { option: "크롱", isCorrect: false },
        { option: "에디", isCorrect: false },
      ],
    },
    {
      quizImg: "삐삐.jpg",
      options: [
        { option: "뽀뽀", isCorrect: false },
        { option: "크롱", isCorrect: false },
        { option: "루피", isCorrect: false },
        { option: "삐삐", isCorrect: true },
      ],
    },
  ];
  /////////

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [correctModalOpen, setCorrectModalOpen] = useState(false);
  const [incorrectModalOpen, setIncorrectModalOpen] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setCorrectModalOpen(true);
      setScore(score + 1);
    } else {
      setIncorrectModalOpen(true);
    }
    const nextQuiz = currentQuiz + 1;
    if (nextQuiz < quiz.length) {
      setCurrentQuiz(nextQuiz);
    } else {
      setShowScore(true);
    }
  };

  const closeModal = () => {
    setCorrectModalOpen(false);
    setIncorrectModalOpen(false);
  };

  return (
    <>
      {showScore ? (
        <>
          <div className="scorePanel">
            <Score score={score} quizNum={quiz.length} />
          </div>
          <div className="endPanel">
            <End />
          </div>
          <ReturnButton />
        </>
      ) : (
        <>
          <div className="quizPanel">
            <div className="informScore">
              <Score
                score={score}
                quizNum={quiz.length}
                currentQuizNum={currentQuiz + 1}
              />
            </div>
            <div className="showQuiz">
              <ShowImg
                currentQuizNum={currentQuiz + 1}
                img={`/img/${quiz[currentQuiz].quizImg}`}
                imgAlt={quiz[currentQuiz].quizImg}
              />
            </div>
          </div>
          <div className="optionQuiz">
            {quiz[currentQuiz].options.map((answerOption) => (
              <Button
                option={answerOption.option}
                inco={answerOption.isCorrect}
                handleAnswerOptionClick={handleAnswerOptionClick}
              ></Button>
            ))}
            <div className="modalPanel">
              <Modal
                open={correctModalOpen}
                close={closeModal}
                context="맞았어요!"
              ></Modal>
              <Modal
                open={incorrectModalOpen}
                close={closeModal}
                context="틀렸어요!"
              ></Modal>
            </div>
            <ReturnButton />
          </div>
        </>
      )}
    </>
  );
}
