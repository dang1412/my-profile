
import { GraduationCap } from "lucide-react";

const educationList = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Prestigious University",
    period: "2016 – 2020",
  },
];

const EducationSection = () => (
  <section className="bg-white/80 rounded-xl shadow-md px-6 py-6 mb-12 font-inter max-w-3xl mx-auto animate-fade-in">
    <div className="flex items-center gap-2 mb-4">
      <GraduationCap className="text-primary" size={22} />
      <h3 className="text-2xl font-bold">Education</h3>
    </div>
    <ul>
      {educationList.map((edu, idx) => (
        <li key={idx} className="mb-4">
          <div className="flex justify-between gap-2">
            <span className="text-lg font-semibold">{edu.degree}</span>
            <span className="text-sm text-gray-600">{edu.period}</span>
          </div>
          <div className="text-gray-700">{edu.school}</div>
        </li>
      ))}
    </ul>
  </section>
);

export default EducationSection;
