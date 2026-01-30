/**
 * Mock Job Data
 * Demo data for jobs module - no backend required
 */

import { Job } from '../types/job.types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'Bangalore',
    type: 'Full-time',
    salary: '₹12-18 LPA',
    postedDate: '2026-01-25',
    description:
      'We are looking for a talented Frontend Developer to join our dynamic team. You will be responsible for building responsive web applications using modern frameworks and ensuring excellent user experience.',
    requirements: [
      '3+ years of experience with React.js',
      'Strong knowledge of TypeScript',
      'Experience with state management (Redux/Context API)',
      'Proficiency in CSS frameworks (Tailwind/Material-UI)',
      'Understanding of RESTful APIs and async operations',
      'Git version control expertise',
    ],
  },
  {
    id: '2',
    title: 'Software Engineering Intern',
    company: 'StartupXYZ',
    location: 'Remote',
    type: 'Internship',
    salary: '₹20k/month',
    postedDate: '2026-01-28',
    description:
      'Join our fast-paced startup as a Software Engineering Intern. Work on real-world projects, learn from experienced engineers, and build production-ready features.',
    requirements: [
      'Currently pursuing CS/IT degree',
      'Basic knowledge of JavaScript/Python',
      'Familiarity with Git',
      'Problem-solving mindset',
      'Available for 3-6 months',
    ],
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'CloudNet Systems',
    location: 'Pune',
    type: 'Full-time',
    salary: '₹15-22 LPA',
    postedDate: '2026-01-20',
    description:
      'CloudNet Systems is seeking a Full Stack Developer to build scalable web applications. You will work on both frontend and backend, designing APIs and implementing modern UI/UX.',
    requirements: [
      '4+ years of full stack development',
      'Proficiency in Node.js and React',
      'Experience with MongoDB/PostgreSQL',
      'RESTful API design experience',
      'Cloud platforms (AWS/Azure)',
      'CI/CD pipeline knowledge',
    ],
  },
  {
    id: '4',
    title: 'UI/UX Design Intern',
    company: 'CreativeMinds Studio',
    location: 'Mumbai',
    type: 'Internship',
    salary: '₹15k/month',
    postedDate: '2026-01-27',
    description:
      'CreativeMinds is looking for a passionate UI/UX Design Intern to help create beautiful and intuitive user interfaces. Work with designers and developers to bring ideas to life.',
    requirements: [
      'Portfolio showcasing design work',
      'Proficiency in Figma/Adobe XD',
      'Basic understanding of HTML/CSS',
      'User-centered design thinking',
      'Good communication skills',
    ],
  },
  {
    id: '5',
    title: 'Backend Engineer',
    company: 'DataFlow Technologies',
    location: 'Hyderabad',
    type: 'Full-time',
    salary: '₹18-25 LPA',
    postedDate: '2026-01-22',
    description:
      'DataFlow Technologies is hiring a Backend Engineer to design and implement scalable microservices architecture. You will work with cutting-edge technologies and handle high-traffic systems.',
    requirements: [
      '5+ years backend development experience',
      'Expertise in Java/Python/Go',
      'Microservices architecture',
      'Database optimization (SQL & NoSQL)',
      'Message queues (RabbitMQ/Kafka)',
      'Docker and Kubernetes',
    ],
  },
  {
    id: '6',
    title: 'Mobile App Development Intern',
    company: 'AppNova Labs',
    location: 'Remote',
    type: 'Internship',
    salary: '₹18k/month',
    postedDate: '2026-01-29',
    description:
      'Join AppNova Labs as a Mobile App Development Intern and build cross-platform mobile applications. Learn React Native and contribute to real projects used by thousands of users.',
    requirements: [
      'Knowledge of JavaScript/TypeScript',
      'Basic React understanding',
      'Interest in mobile development',
      'Quick learner and team player',
      'Available for 6 months',
    ],
  },
  {
    id: '7',
    title: 'DevOps Engineer',
    company: 'InfraSecure Inc.',
    location: 'Bangalore',
    type: 'Full-time',
    salary: '₹20-30 LPA',
    postedDate: '2026-01-18',
    description:
      'InfraSecure is looking for an experienced DevOps Engineer to automate infrastructure, improve deployment pipelines, and ensure system reliability at scale.',
    requirements: [
      '4+ years DevOps experience',
      'Strong Linux/Unix knowledge',
      'Terraform/CloudFormation expertise',
      'CI/CD tools (Jenkins/GitHub Actions)',
      'Monitoring tools (Prometheus/Grafana)',
      'Security best practices',
    ],
  },
  {
    id: '8',
    title: 'Data Science Intern',
    company: 'AI Innovations',
    location: 'Chennai',
    type: 'Internship',
    salary: '₹25k/month',
    postedDate: '2026-01-26',
    description:
      'AI Innovations is seeking a Data Science Intern to work on machine learning projects, analyze datasets, and build predictive models. Great opportunity to work with real-world AI applications.',
    requirements: [
      'Pursuing degree in CS/Math/Statistics',
      'Python programming skills',
      'Knowledge of pandas, NumPy, scikit-learn',
      'Understanding of ML algorithms',
      'Analytical thinking',
    ],
  },
];

/**
 * Get unique locations from job data
 */
export const getUniqueLocations = (): string[] => {
  const locations = MOCK_JOBS.map((job) => job.location);
  return ['All', ...Array.from(new Set(locations))];
};

/**
 * Get unique job types
 */
export const getJobTypes = (): string[] => {
  return ['All', 'Internship', 'Full-time'];
};
