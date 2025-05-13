
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { ChartPie } from "lucide-react";

// Skills data with years of experience
const skills = [
  { name: "React", years: 4 },
  { name: "TypeScript", years: 3 },
  { name: "Tailwind CSS", years: 2 },
  { name: "Node.js", years: 3 },
  { name: "UI/UX", years: 2 },
  { name: "Figma", years: 2 },
  { name: "Testing Library", years: 1 },
  { name: "APIs", years: 3 },
];

// Color palette for the pie chart slices
const COLORS = [
  "#9b87f5", // Primary Purple
  "#7E69AB", // Secondary Purple
  "#D6BCFA", // Light Purple
  "#0EA5E9", // Ocean Blue
  "#F97316", // Bright Orange
  "#FEC6A1", // Soft Orange
  "#33C3F0", // Sky Blue
  "#FFDEE2", // Soft Pink
];

const SkillsSection = () => (
  <section className="bg-white/80 rounded-xl shadow-md px-6 py-6 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
      <ChartPie className="text-primary" size={28} />
      Skills
    </h3>
    <div className="flex flex-wrap gap-3 mb-6">
      {skills.map((skill, i) => (
        <span
          key={skill.name}
          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm hover:bg-primary/20 transition"
        >
          {skill.name}
          <span className="bg-primary/10 text-xs text-primary px-2 py-0.5 rounded-full ml-1 font-normal border border-primary/20">
            {skill.years}y
          </span>
        </span>
      ))}
    </div>
    <div className="w-full md:max-w-lg mx-auto">
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={skills}
            dataKey="years"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
          >
            {skills.map((entry, idx) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number, name: string) => [`${value} years`, name]} />
          <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 text-center text-xs text-muted-foreground">
        Years of experience by skill
      </div>
    </div>
  </section>
);

export default SkillsSection;

