import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <ul className={styles.section}>
      {list.map(({ id, name, number }) => {
        return (
          <ContactItem
            number={number}
            name={name}
            key={id}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default ContactList;
