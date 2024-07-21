import Image from "next/image"
import styles from "./homepage.module.css"

const Home= ()=>{
 return(
    <div className={styles.homepage}>
      <div className={styles.title}>
        <h1>Creative Thoughts Agency.</h1>
        <p>Lorem, ipsum dolor sit amet consectur adipiscing elit. veron blandtils adipiscing mininam recinendis a autem assumenda dolere </p>
        <div className="button">
          <button className={styles.learn}>Learn More</button>
          <button className={styles.contact}>Contact</button>
        </div>
        <div className={styles.logo}>
          <img src="./discrod.png" className={styles.discord} />
          <img src="./twitch.png" className={styles.twitch}/>
          <img  src="./viber.png" className={styles.viber}/>
        </div>
      </div>
      <div >
        <img className={styles.hero} src="./test.jpg"/>
      </div>
      

    </div>
 )  
}
export default Home
