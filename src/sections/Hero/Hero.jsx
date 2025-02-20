import heroImg2 from '../../assets/hero-img2.jpg';
import styles from '../Hero/HeroStyles.module.css';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedindark from '../../assets/linkedin-dark.svg';



const Hero = () => { 
    const {theme, toggleTheme} = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon; 
    const twitterIcon = theme === 'light' ? twitterLight: 
    twitterDark; 
    const githubIcon = theme === 'light' ? githubLight: githubDark; 
    const linkedinIcon = theme === 'light' ? linkedinLight: linkedindark; 



  return (
    <section id='hero' className={styles.container}  >
        <div className={styles.colorModeContainer}> 
            <img id={styles.profImg} className={styles.hero}
          src={heroImg2} 
         alt="Profile picture of SkHarry"/>
         <img  
         className={styles.colorMode}
         src={themeIcon}
         alt="Color mode icon" 
         onClick={toggleTheme}
         />
         
         </div>
         <div className={styles.info}>
            <h1>
                Sunkanmi 
                <br />
                Harry
            </h1>
            <h2>Fullstack Developer</h2>
            <span>
                <a href="https://twitter.com/" target='_blank'>
                <img src={twitterIcon} alt="Twitter icon"/>
                </a>

                <a href="https://github.com/devskharry3/Software-development-.git" target='_blank'>
                <img src={githubIcon} alt="github icon"/>
                </a>
                <a href="https://Linkedin.com/" target='_blank'>
                <img src={linkedinIcon} alt="Linkedin icon"/>
                </a>
            </span> 
            <p className={styles.description}>
                with a passion for developing modern React,Shopify and Wordpress web 
                apps for commercial businesses
            </p>
            <a href={CV}  download>
                <button className='hover' >
                    Resume
                    </button>
            </a>

         </div>
    </section>
  )
}

export default Hero