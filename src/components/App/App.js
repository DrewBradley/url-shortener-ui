import React, { Component } from 'react';
import './App.css';
import { getUrls, getShortUrls  } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({
      urls: data,
    }))
  }

  makeShortUrl = (url, title) => {
    getShortUrls(url, title)
      .then(response => this.setState({ urls: [...this.state.urls, response] }))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm makeShortUrl={this.makeShortUrl} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
