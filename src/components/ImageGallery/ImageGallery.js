import { Component } from 'react';
import axios from 'axios';

import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

const API_KEY = '32381232-0d08b52c11723d23aba771294';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.serchRequest !== this.props.serchRequest) {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.props.serchRequest}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=1`
      );
      
      this.setState({ images: response.data.hits });
    }
  }

  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.state.images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
        ))}
      </ul>
    );
  }
}

// export const ImageGallery = ({ images }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {images.map(({ id, webformatURL, tags, largeImageURL }) => (
//         <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
//       ))}
//     </ul>
//   );
// };
