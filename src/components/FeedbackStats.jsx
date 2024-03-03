import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, cur) => {
          return acc + cur.rating;
        }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h2>{feedback.length} Reviews</h2>
      <h2>Average Rating: {isNaN(average) ? 0 : average}</h2>
    </div>
  );
};

export default FeedbackStats;
