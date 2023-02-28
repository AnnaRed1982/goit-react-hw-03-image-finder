import { Component } from 'react';
import axios from 'axios';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

const API_KEY = '32381232-0d08b52c11723d23aba771294';

// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends Component {
  state = {
    images: [],
  };

  addSearch = () => {};

  async componentDidMount() {
    const response = await axios.get(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=1`
    );
    this.setState({ images: response.data.hits });
    console.log(this.state.images);
  }
  // async componentDidUpdate() {
  //   const response = await axios.get(
  //     `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=1`
  //   );
  //   this.setState({ images: response.data.hits });
  //   console.log(this.state.images);
  // }

  render() {
    const { images } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.addSearch} />

        {images.length > 0 ? <ImageGallery images={images} /> : null}
      </div>
    );
  }
}
