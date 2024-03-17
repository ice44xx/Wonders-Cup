import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.container_content}>
          <p className={styles.title}>Página não encontrada</p>
          <p className={styles.desc}>Desculpe, a página que você está procurando não existe.</p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
