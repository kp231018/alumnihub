// Static jobs data for demo (no backend)

export const jobs = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'TechCore Labs',
    location: 'Bangalore, India',
    type: 'Internship',
    description:
      'Work with our core product team to build scalable web services and internal tools used by thousands of students and alumni. You will collaborate with senior engineers, participate in code reviews, and contribute to real-world features that impact our user base.',
    requirements: [
      'Strong fundamentals in JavaScript or TypeScript',
      'Familiarity with React or similar frontend framework',
      'Good understanding of data structures and algorithms',
      'Ability to work 20+ hours per week for 3-6 months',
      'Strong communication skills and eagerness to learn',
    ],
  },
  {
    id: '2',
    title: 'Junior Frontend Developer',
    company: 'InnovateX Technologies',
    location: 'Remote / Pune, India',
    type: 'Full-time',
    description:
      'Join a fast-paced product team building modern dashboards and data-driven experiences for universities and enterprises. You will work on responsive UIs, implement design systems, and optimize performance for large-scale applications.',
    requirements: [
      '1+ years of experience with React or Vue',
      'Solid knowledge of HTML5, CSS3, and responsive design',
      'Experience with REST APIs and basic state management',
      'Attention to design detail and accessibility best practices',
      'Portfolio or GitHub showcasing your work',
    ],
  },
  {
    id: '3',
    title: 'Data Analyst – Graduate Role',
    company: 'Insight Analytics',
    location: 'Mumbai, India',
    type: 'Full-time',
    description:
      'Analyse student and alumni data to generate insights, build dashboards, and support decision-making for partner institutions. You will work closely with product managers and stakeholders to translate data into actionable recommendations.',
    requirements: [
      'Strong analytical and problem-solving skills',
      'Proficiency with Excel / Google Sheets and basic SQL',
      'Exposure to Python/R for data analysis is a plus',
      'Excellent communication and storytelling with data',
      'Bachelor\'s degree in Statistics, Mathematics, or related field',
    ],
  },
  {
    id: '4',
    title: 'Campus Ambassador (Part-time)',
    company: 'AlumniHub',
    location: 'On-campus',
    type: 'Internship',
    description:
      'Be the face of AlumniHub on your campus, run outreach campaigns, and help students discover jobs, events, and mentors. This role offers flexible hours, leadership experience, and networking opportunities with alumni and industry professionals.',
    requirements: [
      'Currently enrolled as a student',
      'Active in clubs, cells, or student communities',
      'Comfortable speaking to groups and presenting',
      'Available 5–8 hours per week for a semester',
      'Passion for helping fellow students succeed',
    ],
  },
  {
    id: '5',
    title: 'Backend Engineer – Node.js',
    company: 'ScaleStack Systems',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description:
      'Design and build secure, high-performance APIs that power dashboards, analytics, and integrations with campus systems. You will work on microservices architecture, database optimization, and ensure system reliability at scale.',
    requirements: [
      '2+ years of experience with Node.js and Express',
      'Understanding of relational or NoSQL databases',
      'Experience building and consuming RESTful services',
      'Knowledge of authentication, authorization, and security best practices',
      'Familiarity with cloud platforms (AWS, Azure, or GCP)',
    ],
  },
  {
    id: '6',
    title: 'Product Design Intern',
    company: 'DesignStudio Pro',
    location: 'Delhi, India',
    type: 'Internship',
    description:
      'Work alongside experienced designers to create user-centered interfaces for web and mobile applications. You will participate in user research, create wireframes and prototypes, and contribute to design system documentation.',
    requirements: [
      'Portfolio demonstrating UI/UX design skills',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Understanding of user research and design thinking',
      'Strong visual design sense and attention to detail',
      'Available for 3-6 months, 20+ hours per week',
    ],
  },
  {
    id: '7',
    title: 'DevOps Engineer',
    company: 'CloudOps Solutions',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Manage infrastructure, CI/CD pipelines, and deployment processes for our platform. You will work with Docker, Kubernetes, and cloud services to ensure high availability and scalability of our systems.',
    requirements: [
      'Experience with Docker and container orchestration',
      'Knowledge of CI/CD tools (Jenkins, GitHub Actions, or GitLab CI)',
      'Understanding of cloud infrastructure (AWS preferred)',
      'Scripting skills in Bash, Python, or similar',
      '2+ years of DevOps or SRE experience',
    ],
  },
  {
    id: '8',
    title: 'Marketing Associate',
    company: 'Growth Marketing Co',
    location: 'Bangalore, India',
    type: 'Full-time',
    description:
      'Develop and execute marketing campaigns targeting students and alumni. You will create content, manage social media channels, analyze campaign performance, and collaborate with cross-functional teams to drive user acquisition and engagement.',
    requirements: [
      'Bachelor\'s degree in Marketing, Communications, or related field',
      'Experience with social media management and content creation',
      'Basic understanding of digital marketing analytics',
      'Excellent written and verbal communication skills',
      'Creative thinking and ability to work in a fast-paced environment',
    ],
  },
];

export function getJobById(id) {
  return jobs.find((job) => job.id === id);
}

