import React from 'react'
import styles from './search.module.css'
function SearchBar() {
  return (
    <div className={styles['search-Bar']}>
      <input type="text" placeholder="Search"/>
    </div>
  )
}

export default SearchBar