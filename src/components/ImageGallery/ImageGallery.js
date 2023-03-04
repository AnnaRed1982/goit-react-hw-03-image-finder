import { Component } from 'react';
import { fetchSearchImage } from '../../services/api';
import { Loader } from '../Loader/Loader';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.serchRequest !== this.props.serchRequest) {
      this.state.images = [];
      this.state.page = 1;
    }

    if (
      prevProps.serchRequest !== this.props.serchRequest ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      try {
        const response = await fetchSearchImage(
          this.props.serchRequest,
          this.state.page
        );
        if (response.length === 0) {
          this.setState({ status: null });
          return alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (response.length > 0) {
          this.setState(({ images }) => ({
            images: [...images, ...response],
            status: 'resolved',
          }));
        }
      } catch (error) {
        this.setState({ status: 'rejected', error });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status, error, images } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h2>Whoops, something went wrong: {error.message}</h2>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={css.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
              />
            ))}
          </ul>
          <Button onClick={this.loadMore} />
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  serchRequest: PropTypes.string,
};

// export const ImageGallery = ({ images }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {images.map(({ id, webformatURL, tags, largeImageURL }) => (
//         <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
//       ))}
//     </ul>
//   );
// };

// export class ImageGallery extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     error: null,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevProps.serchRequest !== this.props.serchRequest) {
//       this.setState({ isLoading: true });
//       try {
//         const response = await axios.get(
//           `https://pixabay.com/api/?q=${this.props.serchRequest}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=1`
//         );

//         this.setState({ images: response.data.hits });
//       } catch (error) {
//         this.setState({ error });
//         console.log(error);
//       } finally {
//         this.setState({ isLoading: false });
//       }

//       // this.setState({ isLoading: true });
//       // const response = await axios.get(
//       //   `https://pixabay.com/api/?q=${this.props.serchRequest}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=1`
//       // );

//       // this.setState({ images: response.data.hits, isLoading: false });
//     }
//   }

//   render() {
//     return (
//       <>
//         {this.state.error && (
//           <p>Whoops, something went wrong: {this.state.error.message}</p>
//         )}
//         {this.state.isLoading ? (
//           <h2>Loading</h2>
//         ) : (
//           <ul className={css.ImageGallery}>
//             {this.state.images.map(
//               ({ id, webformatURL, tags, largeImageURL }) => (
//                 <ImageGalleryItem
//                   key={id}
//                   webformatURL={webformatURL}
//                   tags={tags}
//                 />
//               )
//             )}
//           </ul>
//         )}
//       </>
//     );
//   }
// }

//  const response = await axios.get(
//    `https://pixabay.com/api/?q=${this.props.serchRequest}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&`
//  );
//  if (response.data.hits.length === 0) {
//    this.setState({ status: null });
//    return alert(
//      'Sorry, there are no images matching your search query. Please try again.'
//    );
//  }
//  if (response.data.hits.length > 0) {
//    this.setState(({ images }) => ({
//      images: [...images, ...response.data.hits],
//      status: 'resolved',
//    }));
//  }
// const API_KEY = '32381232-0d08b52c11723d23aba771294';
// import axios from 'axios';
