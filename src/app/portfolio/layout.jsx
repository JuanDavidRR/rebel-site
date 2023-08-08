import React from 'react'
import styles from './page.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <h2 className={styles.mainTitle}>Our Work</h2>
        {children}
    </div>
  )
}

export default Layout