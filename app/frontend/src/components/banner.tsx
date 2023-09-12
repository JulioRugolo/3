import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/banner.module.css';

export default function  Banner() {
  return (
    <div className={styles.banner}>
      <h1 className={styles.h2}>A vaga <span>Junior</span></h1>
      <h2 className={styles.h2}>que você procura!</h2>
    </div>
  );
};
