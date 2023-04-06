import Title from "../../components/Title/Title"
import HardSkills from "../../components/HardSkills/HardSkills"
import Projects from "../../components/Projects/Projects"

function Home() {
  return (
    <main className="main">
      <div className="section-title">
        <Title />
      </div>
      <div className="section-hardSkills">
        <HardSkills />
      </div>
      <div className="section-projects">
        <Projects />
      </div>
    </main>
  )
}

export default Home