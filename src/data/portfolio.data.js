export const socialLinks = [
  { icon: 'FaGithub', url: 'https://github.com', label: 'GitHub' },
  { icon: 'FaLinkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'FaTwitter', url: 'https://twitter.com', label: 'Twitter' },
  { icon: 'FaEnvelope', url: 'mailto:chinaka@email.com', label: 'Email' },
];

export const skills = {
  frontend: [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React.js', level: 95 },
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'Supabase', level: 85 },
    { name: 'Python', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'GitHub', level: 90 },
    { name: 'Linux CLI', level: 85 },
    { name: 'Bash', level: 85 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack MERN e-commerce platform with payment integration, product filtering, and admin dashboard.',
    image: 'https://res.cloudinary.com/dybaoehch/image/upload/v1793288831/Your_Favorite_Products_One_Click_Away_utmbiw.png',
    technologies: ['React','supabase', 'Stripe', 'Tailwind CSS'],
    features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Admin dashboard', 'User authentication'],
    github: 'https://github.com/Chinaka-manuel',
    live: 'https://ecommerce-platform.vercel.app/',
  },
  {
    id: 2,
    title: 'School Management System',
    description: 'A comprehensive School Management System built with the MERN Stack (MongoDB, Express.js, React.js, and Node.js) ',
    image: 'https://res.cloudinary.com/dybaoehch/image/upload/v1793286187/Smarter_School_Management_Hero_rrjwt8.png',
    technologies: ['React', 'Node.js', 'Socket.io', 'Express.js', 'MongoDB'],
    features: ['Real-time updates', 'Chat system', 'Admin Dashboard', 'Students record tracking'],
    github: 'https://github.com/Chinaka-manuel',
    live: 'https://lazervaultech.vercel.app/',
  },
  {
    id: 3,
    title: 'AI Evaluator / Annotator & Search Quality Rater',
    description: 'Evaluate AI-generated content, annotate machine learning data, and assess search results for relevance and usefulness.',
    image: 'https://res.cloudinary.com/dybaoehch/image/upload/v1793286184/Human-Powered_AI_Raters_Landing_Page_dqyxzv.png',
    technologies: ['AI Evaluation', 'AI Annotation', 'Machine Learning Data', 'Search Quality Rating'],
    features: ['Assess AI response quality', 'Annotate and label data', 'Rate search relevance and usefulness', 'Apply rating guidelines consistently'],
    github: 'https://github.com/Chinaka-manue',
    live: 'https://a1raters-com-rho.vercel.app/',
  },
  {
    id: 4,
    title: 'Hospital Management System',
    description: 'A full-stack platform for managing patient records, appointments, staff, and day-to-day hospital operations.',
    image: 'https://res.cloudinary.com/dybaoehch/image/upload/v1793290626/Hospital_Management_System_Dashboard_djojdm.png',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Patient record management', 'Appointment scheduling', 'Staff management', 'Hospital operations dashboard'],
    github: 'https://github.com/Chinaka-manuel',
    live: 'https://demo.com',
  },
  {
    id: 4,
    title: 'Logistics Website',
    description: 'A logistics platform for managing shipments, tracking deliveries, and coordinating transportation operations.',
    image: 'https://res.cloudinary.com/dybaoehch/image/upload/v1793291177/Logistics_Expertise_Feature_Cards_qg5y3z.png',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Shipment tracking', 'Delivery management', 'Route coordination', 'Logistics operations dashboard'],
    github: 'https://github.com/Chinaka-manuel',
    live: 'https://www.stockgloballogistics.com/',
  },
  {
    id: 5,
    title: 'Agricultural E-commerce Website',
    description: 'A full-stack MERN e-commerce platform with payment integration, product filtering, and admin dashboard.',
    image: 'https://res.cloudinary.com/dybaoehch/image/upload/v1793288831/Your_Favorite_Products_One_Click_Away_utmbiw.png',
    technologies: ['React','Mongodb', 'Stripe','paystack','Tailwind CSS','Node.js', 'Express'],
    features: ['Product catalog', 'Shopping cart', 'Payment processing', 'Admin dashboard', 'User authentication'],
    github: 'https://github.com/Chinaka-manuel',
    live: 'https://ecommerce-platform.vercel.app/',
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'A modern social media platform for connecting users and sharing content.',
    image: 'https://res.cloudinary.com/dybaoehch/image/upload/v1793288831/Your_Favorite_Products_One_Click_Away_utmbiw.png',
    technologies: ['React','Mongodb', 'Stripe','paystack','Tailwind CSS','Node.js', 'Express'],
    features: ['User profiles', 'Content sharing', 'Social interactions', 'Notifications', 'Admin dashboard'],
    github: 'https://github.com/Chinaka-manuel',
    live: 'https://social-media-platform.vercel.app/',
  },
];

export const services = [
  {
    icon: 'FaCode',
    title: 'Fullstack Web Development',
    description: 'Complete web applications from frontend to backend, built with modern technologies.',
  },
  {
    icon: 'FaServer',
    title: 'REST API Development',
    description: 'Scalable and secure REST APIs with proper authentication and error handling.',
  },
  {
    icon: 'FaPalette',
    title: 'Responsive UI/UX Design',
    description: 'Beautiful, responsive interfaces that work seamlessly across all devices.',
  },
  {
    icon: 'FaDatabase',
    title: 'Database Design',
    description: 'Optimized database architecture with proper indexing and query optimization.',
  },
  {
    icon: 'FaRocket',
    title: 'Deployment & Optimization',
    description: 'Production-ready deployment with performance optimization and monitoring.',
  },
  {
    icon: 'FaTools',
    title: 'System Architecture',
    description: 'Scalable system design with microservices and cloud-based solutions.',
  },
  {
    icon: 'FaSearch',
    title: 'SEO Optimization',
    description: 'Practical on-page and technical SEO, including keyword research, metadata, structured data, and performance improvements to help your site get discovered.',
  },
  {
    icon: 'FaBrain',
    title: 'AI Evaluation & Annotation',
    description: 'Evaluate AI-generated responses and annotate data for machine learning workflows, applying project guidelines and quality checks consistently.',
  },
  {
    icon: 'FaSearch',
    title: 'Search Quality Rating',
    description: 'Assess search results for relevance, usefulness, and intent match, using rating guidelines to deliver consistent quality judgments.',
  },
];

export const experience = [
  {
    year: '2025 - Present',
    title: 'Senior Full Stack Developer(Contract Instructor)',
    company: 'WebCapz Technologies.',
    description: 'Lead development of web applications, mentor junior developers and Tech Newbies, Worked on architect scalable systems.',
  },
  {
    year: '2023 - Present',
    title: 'Full Stack Developer',
    company: 'Lazervault Technologies Limited',
    description: 'Developed and maintained multiple client projects, implemented REST APIs, and optimized performance.',
  },
  {
    year: '2021 - 2023',
    title: 'Junior Web Developer',
    company: 'Digismath Technologies',
    description: 'Built responsive web applications, fixed bugs, and contributed to codebase improvements.',
  },
  {
    year: '2021 - 2023',
    title: 'Junior Web Developer',
    company: 'Digismath Technologies',
    description: 'Built responsive web sitees(html, css and Javascript, bootstrap), fixed bugs, and contributed to codebase improvements.',
  },
];

export const testimonials = [
  {
    name: 'Louis Nwadike',
    position: 'CEO',
    company: 'Lazervault Technologies Limited',
    image: 'https://via.placeholder.com/100x100?text=Priaz',
    testimonial: 'Chinaka is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.',
  },
  {
    name: 'Joshua Eshet',
    position: 'Student',
    company: 'Webcapz Technologies',
    image: 'https://via.placeholder.com/100x100?text=Michael',
    testimonial: 'Learning and Working with Chinaka was a game-changer for our projects. His technical expertise and dedication are unmatched.',
  },
  {
    name: 'Benjamin Johnbusco',
    position: 'Student',
    company: 'Webcapz Technologies',
    image: 'https://via.placeholder.com/100x100?text=Emma',
    testimonial: 'Professional, reliable, and incredibly talented. Chinaka went above and beyond to ensure project success.',
  },
  {
    name: 'Abundance',
    position: 'Web Development Student',
    company: 'Online Instruction',
    image: 'https://via.placeholder.com/100x100?text=Online+Learner',
    testimonial: 'Chinaka makes online lessons easy to follow, breaking down web development concepts into practical steps. His clear explanations and thoughtful guidance helped me feel more confident applying what I learned.',
  },
  {
    name: 'Moses',
    position: 'In-Person Student',
    company: 'In-Person Instruction',
    image: 'https://via.placeholder.com/100x100?text=Workshop+Student',
    testimonial: 'Chinaka created an engaging, hands-on learning environment. He was patient with questions, explained concepts clearly, and made sure we could put each lesson into practice.',
  },
];

export const stats = [
  { label: 'Years of Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Happy Clients', value: '15+' },
  { label: 'Technologies Mastered', value: '15+' },
];
