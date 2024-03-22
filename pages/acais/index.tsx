import Image from 'next/image';
import styles from './styles.module.scss';
import Acai350 from '/public/acai/acai300.png';
import Acai550 from '/public/acai/acai500.png';
import Acai750 from '/public/acai/acai700.png';
import Amendoim from '/public/complementos/amendoim.png';
import Banana from '/public/complementos/banana.png';
import Bis from '/public/complementos/bis.png';
import Chocoball from '/public/complementos/chocoball.png';
import Coco from '/public/complementos/coco.png';
import Avela from '/public/complementos/creme_de_avela.png';
import Ninho from '/public/complementos/creme_ninho.png';
import Gotas from '/public/complementos/gotas.png';
import Granola from '/public/complementos/granola.png';
import Granulado from '/public/complementos/granulado.png';
import Kitkat from '/public/complementos/kitkat.png';
import Leite from '/public/complementos/leite.png';
import Leite_po from '/public/complementos/leite_po.png';
import Mms from '/public/complementos/mms.png';
import Morango from '/public/complementos/morango.png';
import Nutella from '/public/complementos/nutella.png';
import Oreo from '/public/complementos/oreo.png';
import Ovomaltine from '/public/complementos/ovomaltine.png';
import Pacoca from '/public/complementos/pacoca.png';
import Sucrilhos from '/public/complementos/sucri.png';
import Co_cho from '/public/complementos/co_cho.png';
import Co_m from '/public/complementos/co_m.png';
import Arrow from '/public/assets/arrow.png';

const complementos = [
  Amendoim,
  Banana,
  Bis,
  Chocoball,
  Coco,
  Avela,
  Ninho,
  Gotas,
  Granola,
  Granulado,
  Kitkat,
  Leite,
  Leite_po,
  Mms,
  Morango,
  Nutella,
  Oreo,
  Ovomaltine,
  Pacoca,
  Sucrilhos,
  Co_cho,
  Co_m,
];
const acais = [
  { image: Acai350, name: 'Açaí 350ml' },
  { image: Acai550, name: 'Açaí 550ml' },
  { image: Acai750, name: 'Açaí 750ml' },
];

const Acais = () => {
  return (
    <div className={styles.container}>
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
          {complementos.map((complemento, index) => (
            <div key={index} className={styles.container_comple}>
              <Image src={complemento} alt="Complementos" className={styles.comple} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acais;
