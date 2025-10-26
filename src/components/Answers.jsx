import { useRef } from 'react';

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="flex flex-col items-center gap-2 mt-2">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        let buttonClasses = 'w-[90%] px-8 py-4 text-sm rounded-full font-roboto-condensed font-semibold transition-all duration-200 ease-in-out focus:outline-none';

        // Base color
        if (!answerState) {
          buttonClasses +=
            ' bg-stone-200 text-[#1a1a1a] hover:bg-stone-700 hover:text-white';
        }

        // While answering
        if (answerState === 'answered' && isSelected) {
          buttonClasses += ' bg-[#f5a76c] text-[#2c203d]';
        }

        // After correct or wrong
        if (answerState === 'correct' && isSelected) {
          buttonClasses += ' bg-[#5af59d] text-[#2c203d]';
        }
        if (answerState === 'wrong' && isSelected) {
          buttonClasses += ' bg-[#f55a98] text-[#2c203d]';
        }

        return (
          <li key={answer} className="w-full flex justify-center">
            <button
              onClick={() => onSelect(answer)}
              className={buttonClasses}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
