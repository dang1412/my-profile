
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Markdown from 'react-markdown'

const avatarUrl = "https://lh3.googleusercontent.com/a/ACg8ocJfAP5XZcfifLDHZL3tJpa__BJaKOEFGjWK6i_fwFYdPhEcnvtv=s96-c";
// You can change to your headshot later!

const ProfileCard = () => (
  <section className="relative bg-white/80 shadow-xl rounded-2xl px-6 py-8 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
    <div className="flex flex-col items-center gap-4">
      <img src={avatarUrl} alt="Avatar" className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-lg" />
      <h1 className="text-3xl font-bold mt-2">Dang Thanh Tung</h1>
      <h2 className="text-lg font-semibold text-primary">AI/Web3 Developer</h2>
      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
        <MapPin size={16} className="text-primary" />
        <span>Hanoi, Vietnam</span>
      </div>
      <p className="text-md text-gray-700 mt-3 max-w-xl text-center">
        {/* A short bio introducing yourself, your skills, passions, or what you’re looking for. Make your impact in two lines! */}
        <Markdown>
        9+ years experience as a developer, **creative** problems solver with **well structure** and **high performance** focusing mindset.
        Possess fundamental knowledge about AI/Blockchain, proven track records in *Algorithm, React, D3.js, Typescript, Go, Python, Solidity, Rust*, and more.
  </Markdown>
      </p>
      <div className="flex gap-4 mt-2">
        <a href="mailto:dttung1412@gmail.com" className="hover-scale p-2 rounded-full bg-gray-100 hover:bg-primary/10 transition" title="Email">
          <Mail size={20} />
        </a>
        <a href="https://www.linkedin.com/in/dang-thanh-tung-60157035/" target="_blank" rel="noopener noreferrer" className="hover-scale p-2 rounded-full bg-gray-100 hover:bg-primary/10 transition" title="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/dang1412" target="_blank" rel="noopener noreferrer" className="hover-scale p-2 rounded-full bg-gray-100 hover:bg-primary/10 transition" title="GitHub">
          <Github size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default ProfileCard;
