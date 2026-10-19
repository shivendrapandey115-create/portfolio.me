import { portfolioData } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const { personal, about, skillCategories, projects, experience, education, settings } = portfolioData;

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-foreground flex flex-col relative selection:bg-accent/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        personal={personal}
        showExperience={settings.showExperience}
        showEducation={settings.showEducation}
      />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero personal={personal} />

        {/* About Section */}
        <About
          personal={personal}
          philosophy={about.philosophy}
          highlights={about.highlights}
        />

        {/* Skills Section */}
        <Skills categories={skillCategories} />

        {/* Projects Showcase */}
        <Projects projects={projects} />

        {/* Experience & Education */}
        <Experience
          experience={experience}
          education={education}
          showExperience={settings.showExperience}
          showEducation={settings.showEducation}
        />

        {/* Contact Section */}
        <Contact
          personal={personal}
          enableForm={settings.enableContactForm}
        />
      </main>

      {/* Footer */}
      <Footer personal={personal} />
    </div>
  );
}

export default App;
