import React, { useState, useEffect } from 'react';
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
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  const INITIAL_COUNT = 6;

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);
  const visibleProjects = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const handleClose = () => setSelectedProject(null);

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const currentIndex = filtered.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = direction === 'next'
      ? (currentIndex + 1) % filtered.length
      : (currentIndex - 1 + filtered.length) % filtered.length;
    setSelectedProject(filtered[nextIndex]);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') navigateProject('prev');
      if (e.key === 'ArrowRight') navigateProject('next');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject, filtered]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveFilter(cat); setShowAll(false); }}
            className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition ${
              activeFilter === cat
                ? 'bg-[#2c5f8a] text-white'
                : 'bg-[#f4f6f8] text-[#6b7b8d] hover:bg-[#2c5f8a] hover:text-white'
            }`}
            style={{ borderRadius: '2px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative overflow-hidden h-56 sm:h-64 lg:h-72"
              style={{ borderRadius: '2px' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Permanent subtle overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <span className="text-[#c9a84c] text-xs font-semibold tracking-wider uppercase">{project.category}</span>
                  <h3 className="text-white font-bold text-base sm:text-lg leading-tight mt-1">{project.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1 opacity-0 group-hover:opacity-100 transition duration-300 hidden sm:block">
                    {project.tagline}
                  </p>
                </div>
              </div>
              {/* Hover magnify icon — hidden on mobile (tap opens directly) */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg hidden sm:flex">
                <svg className="w-5 h-5 text-[#1a1a2e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Blur overlay + View More button */}
        {!showAll && hasMore && (
          <div className="relative -mt-36 sm:-mt-48 pt-36 sm:pt-48" style={{ background: 'linear-gradient(to bottom, transparent, #f4f6f8 70%)' }}>
            <div className="flex flex-col items-center pb-4 pt-6 sm:pt-8">
              <p className="text-xs sm:text-sm text-[#6b7b8d] mb-3 sm:mb-4">{filtered.length - INITIAL_COUNT} more projects to explore</p>
              <button
                onClick={() => setShowAll(true)}
                className="px-6 sm:px-8 py-3 bg-[#2c5f8a] text-white font-bold hover:bg-[#1a1a2e] transition text-base sm:text-lg"
                style={{ borderRadius: '2px' }}
              >
                View All Projects
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Counter */}
      <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-[#6b7b8d]">
        Showing {visibleProjects.length} of {filtered.length} projects
      </div>

      {/* Full-screen Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-[#1a1a2e]/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={handleClose}
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition z-20"
            aria-label="Close"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev/Next Arrows — repositioned on mobile */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition z-20"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition z-20"
            aria-label="Next project"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Content */}
          <div
            className="max-w-5xl w-full mx-2 sm:mx-4 flex flex-col lg:flex-row overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: '2px' }}
          >
            {/* Image */}
            <div className="lg:w-3/5 bg-black flex items-center justify-center max-h-[40vh] sm:max-h-[50vh] lg:max-h-[85vh]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details Panel */}
            <div className="lg:w-2/5 bg-white p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-[#c9a84c] text-xs font-semibold tracking-wider uppercase">{selectedProject.category}</span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mt-1 mb-2 sm:mb-3">{selectedProject.title}</h2>
                <div className="w-12 h-0.5 bg-[#c9a84c] mb-3 sm:mb-4"></div>
                <p className="text-base sm:text-lg italic text-[#2c5f8a] mb-3 sm:mb-4">{selectedProject.tagline}</p>
                <p className="text-sm sm:text-base text-[#6b7b8d] leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="mt-4 sm:mt-8 space-y-2 sm:space-y-3">
                <a
                  href="/contact"
                  className="block w-full px-6 py-3 bg-[#2c5f8a] text-white font-bold text-center hover:bg-[#1a1a2e] transition text-sm sm:text-base"
                  style={{ borderRadius: '2px' }}
                >
                  Start a Similar Project
                </a>
                <a
                  href="tel:9132083171"
                  className="block w-full px-6 py-3 border-2 border-[#2c5f8a] text-[#2c5f8a] font-bold text-center hover:bg-[#2c5f8a] hover:text-white transition text-sm sm:text-base"
                  style={{ borderRadius: '2px' }}
                >
                  Call: 913-208-3171
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
