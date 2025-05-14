
import { useState } from "react";
import { BriefcaseBusiness, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
import { Button } from "./ui/button";

// Update structure: experiences -> projects under each company
const experiences = [
  {
    jobTitle: "Senior Software Engineer",
    company: "GreatCompany Inc.",
    location: "San Francisco, CA",
    period: "2022 – Present",
    description: "Lead development on core products, mentoring junior engineers and ensuring code quality across the team.",
    projects: [
      {
        name: "Core Platform",
        short: "Developed scalable features and microservices affecting thousands of users.",
        details:
          "Designed and implemented major architectural updates, such as migration to a microservices infrastructure, CI/CD pipeline automation, and advanced monitoring tools integration. Coordinated with backend, frontend, and DevOps teams.",
      },
      {
        name: "Onboarding Redesign",
        short: "Revamped onboarding flows to improve user activation by 30%.",
        details:
          "Worked closely with designers and product managers to create accessible onboarding UIs, led user testing sessions, and improved reporting metrics. Oversaw QA and feedback cycles.",
      },
    ],
  },
  {
    jobTitle: "Frontend Developer",
    company: "CoolStartup",
    location: "Remote",
    period: "2020 – 2022",
    description: "Built beautiful UIs with React and Tailwind; collaborated closely with designers and product managers.",
    projects: [
      {
        name: "Customer Dashboard",
        short: "Built the dashboard for customers to manage their accounts and analytics.",
        details:
          "Implemented data visualization using Recharts, built custom reporting tables, and introduced performance optimizations resulting in faster load times. Collaborated on responsive design and accessibility improvements.",
      },
      {
        name: "Design System",
        short: "Created and documented UI components for consistent design.",
        details:
          "Developed a reusable library of UI elements leveraging Tailwind CSS and shadcn/ui. Wrote documentation and set up Storybook for the design team.",
      },
    ],
  },
];

const ExperienceSection = () => {
  // Manage expanded state for projects as a dictionary of companyIdx-projectIdx
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});

  const toggleProject = (companyIdx: number, projectIdx: number) => {
    const key = `${companyIdx}-${projectIdx}`;
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="bg-white/80 rounded-xl shadow-md px-6 py-6 mb-8 font-inter max-w-3xl mx-auto animate-fade-in">
      <div className="flex items-center mb-4 gap-2">
        <BriefcaseBusiness className="text-primary" size={22} />
        <h3 className="text-2xl font-bold">Experience</h3>
      </div>
      <ol className="relative border-l-2 border-primary/30 pl-7">
        {experiences.map((exp, companyIdx) => (
          <li key={companyIdx} className="mb-10">
            <div className="absolute -left-4 w-7 h-7 flex items-center justify-center bg-primary/90 rounded-full shadow">
              <BriefcaseBusiness size={18} className="text-white" />
            </div>
            <div className="ml-1">
              <div className="flex justify-between gap-4 flex-col sm:flex-row">
                <span className="text-lg font-semibold">{exp.jobTitle}</span>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <span className="text-sm text-gray-700">
                {exp.company} — {exp.location}
              </span>
              <p className="text-gray-600 mt-2 mb-3">{exp.description}</p>
              {/* List projects */}
              <div className="space-y-4">
                {exp.projects.map((proj, projectIdx) => {
                  const expanded = !!expandedProjects[`${companyIdx}-${projectIdx}`];
                  return (
                    <Collapsible key={projectIdx} open={expanded}>
                      <div className="bg-primary/5 border border-primary/10 rounded-lg px-4 py-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-medium text-primary">{proj.name}</div>
                            <div className="text-sm text-gray-700 mt-0.5">{proj.short}</div>
                          </div>
                          <CollapsibleTrigger asChild>
                            <Button
                              size="sm"
                              variant="ghost"
                              aria-expanded={expanded}
                              className="flex items-center gap-1 ml-2 self-start mt-1"
                              onClick={() => toggleProject(companyIdx, projectIdx)}
                            >
                              {expanded ? (
                                <>
                                  Hide Details
                                  <ChevronUp className="ml-1" size={16} />
                                </>
                              ) : (
                                <>
                                  Show More
                                  <ChevronDown className="ml-1" size={16} />
                                </>
                              )}
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent>
                          <div className="mt-3 pl-1 text-sm text-gray-600 border-l-2 border-primary/20">
                            {proj.details}
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  );
                })}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;
