import { Component } from 'react';
import css from '../Modal/Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }
  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="largeImage" />
        </div>
      </div>
    );
  }
}
