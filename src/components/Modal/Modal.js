import css from '../Modal/Modal.module.css'

export const Modal = ({largeImageURL}) => {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="largeImage" />
        </div>
      </div>
    );
};