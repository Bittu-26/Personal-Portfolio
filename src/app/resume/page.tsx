import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResumeHeader from './components/ResumeHeader';
import ResumeSummary from './components/ResumeSummary';
import ResumeExperience from './components/ResumeExperience';
import ResumeEducation from './components/ResumeEducation';
import ResumeSkills from './components/ResumeSkills';
import ResumeDownload from './components/ResumeDownload';

export const metadata: Metadata = {
  title: 'Resume - Ayush Rawat Portfolio',
  description: 'Download Ayush Rawat\'s professional resume. View detailed work experience, education, technical skills, and achievements in software engineering and backend development.',
};

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  achievements: string[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

export default function ResumePage() {
  const personalInfo = {
    name: 'Ayush Rawat',
    title: 'Aspiring Software Engineer & Full Stack Developer',
    email: 'rawatayush905@gmail.com',
    phone: '+91 70882 10944',
    location: 'Dehradun, India',
    linkedin: 'linkedin.com/in/rawat8221',
    github: 'github.com/Bittu-26',
    website: 'ayush-personal-portfolio-sage.vercel.app',
  };

  const summary = `Full-Stack Software Engineer building performant web apps and full stack services. 
  Skilled in Python, Java, MERN, AI/ML and DataBase Technologies. 
  Strong problem solving background and experience shipping production-ready features end-to-end. 
  Seeking roles where I can build scalable systems and contribute to high-growth engineering teams.`;

  const experiences: Experience[] = [
    {
      title: 'Engineering Intern',
      company: 'IIT Kharagpur',
      location: 'Kharagpur, West Bengal',
      period: 'Jan 2025 - Jul 2025',
      description: 'Contributing to research projects focusing on scalable backend systems and data processing pipelines.',
      responsibilities: [
        'Led development of a YOLO-based accident-detection system, achieving 92%+ real-time detection accuracy and reducing false positives by ~18% through improved preprocessing and model tuning. ',
        'Built an interactive analytics dashboard (Node.js, HTML/CSS, Python) that reduced incident-review time by 35%, improving visualization clarity and usability for cross-functional teams.  ',
        ' Implemented automated model-training workflows and integrated backend services with the dashboard, enabling 100% seamless data flow and improving inference pipeline stability by 30%. ',
        ' Optimized preprocessing, training, and deployment pipelines, cutting inference latency by 40 ms and improving model reliability and scalability for continuous real-time monitoring.',
      ],
      technologies: ['Python', 'HTML', 'CSS', 'NodeJs', 'AI/ML', 'YOLO', 'Computer Vision'],
    },
  ];

  const education: Education[] = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Uttaranchal University',
      location: 'Dehradun, India',
      period: '2022 - 2026',
      gpa: '8.23/10.0',
      achievements: [
        "Dean's List recognition for academic excellence (2022, 2023)",
        'Led college coding club with 200+ active members organizing weekly workshops',
        'Won 1st place in inter-college hackathon focusing on backend optimization (2023)',
        'Published research paper on "Distributed Systems Optimization Techniques" in IEEE conference',
        'Core team member of technical symposium managing 5,000+ participants',
      ],
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'CJM Hampton Court',
      location: 'Mussoorie, India',
      period: '2020 - 2022',
      gpa: '78%',
      achievements: [
        'School topper in Computer Science with 95% marks',
        'Represented school in national-level coding olympiad',
        'Led robotics club and built autonomous line-following robot',
      ],
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'C#', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'Flask', 'REST APIs'],
    },
    {
      category: 'Databases',
      skills: [ 'MongoDB', 'MySQL', ],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker'],
    },
    {
      category: 'Tools & Frameworks',
      skills: ['Git', 'Postman', 'Linux'],
    },
    {
      category: 'Concepts',
      skills: ['Data Structures', 'Algorithms', 'System Design', 'Microservices', 'API Design', 'Database Optimization'],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <ResumeHeader personalInfo={personalInfo} />
      
      <ResumeSummary summary={summary} />
      
      <ResumeExperience experiences={experiences} />
      
      <ResumeEducation education={education} />
      
      <ResumeSkills skillCategories={skillCategories} />
      
      <ResumeDownload />
    </main>
  );
}