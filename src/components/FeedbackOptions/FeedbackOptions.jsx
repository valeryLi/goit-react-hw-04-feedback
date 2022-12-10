import PropTypes from 'prop-types';
import s from './FeddbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.feedback__box}>
      {options.map(name => (
        <button
          className={s.feedback__button}
          type="button"
          onClick={() => {
            onLeaveFeedback(name);
          }}
          data-name={name}
          key={name}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
