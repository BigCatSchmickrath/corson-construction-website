import React, { useState } from 'react';
import { projects } from '@/data/projects';

interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
}

export const GalleryGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`relative overflow-hidden rounded-sharp border border-ccr-light hover:border-ccr-blue transition cursor-pointer group ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className={`w-full object-cover group-hover:scale-105 transition duration-300 ${
                index === 0 ? 'h-96 md:h-full' : 'h-64'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
              <div className="text-ccr-gold text-sm font-semibold">{project.category}</div>
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
          onKeyDown={handleEscape}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-sharp max-w-3xl w-full max-h-96 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-ccr-navy text-white w-10 h-10 flex items-center justify-center hover:bg-ccr-blue transition rounded-sharp z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-sharp"
                />
              </div>

              {/* Content */}
              <div>
                <div className="text-ccr-gold text-sm font-semibold mb-2">{selectedProject.category}</div>
                <h2 className="text-3xl font-bold text-ccr-navy mb-3">{selectedProject.title}</h2>

                {/* Tagline (italic, gold) */}
                <p className="text-lg italic text-ccr-gold mb-6">{selectedProject.tagline}</p>

                {/* Description */}
                <p className="text-ccr-gray leading-relaxed mb-8">{selectedProject.description}</p>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-ccr-blue text-white font-bold hover:bg-ccr-navy transition"
                  style={{ borderRadius: '2px' }}
                >
                  GET A FREE QUOTE
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
