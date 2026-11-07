import { Award } from 'lucide-react';
import SectionHead from '../components/SectionHead';
import { certifications } from '../data/portfolio';
export default function Certifications() {
  return (
    <section id="certifications" className="section-block content-section">
      <SectionHead number="06" title="Certifications & achievements" subtitle="Courses, learning milestones and participation." />
      <div className="cert-list">{certifications.map((certificate, index) => (
        <div className="cert-row" key={certificate}><span>0{index + 1}</span><p>{certificate}</p><Award size={17} /></div>
      ))}</div>
    </section>
  );
}
