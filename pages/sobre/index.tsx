import styles from './styles.module.scss';

const About = () => {
  return (
    <main className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.container_left}>
          <p className={styles.title}>Por que Wonders Cup?</p>
          <p className={styles.desc}>
            Na Wonders Cup, oferecemos uma ampla variedade de produtos que combinam o melhor dos dois mundos: açaí e café. Desde tigelas
            refrescantes de açaí até cafés artesanais cuidadosamente preparados, temos algo para todos os gostos e ocasiões.
          </p>
        </div>
        <div className={styles.container_right}>
          <p className={styles.title}>Qualidade Superior</p>
          <p className={styles.desc}>
            Nosso compromisso com a qualidade é evidente em cada aspecto de nossos produtos. Usamos ingredientes frescos e selecionados para
            garantir que cada tigela de açaí e xícara de café atenda aos mais altos padrões de sabor e frescor.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
