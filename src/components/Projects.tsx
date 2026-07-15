import React from 'react';
import { ArrowRight, Drone, Camera, Wifi, Shield, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "AI Grand Prix",
      description: "Global autonomous drone racing competition founded by Anduril, challenging engineers to develop AI systems that pilot high-speed racing drones through dynamic courses with zero human control. Competing for a $500K prize pool.",
      icon: Zap,
      technologies: ["Autonomous Flight", "AI/ML", "Computer Vision", "Python", "Obstacle Avoidance"],
      status: "Active",
      image: "/api/placeholder/400/300",
      link: "https://www.theaigrandprix.com/"
    },
    {
      id: 2,
      title: "Drone Evader vs. Pursuer",
      description: "Advanced drone interception system where one drone evades while another pursues using sophisticated prediction algorithms and real-time tracking.",
      icon: Shield,
      technologies: ["Prediction Algorithms", "Real-time Tracking", "Intercept Systems", "Evasion Tactics"],
      status: "Research",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Swarming & Autonomy",
      description: "Advanced formation flying with obstacle avoidance, search-and-rescue grid sweeps, and dynamic perimeter patrol using autonomous drone coordination.",
      icon: Zap,
      technologies: ["Formation Flying", "Obstacle Avoidance", "Autonomous Navigation", "Grid Search"],
      status: "Research",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Networking & Resilience",
      description: "Mesh relay chains, redundant control systems, and adaptive communication routing for robust drone fleet operations in challenging environments.",
      icon: Wifi,
      technologies: ["Mesh Networking", "Redundant Control", "Adaptive Routing", "Fleet Management"],
      status: "Research",
      image: "/api/placeholder/400/300"
    }, 
    {
      id: 5,
      title: "2027 RTX Autonomous Vehicle Competition",
      description: "Annual regional Raytheon-sponsored event where STEM students tackle timed autonomous vehicle challenges in friendly competition with other universities.",

      icon: Drone,
      technologies: ["Autonomous Vehicle", "Computer Vision", "AI/ML", "Prediction Algorithms"],
      status: "Comming Soon",
      image: "/api/placeholder/400/300",
      link: "https://www.youtube.com/watch?v=TaiLjWskhFQ&t=7s"
    },
    {
      id: 6,
      title: "2027 AIMM ICC Competition",
      description: "Artificial Intelligence Maritime Maneuver Indiana Collegiate Challenge - developing innovative drone solutions for maritime scenarios including drone-vs-drone intercept with prediction algorithms.",
      icon: Drone,
      technologies: ["Python", "Computer Vision", "AI/ML", "Prediction Algorithms"],
      status: "Comming Soon",
      image: "/api/placeholder/400/300",
      link: "https://www.trine.edu/innovation-one/aimm/index.aspx"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Research':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Comming Soon':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
            <Drone className="w-4 h-4 mr-2" />
            Our Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Innovation in Flight
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From autonomous swarms to competitive racing, we're pushing the boundaries of what's possible with UAV technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="card group hover:shadow-2xl hover:shadow-nd-gold/10 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-nd-blue to-nd-navy flex items-center justify-center">
                    <Icon className="w-16 h-16 text-nd-gold" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold text-white group-hover:text-nd-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-xs text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External Link Button (only for competitions) */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-nd-gold hover:text-yellow-400 font-medium transition-colors group"
                    >
                      Visit Competition
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nd-blue to-nd-navy rounded-2xl p-8 border border-dark-border">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Want to Join Our Projects?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students to contribute to our cutting-edge UAV projects. 
              No experience necessary - we'll teach you everything you need to know!
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center group">
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
