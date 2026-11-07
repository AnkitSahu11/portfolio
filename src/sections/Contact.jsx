import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import SectionHead from '../components/SectionHead';
import { profile } from '../data/portfolio';
export default function Contact() {
  return (
    <section id="contact" className="section-block content-section contact-section">
      <SectionHead number="07" title="Let's work together" subtitle="Have an opportunity or a project in mind? I'd be happy to connect." />
      <div className="contact-panel">
        <div><p className="eyebrow">GET IN TOUCH</p><h3>Let's build something<br /><span className="gradient-text">meaningful.</span></h3><p className="body-copy">I'm open to discussing internships, entry-level opportunities and interesting development projects.</p></div>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={18} /><span>{profile.email}</span><ArrowRight size={16} /></a>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><MessageCircle size={18} /><span>{profile.phone}</span><ArrowRight size={16} /></a>
          <p className="small-note">The email link opens your default mail application.</p>
        </div>
      </div>
    </section>
  );
}
