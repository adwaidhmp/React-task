import "./external.css"
import logo from './logo.svg';
import styles from './mod.module.css'
function MyComponent() {
  return (
    <div style={{ color: "white", backgroundColor: "black", padding: "50px" }}>
      Inline css
      <div className="external"> 
        External css
      </div>
      <div className={styles.bg}>
        <h1 className={styles.hd}>Modules css</h1></div>
        <img src={logo} alt="img" className={styles.img}/>
        <button className="btn">Click</button>
    </div>
    
  );
}

export default MyComponent
