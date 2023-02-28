import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css['imageGalleryItem-image']}
      />
    </li>
  );
};
