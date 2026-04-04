import React from 'react';
import { projects } from '../../data/projects';
import { useTheme } from '../Layout/ThemeProvider';
import { FaReact, FaGithub, FaPython, FaDesktop } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss, SiGithubactions } from 'react-icons/si';

const techIconMap: Record<string, React.ReactElement> = {
  'React':           <FaReact />,
  'TypeScript':      <SiTypescript />,
  'Vite':            <SiVite />,
  'Tailwind CSS':    <SiTailwindcss />,
  'GitHub Actions':  <SiGithubactions />,
  'GitHub Pages':    <FaGithub />,
  'Python':          <FaPython />,
  'PyQt5':           <FaDesktop />,
  'PyInstaller':     <FaDesktop />,
};

interface ProjectsProps {
  // Props can be added here if needed
}

export const Projects: React.FC<ProjectsProps> = () => {
  const { theme } = useTheme();

  return (
    <section className="py-8">
      <div className="mb-8">
        <h2 
          className="text-2xl font-bold mb-2"
          style={{ color: theme.text }}
        >
          Projects
        </h2>
        <div 
          className="h-1 w-16 rounded-full"
          style={{ backgroundColor: theme.accent }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.border}`,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Project Image */}
            {project.imageUrl && (
              <div 
                className="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                style={{ backgroundColor: theme.border }}
              >
                <span 
                  className="text-gray-500 dark:text-gray-400"
                  style={{ color: theme.textMuted }}
                >
                  Project Preview
                </span>
              </div>
            )}

            <div className="p-6">
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: theme.text }}
              >
                {project.title}
              </h3>

              <p 
                className="mb-4"
                style={{ color: theme.textSecondary }}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center gap-1 px-3 py-1 text-sm rounded-full"
                    style={{
                      backgroundColor: theme.accentLight,
                      color: theme.accent
                    }}
                  >
                    {techIconMap[tech] && <span style={{ fontSize: '13px' }}>{techIconMap[tech]}</span>}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
                    style={{
                      backgroundColor: theme.accent,
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.hover;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = theme.accent;
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}

                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
                    style={{
                      backgroundColor: 'transparent',
                      border: `1px solid ${theme.accent}`,
                      color: theme.accent
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.accent;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = theme.accent;
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};