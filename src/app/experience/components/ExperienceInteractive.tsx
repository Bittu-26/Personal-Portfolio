'use client';

import { useState, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsFilter from './SkillsFilter';
import ExperienceStats from './ExperienceStats';
import TestimonialCard from './TestimonialCard';
import Icon from '@/components/ui/AppIcon';

interface TechStack {
  name: string;
  category: string;
}

interface Achievement {
  title: string;
  description: string;
  impact: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  logo: string;
  description: string;
  techStack: TechStack[];
  achievements: Achievement[];
  teamSize: number;
  reportingTo: string;
  keyProjects: string[];
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  rating: number;
}

const ExperienceInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'cards' | 'timeline'>('cards');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const experiences: Experience[] = [
  {
      id: 1,
      company: "Indian Institute of Technology Kharagpur",
      role: "Engineering Intern",
      duration: "Jun 2025 - Jul 2025",
      location: "Kharagpur, West Bengal",
      type: "Internship",
      logo: "IIT",
      description:
        "Contributed to cutting-edge research projects in distributed systems and backend optimization. Worked closely with PhD researchers and faculty members to develop scalable solutions for high-performance computing applications.",

      techStack: [
        { name: "Python", category: "Languages" },
        { name: "Java", category: "Languages" },
        { name: "C++", category: "Languages" },
        { name: "Django", category: "Frameworks" },
        { name: "Flask", category: "Frameworks" },
        { name: "SQL", category: "Databases" },
        { name: "MongoDB", category: "Databases" },
        { name: "Docker", category: "DevOps" },
        
        { name: "Git", category: "Tools" },
        { name: "Linux", category: "Tools" },
        { name: "AWS", category: "Cloud" }
      ],

      achievements: [
        {
          title: "Real-Time Accident Detection System",
          description:
            "Led development of a YOLO-based accident-detection system with improved preprocessing, fine-tuning, and model optimization techniques.",
          impact:
            "Achieved 92%+ real-time detection accuracy and reduced false positives by ~18%"
        },
        {
          title: "Interactive Analytics Dashboard",
          description:
            "Built a full-stack analytics dashboard using Node.js, Python, and HTML/CSS to streamline visualization and incident analysis workflows.",
          impact:
            "Reduced incident-review time by 35% and enhanced clarity for cross-functional teams"
        },
        {
          title: "Automated Training & Backend Integration",
          description:
            "Implemented automated model-training workflows and integrated backend services with the dashboard for seamless data processing.",
          impact:
            "Enabled 100% consistent data flow and improved inference pipeline stability by 30%"
        },
        {
          title: "Model & Pipeline Optimization",
          description:
            "Optimized preprocessing, training, and deployment pipelines to enhance real-time monitoring performance.",
          impact:
            "Cut inference latency by 40ms and improved system reliability and scalability for continuous monitoring"
        }
      ],

      teamSize: 4,
      reportingTo: "Professor Richa Ahuja",
      keyProjects: [
        'Led development of a YOLO-based accident-detection system, achieving 92%+ real-time detection accuracy and reducing false positives by ~18% through improved preprocessing and model tuning.',
        'Built an interactive analytics dashboard (Node.js, HTML/CSS, Python) that reduced incident-review time by 35%, improving visualization clarity and usability for cross-functional teams.',
        'Implemented automated model-training workflows and integrated backend services with the dashboard, enabling 100% seamless data flow and improving inference pipeline stability by 30%.',
        'Optimized preprocessing, training, and deployment pipelines, cutting inference latency by 40 ms and improving model reliability and scalability for continuous real-time monitoring.'
      ]
    }
  ];

  const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "Engineering Intern at IIT Kharagpur",
    description: "Advanced research in distributed systems and backend optimization with focus on scalable architecture design."
  }
  ];


  const stats: Stat[] = [
  {
    label: "Years of Experience",
    value: "<1",
    icon: "CalendarIcon",
    color: "bg-primary/10 text-primary"
  },
  {
    label: "Projects Completed",
    value: "15+",
    icon: "CodeBracketIcon",
    color: "bg-success/10 text-success"
  },
  {
    label: "Technologies Mastered",
    value: "25+",
    icon: "CpuChipIcon",
    color: "bg-accent/10 text-accent"
  },
  {
    label: "Students Achievements",
    value: "2+",
    icon: "AcademicCapIcon",
    color: "bg-warning/10 text-warning"
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Associate Professor",
    company: "IIT Kharagpur",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18160d972-1763296688320.png",
    alt: "Middle-aged Indian professor with glasses and gray hair in formal attire",
    quote: "Ayush demonstrated exceptional problem-solving skills and a deep understanding of distributed systems. His contributions to our research projects were invaluable, and his ability to optimize complex algorithms was impressive.",
    rating: 5
  }];


  const allSkills = Array.from(
    new Set(experiences.flatMap((exp) => exp.techStack.map((tech) => tech.name)))
  ).sort();

  const filteredExperiences = selectedSkills.length === 0 ?
  experiences :
  experiences.filter((exp) =>
  selectedSkills.some((skill) =>
  exp.techStack.some((tech) => tech.name === skill)
  )
  );

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="h-64 bg-muted rounded" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
      </div>);

  }

  return (
    <div className="space-y-12">
      {/* Stats Section */}
      <ExperienceStats stats={stats} />

      {/* View Toggle and Filter */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              viewMode === 'cards' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
              }>

              <Icon name="Squares2X2Icon" size={20} variant="outline" className="inline mr-2" />
              Card View
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              viewMode === 'timeline' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
              }>

              <Icon name="ClockIcon" size={20} variant="outline" className="inline mr-2" />
              Timeline View
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors duration-300 flex items-center gap-2">

            <Icon name="PrinterIcon" size={20} variant="outline" />
            Print View
          </button>
        </div>

        <SkillsFilter skills={allSkills} onFilterChange={setSelectedSkills} />
      </div>

      {/* Experience Display */}
      {viewMode === 'cards' ?
      <div className="space-y-6">
          {filteredExperiences.length > 0 ?
        filteredExperiences.map((experience) =>
        <ExperienceCard key={experience.id} experience={experience} />
        ) :

        <div className="bg-card border border-border rounded-lg p-12 text-center">
              <Icon name="FunnelIcon" size={48} variant="outline" className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No experiences match the selected skills. Try adjusting your filters.</p>
            </div>
        }
        </div> :

      <ExperienceTimeline items={timelineItems} />
      }

      {/* Testimonials Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Icon name="ChatBubbleLeftRightIcon" size={28} variant="outline" className="text-primary" />
          <h2 className="text-3xl font-bold text-foreground">What Colleagues Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) =>
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/10 to-brand-secondary/10 border border-primary/20 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Working Together?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Let's connect and explore how we can work together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">

            Get in Touch
          </a>
          <a
            href="/projects"
            className="px-8 py-3 bg-card text-foreground font-semibold rounded-lg border border-border hover:border-primary/50 transition-all duration-300">

            View My Projects
          </a>
        </div>
      </div>
    </div>);

};

export default ExperienceInteractive;