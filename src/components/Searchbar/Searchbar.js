import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = { input: '' };

  handleInputChange = e => {
    this.setState({input: e.currentTarget.value.toLowerCase()})
  };

  handleSubmit = e => {
    e.preventDefault();
    // const { input } = e.target.elements;

    // if (this.props.contacts.find(contact => contact.name === name.value)) {
    //   alert(`${name.value} is already in contacts!`);
    //   e.currentTarget.reset();
    //   return;
    // }

    this.props.onSubmit(this.state.input);
    e.currentTarget.reset();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['searchForm-button']}>
            <span className={css['searchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['searchForm-input']}
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
