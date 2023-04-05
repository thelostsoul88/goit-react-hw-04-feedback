import css from '../app/Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statList}>
      <li className={css.statItem}>
        <p className={css.statP}>Good: {good}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Neutral: {neutral}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Bad: {bad}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Total: {total}</p>
      </li>
      <li className={css.statItem}>
        <p className={css.statP}>Positive feedback: {positivePercentage}</p>
      </li>
    </ul>
  );
};

export default Statistics;
