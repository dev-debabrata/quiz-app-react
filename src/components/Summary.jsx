import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div className='max-w-[700px] my-8 mx-auto p-8 bg-stone-200 text-stone-900 rounded-lg shadow-2xl'>
      <img
        src={quizCompleteImg}
        alt="Trophy icon"
        className='block w-32 h-32 object-contain mx-auto mb-4 p-4 drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] border-2 border-stone-950 rounded-full bg-stone-800' />
      <h2 className='text-5xl text-center uppercase text-stone-800 m-0'>Quiz Completed!</h2>
      <div className='flex gap-12 w-[60%] mx-auto my-8 pb-8 
                   border-b-2 border-[#594276]'>
        <p className="flex flex-col flex-1 m-0 text-center">
          <span className="text-[3rem] text-stone-500">{skippedAnswersShare}%</span>
          <span className="uppercase text-[0.8rem] text-stone-500 mt-[-0.7rem] ml-[0.2rem] tracking-[0.1rem]">skipped</span>
        </p>
        <p className="flex flex-col flex-1 m-0 text-center">
          <span className="text-[3rem] text-stone-500">{correctAnswersShare}%</span>
          <span className="uppercase text-[0.8rem] text-stone-500 mt-[-0.7rem] ml-[0.2rem] tracking-[0.1rem]">answered correctly</span>
        </p>
        <p className="flex flex-col flex-1 m-0 text-center">
          <span className="text-[3rem] text-stone-500">{wrongAnswersShare}%</span>
          <span className="uppercase text-[0.8rem] text-stone-500 mt-[-0.7rem] ml-[0.2rem] tracking-[0.1rem] ">answered incorrectly</span>
        </p>
      </div>
      <ol className='list-none my-8 mx-auto p-0 text-center'>
        {userAnswers.map((answer, index) => {
          let textColor = "text-[#251e2f] font-['Roboto_Condensed'] font-bold";

          if (answer === null) {
            textColor = "text-violet-600 font-['Roboto_Condensed'] font-normal";
          } else if (answer === QUESTIONS[index].answers[0]) {
            textColor = "text-[#054e37] font-['Roboto_Condensed'] font-bold";
          } else {
            textColor = "text-[#730b4b] font-['Roboto_Condensed'] font-bold";
          }

          return (
            <li key={index} className=' my-8'>
              <h3 className='text-base m-auto flex justify-center items-center bg-[#2c203d] text-[#d8cde8] w-8 h-8 rounded-full'>{index + 1}</h3>
              <p className="my-1 text-base text-[#30273a]">{QUESTIONS[index].text}</p>
              <p className={`my-1 ${textColor}`}>{answer ?? 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
