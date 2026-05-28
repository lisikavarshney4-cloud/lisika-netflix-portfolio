import { TimelineItem } from '../types';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';

// --- SKILLS & TOOLS ---
export const skillsData = [
    { name: "Social Media Strategy", category: "Strategy Suite", description: "Platform calendars, positioning, audience flow, and growth systems.", icon: "FaChartLine", color: "#ff00cc" },
    { name: "Content Creation", category: "Strategy Suite", description: "Reels, shoots, hooks, captions, and visual storytelling.", icon: "FaVideo", color: "#ff00cc" },
    { name: "Marketing Analytics", category: "Strategy Suite", description: "Performance reading, content iteration, and monthly insights.", icon: "FaChartBar", color: "#ff00cc" },
    { name: "Brand Management", category: "Strategy Suite", description: "Voice, visuals, campaigns, and consistent digital presence.", icon: "FaAward", color: "#ff00cc" },
    { name: "PR & Communication", category: "Strategy Suite", description: "Community handling, outreach, and brand relationship support.", icon: "FaComments", color: "#ff00cc" },
    { name: "Visual Direction", category: "Strategy Suite", description: "Canva-led design systems, moodboards, and campaign assets.", icon: "FaPaintBrush", color: "#ff00cc" },

    { name: "Canva Pro", category: "Creative Arsenal", description: "My Hero: Elite visual asset generation", icon: "FaPencilRuler", color: "#00C4CC" },
    { name: "Premiere Pro", category: "Creative Arsenal", description: "High-end cinematic video editing", icon: "FaFilm", color: "#9999FF" },
    { name: "CapCut", category: "Creative Arsenal", description: "Viral vertical video clipping & hooks", icon: "FaVideo", color: "#FFFFFF" },
    { name: "VN Editor", category: "Creative Arsenal", description: "Mobile-first seamless video cuts", icon: "FaVideo", color: "#FFDD00" },
    { name: "Inkscape", category: "Creative Arsenal", description: "Precision vector graphic rendering", icon: "FaPencilRuler", color: "#FFFFFF" },

    { name: "ChatGPT Plus", category: "Secret Arsenal", description: "Expert prompt engineering & copy", icon: "FaRobot", color: "#10A37F" },
    { name: "Google Gemini", category: "Secret Arsenal", description: "Multimodal AI content generation", icon: "FaGoogle", color: "#8E7FFA" },
    { name: "VS Code", category: "Secret Arsenal", description: "Development environment & scripting", icon: "FaCode", color: "#007ACC" },
    { name: "Anti-Gravity", category: "Secret Arsenal", description: "Top secret workflow automation", icon: "FaRocket", color: "#FF00CC" },

    { name: "Gemini Advanced", category: "Google AI Mastery", description: "Multimodal reasoning & elite content", icon: "FaGoogle", color: "#8E7FFA" },
    { name: "Vertex AI", category: "Google AI Mastery", description: "Enterprise-level machine learning", icon: "FaCloud", color: "#4285F4" },
    { name: "TensorFlow", category: "Google AI Mastery", description: "Neural network architecture", icon: "FaProjectDiagram", color: "#FF6F00" },
    { name: "AI Studio", category: "Google AI Mastery", description: "Rapid prompt prototyping & API", icon: "FaRobot", color: "#34A853" },
    { name: "Gemma Models", category: "Google AI Mastery", description: "State-of-the-art open weights", icon: "FaBrain", color: "#EA4335" }
];

// --- PROJECTS ---
export const projectsData = [
    {
        title: "Chef Sunil Chauhan — Instagram Engine",
        subtitle: "Organic Social Growth & Direct Narrative Strategy",
        description: "Orchestrated full-scale Instagram channel content mapping. Authored highly optimized hooks, captions, and deep-behind-the-scenes multi-series video scripts focusing on unique culinary recipes, masterclasses, and tactical audience growth channels.",
        techUsed: ["Content Creation", "Social Media Strategy", "Visual Direction"],
        image: "", 
        metrics: ["150+ Strategic Posts", "738+ Organic Followers Active", "151+ Targeted Following Network"],
        slug: "instagram-management"
    },
    {
        title: "Chef Sunil Chauhan — LinkedIn Engine",
        subtitle: "Executive Thought Leadership & Identity Architecture",
        description: "Curated premium industry positioning to frame Chef Sunil Chauhan as a leading culinary voice and innovator. Designed high-impact profile layout structures and engineered deep thought-provoking text assets regarding kitchen culture and culinary systems.",
        techUsed: ["Social Media Strategy", "PR & Communication", "Brand Management"],
        image: "",
        metrics: ["500+ Qualified Connections", "Consistent Thought Leadership", "Strong Audience Engagement"],
        slug: "linkedin-management"
    },
    {
        title: "Ingri at Museo — Brand Suite Design",
        subtitle: "Hospitality Print & Digital Menu Architecture",
        description: "Coordinated directly with operational luxury food groups and public relations boards to manage seasonal digital visibility. Designed customized, high-aesthetic restaurant presentation items, including the Ingri Festive Menu and Valentine's Menu suites.",
        techUsed: ["Visual Direction", "Brand Management", "PR & Communication"],
        image: "",
        metrics: ["Aesthetic Menu Layout systems", "Daily Brand Activity Monitoring", "PR Alignment Validated"],
        slug: "menu-design"
    }
];

// --- TIMELINE (Your Complete Career Seasons) ---
export const timelineData: TimelineItem[] = [
    {
        timelineType: 'work',
        name: 'Chef Sunil Chauhan (Ingri at Museo)',
        title: 'Personal Brand & Social Media Management',
        techStack: 'Instagram, LinkedIn, Video Production, Brand Storytelling, PR',
        summaryPoints: [
            'Managing social media platforms including Instagram and LinkedIn.',
            'Assisting in video shoots, content production, and video editing for social media content.',
            'Developing content ideas and executing brand storytelling strategies.',
            'Handling audience engagement, DMs, and community interaction.',
            'Supporting PR image building and brand visibility.'
        ],
        dateRange: 'Sep 2025 – Present'
    },
    {
        timelineType: 'work',
        name: 'Ingri at Museo, Gurgaon',
        title: 'Brand & Social Media Management Associate',
        techStack: 'PR Alignment, Campaign Promotion, Menu Design',
        summaryPoints: [
            'Coordinating with PR and Social Media teams for brand promotions and campaigns.',
            'Monitoring daily brand activities and maintaining a digital presence.',
            'Designing menus and supporting restaurant branding creatives.',
            'Assisting in promotional content and visual brand execution.'
        ],
        dateRange: 'Sep 2025 – Present'
    },
    {
        timelineType: 'work',
        name: 'Boomlex Technologies Private Limited',
        title: 'Digital Marketing Executive',
        techStack: 'Email Automation, SEO, Growth Marketing, WordPress',
        summaryPoints: [
            'Managed email marketing automation, investor relations, and content marketing.',
            'Optimized SEO strategies and implemented growth marketing techniques.',
            'Handled social media management and WordPress-based website content.',
            'Analyzed marketing performance and audience insights for better engagement.'
        ],
        dateRange: 'Jan 2025 – Feb 2025'
    },
    {
        timelineType: 'work',
        name: 'Boomlex Technologies Private Limited',
        title: 'Digital Marketing Intern',
        techStack: 'Product Marketing, USA Market Growth, AI Tools',
        summaryPoints: [
            'Led software product marketing and business development initiatives.',
            'Conducted investor pitching and relationship management.',
            'Developed growth hacking strategies focused on the USA market.',
            'Performed market research, planning, and business partnership outreach.',
            'Utilized AI tools to enhance digital marketing efficiency.'
        ],
        dateRange: 'Nov 2024 – Dec 2024'
    },
    {
        timelineType: 'work',
        name: 'AMIG Digital Network Private Limited',
        title: 'Digital Marketing Intern',
        techStack: 'SEO, Campaign Optimization',
        summaryPoints: [
            'Executed SEO, social media marketing, and campaign optimization.'
        ],
        dateRange: 'Aug 2024 – Oct 2024'
    },
    {
        timelineType: 'work',
        name: 'Radiant Tech Solutions',
        title: 'Business Development Intern',
        techStack: 'Process Optimization, Team Collaboration',
        summaryPoints: [
            'Collaborated with interns and teams for knowledge sharing and skill development.',
            'Streamlined internal processes to improve efficiency in business development.'
        ],
        dateRange: 'Aug 2024 – Sep 2024'
    },
    {
        timelineType: 'education',
        name: 'SOL, Delhi University',
        title: 'Bachelor of Commerce (B.Com Hons)',
        techStack: 'Business Strategy, Brand Management',
        summaryPoints: [
            'Acquired core analytical background in financial foundations and corporate positioning structures.',
            'Graduated in 2024'
        ],
        dateRange: '2021 – 2024'
    }
];

export const profileBannerData = {
    headline: "Lisika Varshney - Brand & Content Strategist",
    profileSummary: "Brand & Social Media Marketing professional with a BCom (Hons) background and deep hands-on experience in personal brand building, upscale hospitality promotion, and data-driven marketing strategy. Highly skilled in creative content architecture, short-form video execution, visual asset design, and multi-channel performance tracking.",
    resumeLink: "https://www.linkedin.com/in/lisika-varshney-4134b9313", 
    linkedinLink: "https://www.linkedin.com/in/lisika-varshney-4134b9313",
    backgroundImage: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif"
};

export const contactInfo = {
    name: "Lisika Varshney",
    title: "Brand & Content Strategist",
    summary: "Seeking creative brand building, social media performance tracking, or high-end account strategy roles.",
    companyUniversity: "Delhi University",
    linkedinLink: "https://www.linkedin.com/in/lisika-varshney-4134b9313",
    email: "lisikavarshneylv@gmail.com",
    phoneNumber: "+91 9625345112",
    profilePicture: "/images/yourpic.jpg"
};

export const certificationsData = [
    { title: "B.COM HONS DEGREE EXTENSION", issuer: "Delhi University", issuedDate: "2024", link: "https://www.linkedin.com/in/lisika-varshney-4134b9313", iconName: "googlecloud" }
];

export const blogPosts = [];
export const books = [{ title: "Atomic Habits", author: "James Clear", imgSrc: "/images/atomic_habits.jpg", description: "How small actions dictate routines." }];

export const profiles = [
    { name: "Recruiter", image: blueImage, backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif" },
    { name: "Brand & Content Strategist", image: greyImage, backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif" },
    { name: "stalker", image: redImage, backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif" },
    { name: "Adventurer", image: yellowImage, backgroundGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif" }
];

// --- MEDIA CARDS FOR THE ROWS ---
export const continueWatchingData = [
    {
        title: "Visual Gallery",
        image: "/visual-gallery/architect.png", 
        link: "/visual-gallery", 
        progress: 85
    },
    // ...
];