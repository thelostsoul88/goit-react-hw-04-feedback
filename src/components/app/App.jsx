import { useState } from 'react';
import Statistics from '../statistic/FeedbackStatistic';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Section from '../section/Section';
import Notification from '../notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = i => {
    switch (i) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    let countPositiveFeedback = (good * 100) / total;
    return Math.ceil(countPositiveFeedback) + '%';
  };

  const total = countTotalFeedback();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions handleChange={handleChange} />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

export default App;
