import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/assets/logo_navbar.webp';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_logo}>
        <Link href={'/'}>
          <Image src={Logo} alt="Wonders Cup" width={338} height={447} className={styles.logo} />
        </Link>
      </div>
      <Link href={'/sobre'} className={styles.link}>
        <p className={styles.title}>Sobre Wonders Cup</p>
      </Link>
      <Link href={'/acais'} className={styles.link}>
        {' '}
        <p className={styles.title}>Açaís</p>
      </Link>
    </div>
  );
};

export default Navbar;
