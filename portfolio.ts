import { PortfolioData } from '../types';

/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION — SHIVENDRA PANDEY
 * ============================================================================
 * 
 * B.Tech Student | Python & DSA Learner | Aspiring AI/ML Engineer
 * GL Bajaj Institute of Technology and Management, Greater Noida
 */

export const portfolioData: PortfolioData = {
  // --------------------------------------------------------------------------
  // 1. Personal Identity & Overview
  // --------------------------------------------------------------------------
  personal: {
    name: "Shivendra Pandey",
    title: "B.Tech Student | Python & DSA Learner | Aspiring AI/ML Engineer",
    headline: "B.Tech Student | Python & DSA Learner | Aspiring AI/ML Engineer",
    shortBio:
      "I'm a second-year B.Tech student passionate about programming, problem-solving, and artificial intelligence. I'm strengthening my Python skills through Data Structures and Algorithms while exploring projects that combine technology with practical solutions. My goal is to become an AI/ML Engineer and build intelligent applications that make a difference.",
    longBio: [
      "I'm Shivendra Pandey, a second-year B.Tech student at GL Bajaj Institute of Technology and Management, Greater Noida.",
      "I'm currently practicing Python and strengthening my problem-solving abilities through Data Structures and Algorithms.",
      "I'm interested in Artificial Intelligence and Machine Learning and enjoy exploring ideas for applications that can solve real-world problems. My projects and ideas include Safe Tour OS, a tourist safety assistance concept; a personal AI assistant for information and basic PC task automation; and small games that help me practice programming.",
      "My long-term goal is to become an AI/ML Engineer. I'm focused on improving my programming fundamentals, learning continuously, and building useful projects as I grow."
    ],
    college: "GL Bajaj Institute of Technology and Management, Greater Noida",
    year: "Second year of B.Tech",
    careerGoal: "Become an AI/ML Engineer",
    location: "Greater Noida, Uttar Pradesh, India",
    status: "Second-year B.Tech Student • Open to Learning & Collaboration",
    isAvailable: true,
    email: "shivendrapandey115@gmail.com",
    github: "https://github.com/shivendrapandey115-create",
    linkedin: "https://www.linkedin.com/in/shivendra-pandey-6b387230a",
    twitter: "",
    resumeUrl: "", // Resume not yet provided; hidden cleanly
    avatarUrl: "/profile.png",
  },

  // --------------------------------------------------------------------------
  // 2. About Me: Core Pillars & Key Highlights
  // --------------------------------------------------------------------------
  about: {
    philosophy: [
      {
        title: "Strengthening Programming Fundamentals",
        description: "Focusing deeply on Python programming, Data Structures, and Algorithms to build a resilient problem-solving mindset.",
        icon: "Layers",
      },
      {
        title: "Technology for Practical Solutions",
        description: "Exploring project ideas like Safe Tour OS to see how software, geolocation, and emergency assistance can address real-world needs.",
        icon: "Zap",
      },
      {
        title: "Continuous Learning Toward AI/ML",
        description: "Pursuing a deliberate path toward Artificial Intelligence and Machine Learning by mastering logic, mathematics, and code step-by-step.",
        icon: "Target",
      },
    ],
    highlights: [
      {
        label: "Current Education",
        value: "2nd Year B.Tech",
        subtext: "GL Bajaj ITM, Greater Noida",
      },
      {
        label: "Current Practice",
        value: "Python & DSA",
        subtext: "Data structures & problem solving",
      },
      {
        label: "Career Goal",
        value: "AI/ML Engineer",
        subtext: "Intelligent applications",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 3. Technical Skills (Accurate Learning Representation — No fake percentages)
  // --------------------------------------------------------------------------
  skillCategories: [
    {
      id: "programming-dsa",
      name: "Programming & Data Structures",
      description: "Core languages and algorithmic concepts currently under active study and practice.",
      skills: [
        {
          name: "Python",
          iconName: "FileCode2",
          level: "Currently practicing",
          description: "Writing scripts, practicing syntax, control flow, functions, and logic",
        },
        {
          name: "Data Structures and Algorithms",
          iconName: "Layers",
          level: "Practicing with Python",
          description: "Arrays, lists, searching, sorting, and algorithmic problem-solving",
        },
      ],
    },
    {
      id: "ai-ml-interest",
      name: "Artificial Intelligence & Machine Learning",
      description: "Primary academic interests and long-term engineering career objectives.",
      skills: [
        {
          name: "Artificial Intelligence",
          iconName: "Cpu",
          level: "Area of interest",
          description: "Exploring AI concepts, intelligent systems, and practical applications",
        },
        {
          name: "Machine Learning",
          iconName: "Network",
          level: "Career learning goal",
          description: "Studying foundational principles, models, and real-world problem formulations",
        },
      ],
    },
    {
      id: "tools",
      name: "Tools & Development Environment",
      description: "Development tools used for code management and learning workflows.",
      skills: [
        {
          name: "Git & GitHub",
          iconName: "GitBranch",
          level: "Version Control",
          description: "Repository management, tracking code history, and project commits",
        },
        {
          name: "VS Code / Python IDE",
          iconName: "TerminalSquare",
          level: "Development Environment",
          description: "Code editing, debugging, script execution, and workspace setup",
        },
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 4. Featured Projects (Safe Tour OS, Personal AI Assistant, Small Python Games)
  // --------------------------------------------------------------------------
  projects: [
    {
      id: "safe-tour-os",
      title: "Safe Tour OS",
      category: "Tourist Safety and Emergency Assistance",
      statusBadge: "Prototype in development",
      featured: true,
      previewVariant: "safetour",
      shortDescription:
        "A tourist safety system concept designed to help tourists seek assistance when they feel unsafe or encounter emergency situations.",
      fullDescription:
        "Safe Tour OS is a tourist safety system concept designed to help tourists seek assistance when they feel unsafe or face a dangerous situation. The proposed system allows tourists to log in to a web platform and grant the necessary permissions. When a tourist encounters an emergency, they can use an SOS button on the website to request help. The concept includes sharing the tourist's location so that nearby relevant authorities, such as the nearest police station, can be identified and contacted for assistance.",
      technologies: ["Python", "Web Architecture Concept", "Geolocation Workflow", "Emergency Assistance"],
      keyFeatures: [
        "Tourist login through a web platform",
        "Permission-based access to relevant information, including location",
        "An SOS button for emergency assistance",
        "Location sharing during an SOS request",
        "A proposed process for identifying and contacting nearby authorities",
      ],
      plannedFeatures: [
        "Interactive map preview of nearby verified emergency contact points",
        "SMS and push alert relay prototypes",
        "Multilingual interface for international tourists",
      ],
      architecture: [
        "User Interface: Web portal for tourist authentication and SOS triggering",
        "Permission Layer: Explicit user consent for location capture and emergency contact",
        "Coordination Concept: Matching user geolocation coordinates with nearest authority dispatch points",
      ],
      disclaimer:
        "Note: Safe Tour OS is a project concept and prototype in development. Authority coordination, police station identification, and emergency response workflows represent the proposed architectural design and are not yet connected to active public emergency services.",
      metrics: [
        { label: "Status", value: "In Development" },
        { label: "Concept", value: "Tourist Safety" },
        { label: "Trigger", value: "SOS Button" },
      ],
      githubUrl: "https://github.com/shivendrapandey115-create",
    },
    {
      id: "personal-ai-assistant",
      title: "Personal AI Assistant",
      category: "Personal AI Assistant",
      statusBadge: "Concept & Early Prototype",
      featured: true,
      previewVariant: "ai-assistant",
      shortDescription:
        "An AI chatbot concept inspired by conversational assistants, designed to answer questions, provide information, and explore basic PC software task assistance.",
      fullDescription:
        "My personal AI assistant is an AI chatbot concept inspired by conversational assistants such as ChatGPT. Its purpose is to answer questions, provide useful information, and help me manage basic applications and software tasks on my PC.",
      technologies: ["Python", "Conversational AI Concept", "Natural Language Processing", "Automation Logic"],
      keyFeatures: [
        "Answer questions and provide information through conversation",
        "Assist with basic PC application and software tasks",
        "Explore ways to make everyday computer use more convenient",
      ],
      plannedFeatures: [
        "Script-based shortcuts for frequently used desktop applications",
        "Voice input interface and synthesis exploration",
        "Custom knowledge retrieval for programming notes and cheat sheets",
      ],
      architecture: [
        "Dialogue Core: Natural conversational interaction model",
        "Task Dispatcher Concept: Mapping natural language requests to predefined safe PC utility scripts",
        "Knowledge Layer: Quick reference and study information retrieval",
      ],
      disclaimer:
        "Note: This is an early concept and learning project. System-level PC automation and task management are exploratory milestones currently under development.",
      metrics: [
        { label: "Role", value: "AI Assistant" },
        { label: "Format", value: "Conversational" },
        { label: "Status", value: "Early Prototype" },
      ],
      githubUrl: "https://github.com/shivendrapandey115-create",
    },
    {
      id: "small-python-games",
      title: "Small Python Games",
      category: "Programming Practice",
      statusBadge: "Programming Practice",
      featured: true,
      previewVariant: "python-games",
      shortDescription:
        "A suite of logic games in Python—including Tic-Tac-Toe, Guessing Game, and Snake Game—built to strengthen programming fundamentals.",
      fullDescription:
        "These small games are programming practice projects that help me develop my Python skills, improve my logical thinking, and strengthen my understanding of programming fundamentals.",
      technologies: ["Python", "Control Flow", "Game Loops", "Problem Solving", "Data Structures"],
      keyFeatures: [
        "Tic-Tac-Toe — Two-player grid logic, win-condition validation, and turn management",
        "Guessing Game — Random number generation, condition loops, and interactive feedback",
        "Snake Game — Game loop concepts, coordinate tracking, and collision detection logic",
      ],
      plannedFeatures: [
        "Score tracking and high-score persistence using file I/O",
        "GUI implementations using Tkinter or Pygame as learning advances",
        "AI opponent algorithms (e.g. minimax for Tic-Tac-Toe)",
      ],
      architecture: [
        "Implementation: Python 3 scripts emphasizing clean control flow and function modularity",
        "Logic Focus: State management, grid coordinate calculations, and conditional evaluations",
        "Purpose: Deliberate practice to build strong algorithmic fluency",
      ],
      disclaimer:
        "Note: These are console and script-based practice projects built during active Python study to reinforce programming fundamentals.",
      metrics: [
        { label: "Projects", value: "3 Games" },
        { label: "Language", value: "Python 3" },
        { label: "Focus", value: "Logic & DSA" },
      ],
      githubUrl: "https://github.com/shivendrapandey115-create",
    },
  ],

  // --------------------------------------------------------------------------
  // 5. Work Experience (Kept empty to avoid fabricated claims)
  // --------------------------------------------------------------------------
  experience: [],

  // --------------------------------------------------------------------------
  // 6. Education (Accurate College & B.Tech Details)
  // --------------------------------------------------------------------------
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech)",
      institution: "GL Bajaj Institute of Technology and Management",
      location: "Greater Noida, Uttar Pradesh, India",
      period: "Second Year (Pursuing)",
      currentYear: "Second year",
      details: [
        "Currently in the second year of B.Tech, building core computer science and engineering competencies.",
        "Actively practicing Python programming and strengthening problem-solving skills through Data Structures and Algorithms.",
        "Exploring Artificial Intelligence and Machine Learning concepts as a primary career learning goal.",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 7. Site Controls & Display Toggles
  // --------------------------------------------------------------------------
  settings: {
    showExperience: false, // No fabricated experience; student focused on education & projects
    showEducation: true,   // Display GL Bajaj ITM education details
    enableContactForm: true,
  },
};
