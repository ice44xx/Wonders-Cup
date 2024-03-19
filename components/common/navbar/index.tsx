import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '@/public/assets/logo_navbar.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_logo}>
        <Image src={Logo} alt="Wonders Cup" width={338} height={447} className={styles.logo} />
      </div>
      <p className={styles.title}>Sobre Wonders Cup</p>
      <p className={styles.title}>Açaís</p>
      <p className={styles.title}>Combos</p>
      <p className={styles.title}>Delícia no pote</p>
      <p className={styles.title}>Contato</p>
    </div>
  );
};

export default Navbar;
