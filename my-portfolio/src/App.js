import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, BriefcaseIcon, CodeIcon, LayersIcon } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'experience', 'skills', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['Profile', 'Experience', 'Skills', 'Projects'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section id="profile" className="min-h-screen flex items-center justify-center bg-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Phani Chandra Sekhar Avagaddi
            </h1>
            <h2 className="text-2xl mb-8 text-gray-600">Senior Engineering Manager</h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-700">
              With 21 years of IT expertise, I spearhead complex software products and services across diverse IT landscapes. 
              Recently augmented my skillset with AI and ML, ready to drive ground-breaking AI initiatives and enhance organizational performance.
            </p>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-12"
            >
              <ChevronDownIcon className="w-8 h-8 mx-auto text-blue-600" />
            </motion.div>
          </motion.div>
        </section>

        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Professional Experience</h2>
            <div className="space-y-8">
              {[
                { title: "Sr Engineering Manager", company: "Envoy Global", period: "Nov 2022 to Present" },
                { title: "Sr Technical Project Manager", company: "Pactera Edge", period: "May 2019 to Nov 2022" },
                { title: "Group Manager (TPM)", company: "DST Worldwide Services", period: "Jun 2017 to May 2019" },
                { title: "Technical Project Manager", company: "Infosys Ltd", period: "Mar 2015 to May 2017" },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{job.title}</h3>
                  <p className="text-lg mb-2 text-gray-700">{job.company}</p>
                  <p className="text-gray-600">{job.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: CodeIcon, title: "Programming", skills: ["C#", "Python", "JavaScript", "HTML", "SQL", "jQuery"] },
                { icon: LayersIcon, title: "Frameworks", skills: ["ASP.NET Core", "MVC", "Angular", "React", "NodeJS"] },
                { icon: BriefcaseIcon, title: "AI/ML", skills: ["Gen AI", "Machine Learning", "Deep Learning", "NLP", "Speech Recognition"] },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <category.icon className="w-8 h-8 mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Notable Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Internal Chatbot based on LEMMA", tech: "Python, ReactJS, NodeJS, Azure AI" },
                { title: "Automatic Speech Recognition (ASR)", tech: "Python, Fast API, Deep Learning, HMM-GMM Statistical Model" },
                { title: "Envoy Global VISA Immigration platform", tech: "C#, Angular, Web API, ASP.NET MVC, SQL Server" },
                { title: "Brokerage Operations Support System", tech: "C#, WinForms, Web API, WPF, SQL Server" },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{project.title}</h3>
                  <p className="text-gray-700">{project.tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2024 Phani Chandra Sekhar Avagaddi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}