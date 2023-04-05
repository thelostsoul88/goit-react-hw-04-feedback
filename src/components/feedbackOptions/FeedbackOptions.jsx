import css from '../app/Feedback.module.css';
import variant from 'components/_util';

const FeedbackOptions = ({ handleChange }) => {
  const { good, neutral, bad } = variant;
  return (
    <ul className={css.btnList}>
      <li className={css.btnItem}>
        <button type="button" onClick={() => handleChange(good)}>
          Good
        </button>
      </li>
      <li className={css.btnItem}>
        <button type="button" onClick={() => handleChange(neutral)}>
          Nutral
        </button>
      </li>
      <li className={css.btnItem}>
        <button type="button" onClick={() => handleChange(bad)}>
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
