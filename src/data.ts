import { Brain, Cpu, Rocket, Briefcase, Link, Network, FileText, Blocks, Zap, Terminal, Globe, Award, GraduationCap, Users, Code, Heart, Laptop } from "lucide-react";

export const siteData = {
  hero: {
    name: "Florian Schorb",
    tagline: "AI meets Organization.",
    description: "Fokus auf Artificial Intelligence und praktische AI-Implementierung. Ich verbinde strategisches Produktmanagement mit tiefer technologischer Expertise.",
    enDescription: "Focus on Artificial Intelligence and practical AI implementation. I bridge strategic product management with deep technological expertise.",
    about: "Ich verbringe meine Zeit damit, neue AI-Tools auszuprobieren, lokale Setups zu bauen und zu verstehen, wie sich generative KI in echte Arbeitsabläufe integrieren lässt — nicht nur als Demo, sondern als Lösung mit Substanz. Parallel sammle ich erste Praxiserfahrung in einer SAP-Migration im Bereich Change Management.",
    enAbout: "I spend my time trying out new AI tools, building local setups, and understanding how generative AI can be integrated into real workflows — not just as a demo, but as a solution with substance. At the same time, I am gaining my first practical experience in an SAP migration in the area of Change Management."
  },
  experience: [
    {
      role: "Working Student - Change Management SAP S/4HANA",
      enRole: "Working Student - Change Management SAP S/4HANA",
      company: "B. Braun Gruppe",
      enCompany: "B. Braun Group",
      date: "Okt. 2025 – Heute",
      enDate: "Oct. 2025 – Present",
      description: "Unterstützung des SAP Change Managements durch die Erstellung von Trainings- und Kommunikationsmedien, inklusive digitaler On-Screen-Hilfen via WalkMe und multimedialem Content. Teilzeit (Hybrid).",
      enDescription: "Supporting SAP Change Management by creating training and communication materials, including digital on-screen support via WalkMe and multimedia content. Part-time (Hybrid).",
      icon: Briefcase
    },
    {
      role: "Bachelor Thesis - Change Management in IT",
      enRole: "Bachelor Thesis - Change Management in IT",
      company: "B. Braun Gruppe",
      enCompany: "B. Braun Group",
      date: "Feb. 2025 – Aug. 2025",
      enDate: "Feb. 2025 – Aug. 2025",
      description: "Entwicklung von Handlungsempfehlungen für erfolgreiches Change Management in der IT. Abschlussnote: 1,5. Kernkompetenzen: Change Communications, Organisationsänderung. Vollzeit (Tuttlingen).",
      enDescription: "Development of actionable recommendations for successful change management in IT. Final Grade: 1.5. Core competencies: Change Communications, Organizational Change. Full-time (Tuttlingen).",
      icon: GraduationCap
    },
    {
      role: "Internship - Product Management",
      enRole: "Internship - Product Management",
      company: "Marquardt Gruppe",
      enCompany: "Marquardt Group",
      date: "Sept. 2023 – Feb. 2024",
      enDate: "Sep. 2023 – Feb. 2024",
      description: "Praktikum mit Fokus auf Zeitmanagement und KI Prompting zur Automatisierung von Standardprozessen mittels KI-Tools zur Effizienzsteigerung sowie Mitwirkung bei Markteinführungen. (Rietheim-Weilheim).",
      enDescription: "Internship focused on time management and AI prompting to automate standard processes via AI tools for efficiency optimization, and participation in market launches. (Rietheim-Weilheim).",
      icon: Briefcase
    },
    {
      role: "Studienbotschafter",
      enRole: "Student Ambassador",
      company: "Hochschule Furtwangen",
      enCompany: "Furtwangen University",
      date: "März 2022 – Aug. 2023",
      enDate: "Mar. 2022 – Aug. 2023",
      description: "Vertretung der Hochschule bei externen Schul- und Messeveranstaltungen, Unterstützung von Professoren, Aktivitäten mit zu besuchenden Schülern und Firmen. Kernkompetenzen: Messeaussteller, Kommunikation. Teilzeit.",
      enDescription: "Representing the university at external school and trade fair events, supporting professors, coordinating activities for visiting students and target companies. Core competencies: Trade fair exhibitor, communication. Part-time.",
      icon: Users
    }
  ],
  education: [
    {
      degree: "Master of Science (M.Sc.)",
      enDegree: "Master of Science (M.Sc.)",
      field: "Digital Business & Management",
      enField: "Digital Business & Management",
      institution: "Hochschule Albstadt-Sigmaringen",
      enInstitution: "Albstadt-Sigmaringen University",
      timeline: "Sept. 2025 – Heute",
      enTimeline: "Sept. 2025 – Present",
      description: "Fokus auf digitale Geschäftsmodelle, strategisches Management, Digital Change Management sowie innovative Business-Lösungen.",
      enDescription: "Focusing on digital business models, strategic management, digital change management, and innovative business solutions."
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      enDegree: "Bachelor of Science (B.Sc.)",
      field: "IT-Produktmanagement (Fokus auf Sozioinformatik)",
      enField: "IT Product Management (Focus on Socio-Informatics)",
      institution: "Hochschule Furtwangen",
      enInstitution: "Furtwangen University",
      timeline: "Sept. 2021 – Aug. 2025",
      enTimeline: "Sept. 2021 – Aug. 2025",
      description: "Schnittstelle zwischen Produktkonzeption, Software Engineering und IT-Prozessen. Erfolgreicher Abschluss mit der Bachelorarbeit zum Thema Change Management.",
      enDescription: "Bridging product creation, innovative software engineering, and agile IT processes. Completed with a bachelor's thesis focusing on IT change management."
    }
  ],
  certificates: [
    {
      name: "Professional Scrum Product Owner™ I (PSPO I)",
      enName: "Professional Scrum Product Owner™ I (PSPO I)",
      issuer: "Scrum.org",
      date: "Dez. 2025",
      enDate: "Dec. 2025",
      description: "Validiert die Kompetenz in der Product Owner Rolle und die Anwendung von Scrum zur Maximierung des Produktwerts. Fokus auf die Optimierung des Return on Investment (ROI) und das effektive Management der Total Cost of Ownership (TCO).",
      enDescription: "Validates competence in the Product Owner role and the application of Scrum to maximize product value. Focus on optimizing Return on Investment (ROI) and effectively managing Total Cost of Ownership (TCO).",
      link: "https://www.credly.com/badges/4837c5c1-633e-44b5-ad0a-ddc5528aae0a/linked_in_profile",
      icon: Award
    },
    {
      name: "Certified WalkMe Builder Level I",
      enName: "Certified WalkMe Builder Level I",
      issuer: "WalkMe",
      date: "Nov. 2025 – Nov. 2027",
      enDate: "Nov. 2025 – Nov. 2027",
      description: "Versiert in der Erstellung und Verwaltung von Digital Adoption Solutions, einschließlich Smart Walk-Thrus, Segmentierung, UX-Optimierung und Analytics. Kernkompetenzen: Analytische Fähigkeiten, UX-Design.",
      enDescription: "Proficient in building and managing Digital Adoption Solutions, including Smart Walk-Thrus, segmentation, UX optimization, and analytics. Core competencies: Analytical skills, UX Design.",
      link: "https://www.walkme.com",
      icon: Award
    }
  ],
  focus: [
    {
      title: "Akademischer Hintergrund",
      enTitle: "Academic Background",
      description: "Verbindung aus B.Sc. IT-Produktmanagement (HFU) und dualem M.Sc. Wirtschaftsingenieurwesen (DHBW).",
      enDescription: "Combining a B.Sc. in IT Product Management (HFU) and cooperative M.Sc. in Industrial Engineering (DHBW).",
      icon: GraduationCap,
    },
    {
      title: "Fokus AI",
      enTitle: "AI Focus",
      description: "Strategische Evaluierung und Implementierung von Large Language Models.",
      enDescription: "Strategic evaluation and implementation of Large Language Models.",
      icon: Brain,
    },
    {
      title: "Local AI & Infrastruktur",
      enTitle: "Local AI & Infrastructure",
      description: "Datenhoheit und Privacy-First Ansätze durch lokale Open-Source Modelle.",
      enDescription: "Data sovereignty and privacy-first approaches via local open-source models.",
      icon: Cpu,
    },
    {
      title: "Praxis: SAP-Migration",
      enTitle: "Practice: SAP Migration",
      description: "Change Management und komplexe Prozessstrukturen in Großprojekten.",
      enDescription: "Change management and complex process structures in large-scale projects.",
      icon: Rocket,
    }
  ],
  projects: [
    {
      title: "Vault Linker – AI-gestützte Notizverknüpfung",
      enTitle: "Vault Linker – AI-Powered Note Linking",
      description: "Eigenes Python-Tool (CLI & lokales Webinterface), das Markdown-Vaults analysiert und semantisch verwandte Notizen über Embeddings (nomic-embed-text) verknüpft. Nutzt lokales ChromaDB zur Vektorsuche und ein LLM zur Themenextraktion. Komplett offline lauffähig. Beschleunigt das Auffinden von Querverbindungen in großen Wissensdatenbanken (Zettelkasten).",
      enDescription: "Custom Python tool (CLI & local web interface) that analyzes Markdown vaults and links semantically related notes via embeddings (nomic-embed-text). Uses local ChromaDB for vector search and an LLM for topic extraction. Fully offline capable. Accelerates finding cross-connections in large knowledge bases (Zettelkasten).",
      tags: ["Python", "Streamlit", "ChromaDB", "Ollama", "Embeddings"],
      status: "In Progress",
      enStatus: "In Progress",
      icon: Link,
      image: "/images/vault_linker.png"
    },
    {
      title: "NotebookLM – Obsidian Learning Pipeline",
      enTitle: "NotebookLM – Obsidian Learning Pipeline",
      description: "Workflow-Integration: Export von Meeting-Transkripten und fachlichen Dokumentationen aus Obsidian in Google NotebookLM zur automatisierten Erstellung von Audio-Inhalten, FAQs und Lern-Podcasts. Optimiert die Informationsaufnahme und das Onboarding von neuen Themenkomplexen.",
      enDescription: "Workflow integration: Exporting meeting transcripts and technical documentations from Obsidian to Google NotebookLM for automated creation of audio content, FAQs, and learning podcasts. Optimizes information absorption and onboarding for new topic areas.",
      tags: ["NotebookLM", "Obsidian", "Workflow Automation", "Audio Generation"],
      status: "Live",
      enStatus: "Live",
      link: "https://github.com/Floucs/notebooklm-obsidian-pipeline",
      icon: Network,
      image: "/images/notebook_pipeline.png"
    },
    {
      title: "Local AI Dokumentenklassifizierung",
      enTitle: "Local AI Document Classification",
      description: "Vollständig lokale Dokumentenverarbeitung mit Paperless-ngx und Paperless-AI. Klassifizierung auf Deutsch und Englisch über ein lokal laufendes Open-Source Language Model (Qwen) — ohne Cloud, ohne Datenweitergabe. Vollständig DSGVO-konform. Zeigt wie AI-gestützte Dokumentenverarbeitung ohne Vendor-Abhängigkeit funktioniert.",
      enDescription: "Fully local document processing with Paperless-ngx and Paperless-AI. Classification in German and English via a locally running open-source language model (Qwen) — no cloud, no data sharing. Fully GDPR-compliant. Demonstrates how AI-powered document processing works without vendor dependency.",
      tags: ["Paperless-ngx", "Ollama", "Qwen Local LLM", "Docker", "Self-hosted"],
      status: "Dokumentation coming soon",
      enStatus: "Documentation coming soon",
      icon: FileText,
      image: "/images/local_classification.png"
    },
    {
      title: "Change Management Prompt Library",
      enTitle: "Change Management Prompt Library",
      description: "Eigenständig konzipierte, browserbasierte Prompt-Bibliothek für Change Management in Großprojekten. Strukturiert über 25+ kuratierte Prompts in Kategorien wie Communication, Stakeholder Engagement, Training, Assessment und Coaching. Komplett vendor-neutral, lokal lauffähig. Entstand aus der SAP-Migration.",
      enDescription: "Self-designed, browser-based prompt library for change management in large-scale projects. Structured with 25+ curated prompts across categories such as communication, stakeholder engagement, training, assessment, and coaching. Fully vendor-neutral, runs locally. Emerged from the SAP migration.",
      tags: ["HTML/CSS/JS", "Prompt Engineering", "Change Management", "LocalStorage"],
      status: "Im produktiven Einsatz",
      enStatus: "In productive use",
      icon: Blocks,
      image: "/images/prompt_library.png"
    }
  ],
  skills: [
    {
      category: "Soft Skills",
      enCategory: "Soft Skills",
      items: ["Kommunikationsstärke", "Teamplayer", "Ergebnisorientiert"],
      enItems: ["Communicative", "Team Player", "Results-driven"],
      icon: Users
    },
    {
      category: "Productivity & Analytics",
      enCategory: "Productivity & Analytics",
      items: ["MS Office 365 (Experte)", "ClickUp & Jira", "Google Analytics", "f4analyse & f4transkript", "Obsidian"],
      enItems: ["MS Office 365 (Expert)", "ClickUp & Jira", "Google Analytics", "f4analyse & f4transkript", "Obsidian"],
      icon: Laptop
    },
    {
      category: "Programming",
      enCategory: "Programming",
      items: ["Java (Fortgeschritten)", "AI Pair Programming (Fortgeschritten)", "Git / GitHub", "C# & C++ (Grundkenntnisse)"],
      enItems: ["Java (Intermediate)", "AI Pair Programming (Advanced)", "Git / GitHub", "C# & C++ (Basic knowledge)"],
      icon: Code
    },
    {
      category: "Generative AI",
      enCategory: "Generative AI",
      items: ["Prompt Engineering", "Local LLM Deployment", "SAP WalkMe (Digital Adoption Solution)"],
      enItems: ["Prompt Engineering", "Local LLM Deployment", "SAP WalkMe (Digital Adoption Solution)"],
      icon: Brain
    },
    {
      category: "Sprachen",
      enCategory: "Languages",
      items: ["Deutsch (Muttersprache)", "Englisch (Fortgeschritten B2/C1)"],
      enItems: ["German (Native)", "English (Advanced B2/C1)"],
      icon: Globe
    },
    {
      category: "Interessen",
      enCategory: "Interests",
      items: ["AI", "Fitness", "Schwimmen", "Scuba Diving", "Home Automation"],
      enItems: ["AI", "Fitness", "Swimming", "Scuba Diving", "Home Automation"],
      icon: Heart
    }
  ]
};
