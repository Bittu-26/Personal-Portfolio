import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import JourneyTimeline from './components/JourneyTimeline';
import PersonalitySection from './components/PersonalitySection';
import ValuesSection from './components/ValuesSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'About - Ayush Rawat Portfolio',
  description: 'Learn about Ayush Rawat\'s journey as a software engineer, technical philosophy, core values, and the experiences that shaped his career in software development and full-stack engineering.'
};

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
  type: 'education' | 'experience' | 'achievement';
}

interface Interest {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
  quote: string;
}

export default function AboutPage() {
  const heroData = {
    name: "Ayush Rawat",
    title: "Aspiring Software Engineer & Problem Solver",
    image: "assets/image.png",
    imageAlt: "Professional headshot"
  };

  const philosophies: PhilosophyItem[] = [
  {
    icon: "LightBulbIcon",
    title: "Continuous Learning",
    description: "Technology evolves rapidly. I dedicate time daily to learning new frameworks, patterns, and best practices to stay relevant and effective."
  },
  {
    icon: "CodeBracketSquareIcon",
    title: "Clean Code",
    description: "Code is read more than written. I prioritize readability, maintainability, and proper documentation to ensure long-term project success."
  },
  {
    icon: "ChartBarIcon",
    title: "Performance First",
    description: "Optimization isn't premature when done right. I focus on writing efficient algorithms and scalable architectures from the ground up."
  },
  {
    icon: "UserGroupIcon",
    title: "Team Collaboration",
    description: "Great software is built by great teams. I value clear communication, code reviews, and knowledge sharing to elevate collective expertise."
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    year: "2025",
    title: "Engineering Intern",
    organization: "IIT Kharagpur",
    description: "Contributed to cutting-edge research projects focusing on scalable backend systems and data processing pipelines. Worked closely with professors and PhD students on real-world problem-solving.",
    achievements: [
    'Led development of a YOLO-based accident-detection system, achieving 92%+ real-time detection accuracy and reducing false positives by ~18% through improved preprocessing and model tuning. ',
        'Built an interactive analytics dashboard (Node.js, HTML/CSS, Python) that reduced incident-review time by 35%, improving visualization clarity and usability for cross-functional teams.  ',
        ' Implemented automated model-training workflows and integrated backend services with the dashboard, enabling 100% seamless data flow and improving inference pipeline stability by 30%. ',
        ' Optimized preprocessing, training, and deployment pipelines, cutting inference latency by 40 ms and improving model reliability and scalability for continuous real-time monitoring.',
      ],

    type: "experience"
  },
  {
    year: "2022",
    title: "Bachelor of Technology in Computer Science",
    organization: "Uttaranchal University",
    description: "Built strong foundations in data structures, algorithms, operating systems, and database management. Maintained excellent academic performance while actively participating in coding competitions.",
    achievements: [
    "CGPA: 8.23/10.0 with Dean's List recognition",
    "Led college coding club with 200+ active members",
    "Won 3 inter-college hackathons focusing on backend solutions",
    "Published research paper on distributed systems optimization"],

    type: "education"
  }
];


  const interests: Interest[] = [
  {
    icon: "BookOpenIcon",
    title: "Games & Puzzles",
    description: "Constantly exploring new games and puzzels(Chess) to deepen understanding of patterns.",
    image: "assets/Games.jpg",
    imageAlt: "Games Image"
  },
  {
    icon: "MusicalNoteIcon",
    title: "Sports",
    description: "A sports prodigy in basketball, football, cricket, and other outdoor sports, showing mastery across all sports.",
    image: "assets/Sports.jpg",
    imageAlt: "A sports prodigy in basketball, football, cricket, and other outdoor sports, showing mastery across all sports."
  },
  {
    icon: "CameraIcon",
    title: "Problem Solving",
    description: "Solving new Leetcode Problems and code optimization.",
    image: "assets/Problem.png",
    imageAlt: "Professional DSLR camera with telephoto lens on tripod overlooking mountain landscape at sunset"
  }];


  const values: Value[] = [
  {
    icon: "ShieldCheckIcon",
    title: "Reliability",
    description: "I take ownership of my work and ensure deliverables meet the highest standards. When I commit to a deadline or feature, stakeholders can trust it will be delivered with quality and on time.",
    quote: "Reliability is doing what you say you'll do, when you say you'll do it"
  },
  {
    icon: "AcademicCapIcon",
    title: "Growth Mindset",
    description: "Every challenge is an opportunity to learn. I embrace failures as learning experiences and actively seek feedback to continuously improve my technical and soft skills.",
    quote: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice"
  },
  {
    icon: "HandRaisedIcon",
    title: "Transparency",
    description: "Open communication builds trust. I believe in sharing progress honestly, raising blockers early, and maintaining clear documentation so teams can collaborate effectively.",
    quote: "Transparency breeds trust, and trust is the foundation of great teams"
  },
  {
    icon: "SparklesIcon",
    title: "Excellence",
    description: "Good enough is never good enough. I strive for excellence in every line of code, every system design, and every interaction, pushing boundaries while maintaining pragmatism.",
    quote: "Excellence is not a destination; it's a continuous journey that never ends"
  }];


  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        name={heroData.name}
        title={heroData.title}
        image={heroData.image}
        imageAlt={heroData.imageAlt} />

      
      <PhilosophySection philosophies={philosophies} />
      
      <JourneyTimeline events={timelineEvents} />
      
      <PersonalitySection interests={interests} />
      
      <ValuesSection values={values} />
      
      <CTASection bioUrl="/assets/ayush-rawat-bio.pdf" />
    </main>);

}