import SectionHead from '../components/SectionHead';
import { skillGroups } from '../data/portfolio';
export default function Skills() {
  return (
    <section id="skills" className="section-block content-section">
      <SectionHead number="03" title="Technical skills" subtitle="Tools and technologies I use to bring ideas to life." />
      <div className="skills-grid">{skillGroups.map((group, index) => (
        <div className="skill-card" key={group.title}><span className="skill-index">0{index + 1}</span><h3>{group.title}</h3><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>
      ))}</div>
    </section>
  );
}
