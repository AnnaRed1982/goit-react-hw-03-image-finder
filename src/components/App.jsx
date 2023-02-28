import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from 'components/Searchbar/Searchbar';

const API_KEY = '32381232-0d08b52c11723d23aba771294';

// axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=1`
    );
    this.setState({ images: response.data.hits });
    console.log(this.state.images);
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar />

        <ul>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <li key={id}>
              <img src={webformatURL} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
