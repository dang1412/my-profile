
import { useState } from "react";
import { BriefcaseBusiness, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
import { Button } from "./ui/button";

// Update structure: experiences -> projects under each company
const experiences = [
  {
    jobTitle: "Blockchain Front Engineer",
    company: "Freelance",
    location: "Tokyo/remote",
    period: "2024/6 – Present",
    description: "Lead development on core products, mentoring junior engineers and ensuring code quality across the team.",
    projects: [
      {
        name: "Staking site",
        short: "Maintained staking site for a layer1 project, with multiple validators.",
        details:
          // "Designed and implemented major architectural updates, such as migration to a microservices infrastructure, CI/CD pipeline automation, and advanced monitoring tools integration. Coordinated with backend, frontend, and DevOps teams.",
          `
After receiving a large and poorly structured project, I migrated it from Ethers v5 to Ethers v6, and later to Viem and WalletConnect with WAGMI, significantly reducing and cleaning up the code. The **contract interaction** code became much smaller and more maintainable, with each contract call implemented in its own file using a minimal, relevant ABI, while still remaining type-safe thanks to Viem’s capabilities. This approach was far more efficient than the previous method of creating one service class per contract, relying on the full, bloated ABI and including a lot of unused, auto-generated code with Ethers.
          `
      },
      {
        name: "Indexer for staking app",
        short: "Maintained a subgraph for the staking app with users's staked, unstaked and rewards data.",
        details:
          // "Worked closely with designers and product managers to create accessible onboarding UIs, led user testing sessions, and improved reporting metrics. Oversaw QA and feedback cycles.",
          `
I had to upgrade the subgraph due to a hard fork, which modified the output of some contract functions and events. The challenge was that we needed to reindex from the beginning, and the indexer's handler function had to conditionally process both versions of the event output — before and after the upgrade point — based on the block number. Otherwise, it throws because of decoding failure at a certain point.
          `
      },
      {
        name: "Indexer for bridge statistics",
        short: "Developed a subgraph and frontend app for daily tracking the amount of bridged native token.",
        details:
          // "Worked closely with designers and product managers to create accessible onboarding UIs, led user testing sessions, and improved reporting metrics. Oversaw QA and feedback cycles.",
          `
Daily tracking the amount of tokens flowing in and out across L1 and multiple Layer 2 bridges. The app has charts and time frame filters, is built into a feature of Blockscout Explorer, and is used by the community to track the bridge's performance.
`
      },
      {
        name: "Optimism stack **L1<->L2 bridge**",
        short: "Developed a frontend bridge between L1 and L2 Optimism stack.",
        details:
          `
Viem provides methods to initiate deposits and withdrawals on one layer, as well as observe the corresponding bridge operations performed on the other layer. However, this cannot be applied to our multiple modified Layer 2 versions. After carefully reviewing the contracts and various types of bridge-related events, I finally decided to call the function directly from the appropriate contract. The call itself was straightforward, but it only initiated the bridge operation on one layer. To observe the corresponding operation on the other layer, I manually calculated the **msgHash** based on the initial transaction, and then implemented a listener for the **RelayedMessage** event on the other layer. This approach works for both deposits and withdrawals and both Layer 2 versions.
However, polling for events can be resource-intensive and may occasionally miss messages, it can be more efficient to check for a known transaction directly using its hash — similar to how the Viem method works. I plan to investigate this approach further when I have more time.
`
      },
    ],
  },
  {
    jobTitle: "Database Administrator",
    company: "JAPANNEXT",
    location: "Tokyo, Japan",
    period: "2019/12 – 2024/6",
    description: "Managed and optimized high availability Postgres database systems, ensuring data integrity and performance.",
    projects: [
      {
        name: "Managing multiple Database cluster",
        short: "Managed and optimized 3 nodes high availability Postgres database systems including schema backup, live migration with less or no downtime, tuning query, automating building cluster and daily tasks.",
        details:
          // "Implemented data visualization using Recharts, built custom reporting tables, and introduced performance optimizations resulting in faster load times. Collaborated on responsive design and accessibility improvements.",
          `
Automating daily tasks with Airflow, Cronjob, and Python scripts, monitoring and alerting with Grafana, Google Chat.
I also implemented a custom backup solution using pgBackRest, which allowed us to perform incremental backups and restore to any point in time. This solution reduced our backup window from hours to minutes and improved our recovery time objective (RTO) significantly.
I improved the processes of archiving data and checking consistency with md5 hash, which increased performance and reduced time and resources cost significantly.
I implemented an Unit test environment for the database, which allowed us to test/debug/reproduce far more efficient in a minimal, isolated environment.
I implemented automation for building Postgres database cluster from scratch using Ansible, which allowed us to deploy new database clusters with consistent structure in minutes instead of hours.
          `
      },
      {
        name: "Real-time data synchronization",
        short: "Implemented a real-time data synchronization from MongoDB to ElasticSearch using Kafka.",
        details:
          "I debugged and modified the Kafka open source connector, which was not well documented and had some bugs at that time. I also implemented a custom solution to handle the data transformation and mapping in case of insert, delete, update, nested-update between MongoDB and ElasticSearch, which was not supported by the connector out of the box.",
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    company: "Bitbank",
    location: "Tokyo, Japan",
    period: "2016/3 – 2019/8",
    description: "Building frontend application from scratch with one designer. Collaborated with backend engineers to design and implement RESTful APIs. Participated in code reviews to ensure code quality and knowledge sharing.",
    projects: [
      {
        name: "Trading application",
        short: "Building frontend for crypto trading application including responsive UI, state management, realtime price chart, static build for SEO.",
        details:
          // "Implemented data visualization using Recharts, built custom reporting tables, and introduced performance optimizations resulting in faster load times. Collaborated on responsive design and accessibility improvements.",
          `
I implemented the real-time price chart with TradingView charting library, which allowed us to display real-time price data with high performance and low latency.
I also implemented the order book and trade history components, which are able to handle a large amount of data and update in real-time from websocket.
I suggested and implemented moving static history data from database to storage, which reduced the cost significantly and improved the performance of the chart.
          `
      },
      {
        name: "Matching engine",
        short: "Implemented data structure for matching engine, which is able to handle a large amount of orders with intensive update frequency.", 
        details:
          // "Implemented data visualization using Recharts, built custom reporting tables, and introduced performance optimizations resulting in faster load times. Collaborated on responsive design and accessibility improvements.",
          `
I proposed and implemented self-balanced tree (**Btree**) in typescript for the **matching algorithms**. The Btree data structure helps managing large, high frequency updated, price ordered list much more efficient compare to Array or Linked list.
          `
      }
    ],
  },
  {
    jobTitle: "Fullstack Engineer",
    company: "Mobilus",
    location: "Tokyo, Japan",
    period: "2015",
    description: "Worked in a team with members across Japan and America to develop a nodejs meteor app.",
    projects: [],
  },
  {
    jobTitle: "Bridge Engineer",
    company: "FPT Software",
    location: "Tokyo, Japan",
    period: "2012-2015",
    description: "Communicated and translated Japanese customer's requirements to the Vietnamese offshore team.",
    projects: [],
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
                                  Hide
                                  <ChevronUp className="ml-1" size={16} />
                                </>
                              ) : (
                                <>
                                  More
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
