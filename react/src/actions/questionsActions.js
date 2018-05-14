
export const SETQUESTIONS = 'SETQUESTIONS';


export const fetchQuestions = () => {
  return async function(dispatch){
    let questionsJSON = await fetch('/questions');
    let questions = await questionsJSON.json();
    dispatch(setQuestions(questions));
  };
};

const setQuestions = (questions) => ({
    type: SETQUESTIONS,
    questions,
  });
