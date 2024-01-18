import React, { Component } from 'react';
import './SearchApp.css';

const database = [
    { id: 1, name: 'John Doe', age: 30, height: 175, weight: 70 },
    { id: 2, name: 'Jane Doe', age: 25, height: 160, weight: 55 },
    { id: 3, name: 'Jane Doe', age: 35, height: 190, weight: 65 },
    { id: 4, name: 'Jane Doe', age: 40, height: 1830, weight: 85 }
];

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchResults: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleSearch = () => {
    const { searchInput } = this.state;
    const results = database.filter(
      (person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ searchResults: results });
  };

  render() {
    const { searchInput, searchResults } = this.state;

    return (
      <div className="container">
        <h1>Поиск личностей</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Введите имя для поиска"
            value={searchInput}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSearch}>Найти</button>
        </div>

        <div className="result-container">
          <h2>Результаты поиска</h2>
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((person) => (
                <li key={person.id}>
                  {person.name} - Возраст: {person.age}, Рост: {person.height}, Вес: {person.weight}
                </li>
              ))}
            </ul>
          ) : (
            <p>Ничего не найдено</p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchApp;
