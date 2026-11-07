import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
export default function Connect() {
  return (
    <section id="connect" className="section-block connect-section">
      <div><p className="eyebrow">ELSEWHERE ON THE INTERNET</p><h2>Find me <span className="gradient-text">online.</span></h2></div>
      <div className="social-links">
        <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub <ExternalLink size={14} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn <ExternalLink size={14} /></a>
        <a href={`mailto:${profile.email}`}><Mail /> Email <ExternalLink size={14} /></a>
      </div>
    </section>
  );
}
