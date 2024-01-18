import { Notification } from './Notification';
import styles from './Feedback.module.css';

export const Feedback = ({ items: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div className={styles.feedbackContainer}>
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
