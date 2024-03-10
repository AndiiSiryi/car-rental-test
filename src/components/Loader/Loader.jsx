import { Dna } from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';

export const Loader = () => (
  <div className={styles.loader}>
    <Dna
      visible={true}
      height="44"
      width="44"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);
