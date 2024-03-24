import Image from 'next/image';
import Background_strawberries from '/public/assets/background_two.webp';
import Background_cup_acai from '/public/assets/background_third.webp';
import Background_acai from '/public/assets/background_four.webp';
import Background_coffe from '/public/assets/background_five.webp';
import Background_candy from '/public/assets/background_six.webp';
import Heart from '/public/assets/heart.webp';
import Discount from '/public/assets/discount.webp';
import Acai from '/public/acai/acai.webp';
import Combo from '/public/acai/combo.webp';
import Barca from '/public/acai/barca.webp';
import Cafe from '/public/acai/cafe.webp';
import Bolo from '/public/assets/bolo_de_pote.webp';
import BootstrapCarousel from '@/components/common/carousel';

const HomePage = () => {
  const items = [
    {
      src: Acai.src,
      background: Background_strawberries.src,
      altText: 'Monte do seu Jeito',
      backgroundColor: '#e64e74',
      width: 358,
      height: 436,
      title: (
        <>
          Monte do seu Jeito <Image src={Heart.src} alt="Heart" width={65} height={65} className={'mb-2'} />
        </>
      ),
      desc: 'Desfrute de uma experiência completa de sabor de açaí. Foi cuidadosamente elaborado para satisfazer todos os seus desejos de uma sobremesa refrescante.',
    },
    {
      src: Combo.src,
      background: Background_acai.src,
      altText: 'Combos Incríveis',
      backgroundColor: '#7cb8db',
      width: 358,
      height: 436,
      title: (
        <>
          Combos Incríveis <Image src={Discount.src} alt="Descontos" width={80} height={80} className={'mb-2'} />
        </>
      ),
      desc: 'Prepare-se para uma festa de sabores com o Combo de Açaí para Compartilhar, projetado para duas ou mais pessoas desfrutarem juntas. ',
    },
    {
      src: Barca.src,
      background: Background_cup_acai.src,
      altText: 'Barcas de Açaí',
      backgroundColor: '#7c2ebb',
      width: 492,
      height: 488,
      title: 'Barcas',
      desc: 'Embarque em uma jornada sensorial com uma barca de açaí, uma explosão de sabores tropicais que vai transportá-lo para praias ensolaradas e brisas refrescantes.',
    },
    {
      src: Cafe.src,
      background: Background_coffe.src,
      altText: 'Cafés Gelados',
      backgroundColor: '#4b3632',
      width: 420,
      height: 490,
      title: 'Cafés Gelados',
      desc: 'Imagine-se envolvido em um abraço caloroso enquanto desfruta de uma copo de café com chantilly. O aroma tentador do café recém-preparado flutua pelo ar.',
    },
    {
      src: Bolo.src,
      background: Background_candy.src,
      altText: 'Delícias no Pote',
      backgroundColor: '#bd9d5e',
      width: 420,
      height: 490,
      title: 'Delícias no Pote',
      desc: 'Delícias no pote é uma explosão de sabor que irá encantar os seus sentidos. Imagine-se mergulhando a colher em camadas suaves e sedosas de uma doçura irresistível.',
    },
  ];

  return <BootstrapCarousel items={items} />;
};

export default HomePage;
