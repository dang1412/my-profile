
const skills = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX", "Figma", "Testing Library", "APIs"
];

const SkillsSection = () => (
  <section className="bg-white/80 rounded-xl shadow-md px-6 py-6 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
    <h3 className="text-2xl font-bold mb-4">Skills</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium transition hover:bg-primary/20 shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default SkillsSection;
