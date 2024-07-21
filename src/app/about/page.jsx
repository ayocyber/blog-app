import Image from "next/image"
import styles from "./about.module.css"



const AboutPage = () => {

  return (
    <div className={styles.container}>
        <div className={styles.words}>
            <h3>About Agency</h3>
            <h1>We Create digital ideas that are bigger, bolder, braver and better.</h1>
            <p>We create digital ideas that are bigger, bolder, breaver and better. we believe in good ideas flexibillity and precission 
                We're world's Our Special Team best consulting & finance solutiom provider.
                wide range of web and software development services.
            </p>
            <div className={styles.num}>
                <div>
                    <h2>10 k+</h2>
                    <span>Years of experience</span>
                </div>
                <div>
                    <h2>234 k+</h2>
                    <p>project reached</p>
                </div>
                <div>
                    <h2>5 k+</h2>
                    <p>Service and plugins</p>
                </div>
            </div>
        </div>
        <div className="about">
        <img src="./abouts_img.jpg" className="fuck "/>
        </div>
       
    </div>
  )
}

export default AboutPage
