import Image from 'next/image';
import styles from './styles.module.scss';
import Acai350 from '/public/acai/acai300.webp';
import Acai550 from '/public/acai/acai500.webp';
import Acai750 from '/public/acai/acai700.webp';
import Amendoim from '/public/complementos/amendoim.webp';
import Banana from '/public/complementos/banana.webp';
import Bis from '/public/complementos/bis.webp';
import Chocoball from '/public/complementos/chocoball.webp';
import Coco from '/public/complementos/coco.webp';
import Avela from '/public/complementos/creme_de_avela.webp';
import Ninho from '/public/complementos/creme_ninho.webp';
import Gotas from '/public/complementos/gotas.webp';
import Granola from '/public/complementos/granola.webp';
import Granulado from '/public/complementos/granulado.webp';
import Kitkat from '/public/complementos/kitkat.webp';
import Leite from '/public/complementos/leite.webp';
import Leite_po from '/public/complementos/leite_po.webp';
import Mms from '/public/complementos/mms.webp';
import Morango from '/public/complementos/morango.webp';
import Nutella from '/public/complementos/nutella.webp';
import Oreo from '/public/complementos/oreo.webp';
import Ovomaltine from '/public/complementos/ovomaltine.webp';
import Pacoca from '/public/complementos/pacoca.webp';
import Sucrilhos from '/public/complementos/sucri.webp';
import Co_cho from '/public/complementos/co_cho.webp';
import Co_m from '/public/complementos/co_m.webp';
import Arrow from '/public/assets/arrow.webp';

const complementos = [
  { image: Amendoim, name: 'Amendoim Granulado' },
  { image: Banana, name: 'Banana' },
  { image: Bis, name: 'Bis' },
  { image: Chocoball, name: 'Chocoball' },
  { image: Coco, name: 'Coco Ralado' },
  { image: Avela, name: 'Avelã' },
  { image: Ninho, name: 'Leite ninho' },
  { image: Gotas, name: 'Gotas de Chocolate' },
  { image: Granola, name: 'Granola' },
  { image: Granulado, name: 'Granulado' },
  { image: Kitkat, name: 'Kitkat' },
  { image: Leite, name: 'Leite' },
  { image: Leite_po, name: 'Leite em Pó' },
  { image: Mms, name: 'M&Ms' },
  { image: Morango, name: 'Morango' },
  { image: Nutella, name: 'Nutella' },
  { image: Oreo, name: 'Oreo' },
  { image: Ovomaltine, name: 'Ovomaltine' },
  { image: Pacoca, name: 'Paçoca' },
  { image: Sucrilhos, name: 'Sucrilhos' },
  { image: Co_cho, name: 'Cobertura de Chocolate' },
  { image: Co_m, name: 'Cobertura de Morango ' },
];
const acais = [
  { image: Acai350, name: 'Açaí 350ml' },
  { image: Acai550, name: 'Açaí 550ml' },
  { image: Acai750, name: 'Açaí 750ml' },
];

const Acais = () => {
  return (
    <main className={styles.container}>
      <div className={styles.container_acais}>
        {acais.map((acai, index) => (
          <div key={index}>
            <p className={styles.name}>{acai.name}</p>
            <Image src={Arrow} alt="Flecha" className={styles.arrow} />
            <Image src={acai.image} alt={acai.name} className={styles.acais} />
          </div>
        ))}
      </div>
      <div className={styles.container_complement}>
        <p className={styles.title}>Complementos para seu Açaí 💕</p>
        <div className={styles.container_flex}>
          {complementos.map((complement, index) => (
            <div key={index} className={styles.container_comple}>
              <Image src={complement.image} alt={complement.name} className={styles.comple} data-toggle="tooltip" title={complement.name} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Acais;
