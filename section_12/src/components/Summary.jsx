import quizCompleteImg from "../assets/quiz-complete.png";

import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0],
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100,
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100,
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span>Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span>Correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span>Wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let userAnswerClasses = "user-answer";
          if (answer === null) {
            userAnswerClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            userAnswerClasses += " correct";
          } else {
            userAnswerClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={userAnswerClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
