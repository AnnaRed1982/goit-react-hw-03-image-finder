import { Component } from 'react';
import axios from 'axios';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

const API_KEY = '32381232-0d08b52c11723d23aba771294';

// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends Component {
  state = {
    images: [],
    serchRequest: '',
  };

  handleFormSubmit = serchRequest => {
    console.log(this.state.serchRequest);
    this.setState({ serchRequest });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.serchRequest !== this.state.serchRequest) {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.state.serchRequest}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=1`
      );
      this.setState({ images: response.data.hits });
      console.log(this.state.images);
    }
  }

  render() {
    const { images } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery images={images} />
      </div>
    );
  }
}


