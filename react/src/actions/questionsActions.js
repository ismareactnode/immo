
export const SETQUESTIONS = 'SETQUESTIONS';

export const fetchQuestions = () => {
  return async function(dispatch){
    const questionsJSON = await fetch('/questions');
    const questions = await questionsJSON.json();
    dispatch(setQuestions(questions));
  };
};

const setQuestions = (questions) => ({
    type: SETQUESTIONS,
    questions,
  });
