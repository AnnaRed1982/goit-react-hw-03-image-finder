import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  modalToggle = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={css['imageGalleryItem-image']}
          onClick={this.modalToggle}
        />
        {this.state.isModalOpen && <Modal largeImageURL={largeImageURL} />}
      </li>
    );
  }
}
