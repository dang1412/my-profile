
import { BriefcaseBusiness } from "lucide-react";

const experiences = [
  {
    jobTitle: "Senior Software Engineer",
    company: "GreatCompany Inc.",
    location: "San Francisco, CA",
    period: "2022 – Present",
    description: "Lead development on core products, mentoring junior engineers and ensuring code quality across the team.",
  },
  {
    jobTitle: "Frontend Developer",
    company: "CoolStartup",
    location: "Remote",
    period: "2020 – 2022",
    description: "Built beautiful UIs with React and Tailwind; collaborated closely with designers and product managers.",
  },
];

const ExperienceSection = () => (
  <section className="bg-white/80 rounded-xl shadow-md px-6 py-6 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
    <div className="flex items-center mb-4 gap-2">
      <BriefcaseBusiness className="text-primary" size={22} />
      <h3 className="text-2xl font-bold">Experience</h3>
    </div>
    <ol className="relative border-l-2 border-primary/30 pl-7">
      {experiences.map((exp, idx) => (
        <li key={idx} className="mb-8">
          <div className="absolute -left-4 w-7 h-7 flex items-center justify-center bg-primary/90 rounded-full shadow">
            <BriefcaseBusiness size={18} className="text-white" />
          </div>
          <div className="ml-1">
            <div className="flex justify-between gap-4 flex-col sm:flex-row">
              <span className="text-lg font-semibold">{exp.jobTitle}</span>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <span className="text-sm text-gray-700">{exp.company} — {exp.location}</span>
            <p className="text-gray-600 mt-2">{exp.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default ExperienceSection;
