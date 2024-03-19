import styles from './styles.module.scss';
import React from 'react';
import Background_two from '/public/assets/background_two.jpg';
import Background_third from '/public/assets/background_third.jpeg';
import Background_four from '/public/assets/background_four.png';
import Background_five from '/public/assets/background_five.jpg';
import Background_six from '/public/assets/background_six.png';
import Row_purple from '/public/assets/row_purple.png';
import Row_pink from '/public/assets/row.png';
import Row_blue from '/public/assets/row_blue.png';
import Row_yellow from '/public/assets/row_yellow.png';
import Row_brown from '/public/assets/row_brown.png';
import Acai from '/public/acai/acai.png';
import Combo from '/public/acai/combo.png';
import Barca from '/public/acai/barca.png';
import Cafe from '/public/acai/cafe.png';
import Bolo from '/public/assets/bolo_de_pote.png';
import BootstrapCarousel from '@/components/common/carousel';

const HomePage = () => {
  const items = [
    {
      src: Acai.src,
      background: Background_two.src,
      altText: 'Combinações',
      backgroundColor: '#e64e74',
      rowColor: Row_pink.src,
      width: 358,
      height: 436,
      title: 'Combinações',
      desc: 'Desfrute de uma experiência completa de sabor de açaí. Foi cuidadosamente elaborado para satisfazer todos os seus desejos de uma sobremesa refrescante.',
    },
    {
      src: Combo.src,
      background: Background_four.src,
      altText: 'Combos',
      backgroundColor: '#8dcff4',
      rowColor: Row_blue.src,
      width: 358,
      height: 436,
      title: 'Combos',
      desc: 'Prepare-se para uma festa de sabores com o Combo de Açaí para Compartilhar, projetado para duas ou mais pessoas desfrutarem juntas. ',
    },
    {
      src: Barca.src,
      background: Background_third.src,
      altText: 'Barcas',
      backgroundColor: '#a74cf1',
      rowColor: Row_purple.src,
      width: 492,
      height: 488,
      title: 'Barcas',
      desc: 'Embarque em uma jornada sensorial com uma barca de açaí, uma explosão de sabores tropicais que vai transportá-lo para praias ensolaradas e brisas refrescantes.',
    },
    {
      src: Cafe.src,
      background: Background_five.src,
      altText: 'Cafés',
      backgroundColor: '#463431',
      rowColor: Row_brown.src,
      width: 420,
      height: 490,
      title: 'Cafés',
      desc: 'Imagine-se envolvido em um abraço caloroso enquanto desfruta de uma copo de café com chantilly. O aroma tentador do café recém-preparado flutua pelo ar, despertando seus sentidos e antecipando o prazer que está por vir.',
    },
    {
      src: Bolo.src,
      background: Background_six.src,
      altText: 'Bolo de Pote',
      backgroundColor: '#e1c07f',
      rowColor: Row_yellow.src,
      width: 420,
      height: 490,
      title: 'Bolo de Pote',
      desc: 'Este bolo de pote é uma explosão de sabor que irá encantar os seus sentidos. Imagine-se mergulhando a colher em camadas suaves e sedosas de bolo de baunilha, onde cada pedaço é envolvido em uma doçura irresistível.',
    },
  ];

  return (
    <div className={styles.container}>
      <BootstrapCarousel items={items} />
    </div>
  );
};

export default HomePage;
