import ProfileCard from "../components/ProfileCard";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import PersonalProjectsSection from "../components/PersonalProjectsSection";

// Linear gradient background for the app
const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center font-inter"
      style={{
        background: "linear-gradient(102.3deg, rgba(147,39,143,0.10) 5.9%, rgba(234,172,232,0.13) 64%, rgba(246,219,245,0.12) 89%)"
      }}
    >
      <ProfileCard />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <PersonalProjectsSection />
      <footer className="text-xs text-gray-400 mt-4 mb-1">Dang Thanh Tung © {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Index;
