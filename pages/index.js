import styles from '../styles/Home.module.css'
import Header from "./components/Header";
import Form from "./components/Form";

export default function Home() {

  return (
    <div className={styles.page}>
      <Header/>
      <Form/>
    </div>
  );
}
