import styles from './styles.module.scss';
import Image from 'next/image';
import Logo from '/public/assets/footer.png';
import Cup from '/public/assets/cup.png';
import Candy from '/public/assets/candy.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Image src={Cup} alt="Copo fofo 💓" className={styles.cup} />
      <Image src={Logo} alt="Wonders Cup 💓" className={styles.logo} />
      <Image src={Candy} alt="Doces 💓" className={styles.candy} />
    </div>
  );
};

export default Footer;
