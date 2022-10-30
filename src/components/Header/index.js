import React from 'react'
import styles from './header.module.css';
import Logo from '../../assets/imgs/logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles['header-logo']} src={Logo} alt='Logo' />
    </div>
  )
}

export default Header