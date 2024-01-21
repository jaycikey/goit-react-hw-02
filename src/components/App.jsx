import { useEffect, useState } from 'react';
import { Description } from './Description/Description';
import { Feedback } from './Feedback/Feedback';
import { Options } from './Options/Options';

export const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const isFeedbackYet = window.localStorage.getItem('feedback');
    
    return isFeedbackYet !== null ? JSON.parse(isFeedbackYet) : {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const handleClickGood = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };

  const handleClickNeutral = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
    }));
  };

  const handleClickBad = () => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
    }));
  };

  const handleClickReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
 
  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        items={feedback}
        handleClickGood={handleClickGood}
        handleClickNeutral={handleClickNeutral}
        handleClickBad={handleClickBad}
        handleClickReset={handleClickReset}
      />
      <Feedback items={feedback} />
    </div>
  );
};
