import { Notification } from './Notification';

export const Feedback = ({ items: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positive}%</p>
        </>
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};
