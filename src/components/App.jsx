import { Component } from 'react';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    serchRequest: '',
  };

  handleFormSubmit = serchRequest => {
    this.setState({ serchRequest });
  };

  render() {
    const { serchRequest } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery serchRequest={serchRequest} />
      </div>
    );
  }
}
