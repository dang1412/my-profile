
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const avatarUrl = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=128&q=80";
// You can change to your headshot later!

const ProfileCard = () => (
  <section className="relative bg-white/80 shadow-xl rounded-2xl px-6 py-8 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
    <div className="flex flex-col items-center gap-4">
      <img src={avatarUrl} alt="Avatar" className="w-28 h-28 rounded-full object-cover border-4 border-primary shadow-lg" />
      <h1 className="text-3xl font-bold mt-2">Your Name</h1>
      <h2 className="text-lg font-semibold text-primary">Your Professional Title</h2>
      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
        <MapPin size={16} className="text-primary" />
        <span>City, Country</span>
      </div>
      <p className="text-md text-gray-700 mt-3 max-w-xl text-center">
        A short bio introducing yourself, your skills, passions, or what you’re looking for. Make your impact in two lines!
      </p>
      <div className="flex gap-4 mt-2">
        <a href="mailto:hello@example.com" className="hover-scale p-2 rounded-full bg-gray-100 hover:bg-primary/10 transition" title="Email">
          <Mail size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-scale p-2 rounded-full bg-gray-100 hover:bg-primary/10 transition" title="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover-scale p-2 rounded-full bg-gray-100 hover:bg-primary/10 transition" title="GitHub">
          <Github size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default ProfileCard;
