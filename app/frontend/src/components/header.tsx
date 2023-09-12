import Link from 'next/link';
import logo from '../public/3.png';
import Image from 'next/image';
import styles from '../styles/header.module.css';

export default function  Header() {
  return (
    <header className={styles.header}>
      <div className="logo">
      <Image
          src="/3.jpg"
          alt="Logo"
          width={80}
            height={80}
          priority
        />
      </div>
      <div className={styles.navbar}>
        <Link href="/"><p>Sobre Nós</p></Link>
        <Link href="/pagina2"><p>F.A.Q.</p></Link>
        <Link href="/pagina3"><p>Contato</p></Link>
      </div>
    </header>
  );
};
