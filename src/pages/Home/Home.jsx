import Title from "../../components/Title/Title"
import HardSkills from "../../components/HardSkills/HardSkills"
import Projects from "../../components/Projects/Projects"
import Collapse from "../../components/Collapse/Collapse"
import bkgrImage from "../../assets/sky-view.jpg"
//import bkgrImage from "../../assets/red-wall.jpg"

function Home() {
  return (
    <main className="main">
      <div className="section-neon">
      <img src={bkgrImage} alt="ciel"/> 
        <div className="section-title">
          <Title />
        </div>
        <div className="section-hardSkills">
          <HardSkills />
        </div>
      </div>
        <div className="collapse-section">
          <Collapse />
        </div>
        <div className="section-projects">
          <Projects />
        </div>
    </main>
  )
}

export default Home




