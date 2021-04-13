import { Component } from 'react';
import styles from './InputForm.module.css';
import PropTypes from 'prop-types';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  submitContact = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className="section" action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">
          <p className="subHeader">Add Your Contact Here</p>
          <input
            placeholder="Enter name"
            className={styles.input}
            type="text"
            value={this.state.name}
            onChange={this.submitContact}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <input
            placeholder="Enter phonenumber"
            className={styles.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.submitContact}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputForm;
