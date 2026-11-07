import { ChevronUp } from 'lucide-react';
export default function Footer({ go }) {
  return (
    <footer><span>© {new Date().getFullYear()} Ankit Sahu</span><span>Designed & built with care.</span><button onClick={() => go('home')} aria-label="Back to top"><ChevronUp size={18} /></button></footer>
  );
}
