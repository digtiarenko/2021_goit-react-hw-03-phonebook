import styles from './Find.module.css';
import PropTypes from 'prop-types';

const Find = ({ value, newFilter }) => {
  return (
    <form>
      <label>
        <span> Find Your Contact</span>
        <input
          className={styles.input}
          value={value}
          onChange={newFilter}
          name="filter"
          placeholder="Enter search query"
          type="text"
        />
      </label>
    </form>
  );
};

Find.propTypes = {
  value: PropTypes.string.isRequired,
  newFilter: PropTypes.func.isRequired,
};

export default Find;
