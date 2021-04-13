import styles from './ContactItem.module.css';

import PropTypes from 'prop-types';

const ContactItem = ({ id, number, name, onDeleteContact }) => {
  return (
    <li key={id} className={styles.singleContact}>
      <p className={styles.contactName}>{name}</p>
      <span>{number}</span>
      <button
        className={styles.btn}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
