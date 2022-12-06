import React from 'react'
import styles from './search.module.css'
import searchIcon from '../../../assets/imgs/search-icon.svg';

function SearchBar() {
  console.log(styles);
  return (
    <div className={styles['search-Bar']}>
      <input type="text" placeholder="Search"/>
      <img className={styles['search-icon']} src={searchIcon} alt='searchIcon' />
    </div>
  )
}

export default SearchBar