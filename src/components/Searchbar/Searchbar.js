import css from './Searchbar.module.css'

export const Searchbar = () => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}>
        <button type="submit" className={css['searchForm-button']}>
          <span className={css['searchForm-button-label']}>Search</span>
        </button>

        <input
          className={css['searchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
