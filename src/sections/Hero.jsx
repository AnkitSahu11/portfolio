import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero({ go }) {
  return (
    <section id="home" className="hero section-block">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow">HELLO, WORLD <span>—</span> WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm<br /><span className="gradient-text">Ankit Sahu</span></h1>
        <h2>MERN Stack Developer <span className="muted">&amp; Aspiring Software Engineer</span></h2>
        <p className="hero-copy">I build scalable, responsive, and user-friendly web applications using modern technologies. Passionate about full-stack development, problem-solving, and creating practical solutions through clean, maintainable code.</p>
        <div className="hero-actions">
          <button className="btn btn-light" onClick={() => go('projects')}>View My Work <ArrowRight size={18} /></button>
          <button className="btn btn-outline" onClick={() => go('contact')}>Get in Touch</button>
        </div>
        <div className="hero-meta"><span><MapPin size={15} /> {profile.location}</span><span><span className="status-dot" /> Open to opportunities</span></div>
      </motion.div>
      <div className="hero-mark" aria-hidden="true"><span>AS</span><i /></div>
      <div className="scroll-cue">SCROLL TO EXPLORE <span /></div>
    </section>
  );
}
