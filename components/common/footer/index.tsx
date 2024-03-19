import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '/public/assets/footer.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Image src={Logo} alt="Wonders Cup 💓" className={styles.logo} />
    </div>
  );
};

export default Footer;
