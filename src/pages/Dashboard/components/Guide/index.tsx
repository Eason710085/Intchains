import * as React from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>后台仓库管理平台</h1>
      <h3 className={styles.description}>上海聪链科技有限公司</h3>
      <div className={styles.action}>
        <a
          href="https://www.intchains.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 20,
          }}
        >
          <Button type="primary" size="large">
            公司官网
          </Button>
        </a>
        <a
          href="https://www.goldshell.com/zh/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="primary" size="large">
            产品官网
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Guide;
