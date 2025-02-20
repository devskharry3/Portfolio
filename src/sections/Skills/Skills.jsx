import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skils</h1> 
        <div className={styles.skillList}> 
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="Javascript"/>
            <SkillList src={checkMarkIcon} skill="Typescript"/>
            <SkillList src={checkMarkIcon} skill="NodeJs"/>
        </div>
        <hr />
        <div className={styles.skillList}> 
    <SkillList src={checkMarkIcon} skill="React"/>
    <SkillList src={checkMarkIcon} skill="TailwindCss"/>
    <SkillList src={checkMarkIcon} skill="WordPress"/>
    <SkillList src={checkMarkIcon} skill="Shopify"/>
    <SkillList src={checkMarkIcon} skill="Git"/>
</div>

    </section>
  )
}

export default Skills