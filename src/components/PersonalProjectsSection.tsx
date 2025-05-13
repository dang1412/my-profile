
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "My Portfolio Website",
    description: "A fullstack personal website built with React, Tailwind CSS, and Supabase for showcasing my work and blog posts.",
    url: "https://yourportfolio.example.com"
  },
  {
    name: "Open Source Contribution",
    description: "Contributed to a popular GitHub repo by fixing bugs and adding new features.",
    url: "https://github.com/yourusername/awesome-project"
  },
];

const PersonalProjectsSection = () => (
  <section className="bg-white/80 rounded-xl shadow-md px-6 py-6 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
    <h3 className="text-2xl font-bold mb-4">Personal Projects</h3>
    <ul className="space-y-5">
      {projects.map((project, idx) => (
        <li key={idx} className="border-b last:border-b-0 pb-4 last:pb-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <span className="text-lg font-semibold">{project.name}</span>
              <p className="text-gray-700">{project.description}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline font-medium mt-1 md:mt-0"
            >
              Visit <ExternalLink className="inline" size={18} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default PersonalProjectsSection;
