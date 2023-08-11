import React, { Component } from 'react';

export default class DataFetchingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://api.api-ninjas.com/v1/quotes?category=dating', {
      method: 'GET',
      headers: {
        'X-Api-Key': '9m7PseExHusn5wNJIgKbQg==yaobg8xRyBMMWoYM',
      },
      contentType: 'application/json',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          loading: false,
          data,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error,
        });
      });
  }

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return <div className="qoute-loading"> please wait while Loading...</div>;
    }

    if (error) {
      return (
        <div className="qoute-loading">
          error:404 Cant get the data from the api
          {error.message}
        </div>
      );
    }

    return (
      <div className="qoute">
        <h2>Quote of the day</h2>
        <ul>
          {data.map((quot) => (
            <li key={1}>{quot.quote}</li>
          ))}
        </ul>
      </div>
    );
  }
}
