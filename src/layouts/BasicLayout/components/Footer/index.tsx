import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>Intchains</span>
      <p />
      <span className={styles.copyright}>© 2017-2021 上海聪链科技有限公司</span>
    </p>
  );
}
