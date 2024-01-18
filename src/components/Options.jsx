import { Button } from './Button';

export const Options = ({
  items: { good, neutral, bad },
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
  handleClickReset,
}) => {
  const totalFeedback = good + neutral + bad;
  return (
    <div>
      <Button onClick={handleClickGood}>Good</Button>
      <Button onClick={handleClickNeutral}>Neutral</Button>
      <Button onClick={handleClickBad}>Bad</Button>
      {totalFeedback > 0 && <Button onClick={handleClickReset}>Reset</Button>}
    </div>
  );
};
