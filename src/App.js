import Button from "./Button"
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.tite}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
