import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Ifood from '/public/assets/ifood.png';

const Widget = () => {
  return (
    <Link
      href={
        'https://www.ifood.com.br/delivery/porto-alegre-rs/wonders-cup-cafeteria-e-acaiteria-cristal/37bf0085-15ab-4830-8fbe-6dd1c436d4b1'
      }
      target="_blank"
    >
      <div className={styles.container}>
        <Image src={Ifood} alt="Wonders Cup - ifood" width={100} height={55} className={styles.icon} />
      </div>
    </Link>
  );
};

export default Widget;
