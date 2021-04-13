import { Component } from 'react';
import ContactList from './components/ContactList/';
import InputForm from './components/InputForm/InputForm';
import Find from './components/Find';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in the phonebook`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { contacts } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <h1>Phonebook</h1>
        <InputForm onSubmit={this.addContact} />
        <Find value={this.state.filter} newFilter={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList
          list={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
