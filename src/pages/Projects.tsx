const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Growth Predictor",
      description: "Built a mobile app that utilizes SwiftUI for the front end and then a Python backend with a PythonKit extension for Swift. The app displays stocks that are likely to gain value over years based on the sectors provided using a proprietary stock algorithm.",
      details: [
        "SwiftUI mobile interface with seamless user experience",
        "Python backend with proprietary stock prediction algorithm",
        "PythonKit integration for Swift-Python communication",
        "Sector-based stock analysis and recommendations"
      ],
      technologies: [
        { name: "Swift", color: "#FA7343" },
        { name: "SwiftUI", color: "#0066CC" },
        { name: "Python", color: "#3776AB" },
        { name: "PythonKit", color: "#FFD43B" }
      ],
      github: null,
      live: "https://devpost.com/software/stock-sense",
      image: "./images/proj_1.png",
      collaborators: []
    },
    {
      id: 2,
      title: "Lie Detector and Emotional Analysis Software",
      description: "Designed a website using ReactJS and Python Flask with WebSockets for real-time data streaming. Uses computer's native camera and openCV, DeepFace, and DLib library to place landmarks on faces for emotion analysis and lie detection.",
      details: [
        "Real-time facial landmark detection using DLib",
        "Emotion analysis with DeepFace and OpenCV",
        "WebSocket implementation for live data streaming",
        "ReactJS frontend with Python Flask backend"
      ],
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Python", color: "#3776AB" },
        { name: "Flask", color: "#000000" },
        { name: "OpenCV", color: "#5C3EE8" },
        { name: "WebSockets", color: "#010101" }
      ],
      github: null,
      live: "https://devpost.com/software/criminality",
      image: "./images/proj_6.jpg",
      collaborators: []
    },
    {
      id: 3,
      title: "Inventory Insights App",
      description: "Created a mobile app using SwiftUI. This app uses the iPhone camera to take in images, and then implements tesseract and OpenCV to parse the image into readable text for real-time inventory management.",
      details: [
        "Camera integration for real-time image capture",
        "Tesseract OCR for text extraction from images",
        "OpenCV for image processing and enhancement",
        "SwiftUI interface for seamless user experience"
      ],
      technologies: [
        { name: "Swift", color: "#FA7343" },
        { name: "SwiftUI", color: "#0066CC" },
        { name: "Tesseract", color: "#4285F4" },
        { name: "OpenCV", color: "#5C3EE8" }
      ],
      github: null,
      live: "https://devpost.com/software/investment-insights-app",
      image: "./images/proj_2.png",
      collaborators: []
    },
    {
      id: 4,
      title: "Personal Voice Assistant",
      description: "A Python-based voice assistant that responds to spoken commands, provides information, and performs various tasks through speech recognition and synthesis. It can do simple tasks such as tell time or date, tell you the weather, open websites, make jokes, or tell you some fun facts.",
      details: [
        "Speech recognition and voice synthesis capabilities",
        "Weather information and time/date functions",
        "Website automation and browser control",
        "Entertainment features like jokes and fun facts"
      ],
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "Speech Recognition", color: "#FF6B6B" },
        { name: "Text-to-Speech", color: "#4ECDC4" }
      ],
      github: "https://github.com/NishanthGandhe/PersonalAssistant",
      live: null,
      image: "./images/Virtual-AI-assistant.png",
      collaborators: []
    },
    {
      id: 5,
      title: "Dr.Strange Magic Hand Cam",
      description: "This project creates an interactive augmented reality (AR) application that overlays \"Doctor Strange\" style magic circles on your hands as you gesture. When you open your palm, the program displays animated magical circles that follow your hand movements.",
      details: [
        "Real-time hand gesture recognition",
        "Augmented reality magic circle overlays",
        "Computer vision for hand tracking",
        "Interactive gesture-based animations"
      ],
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "OpenCV", color: "#5C3EE8" },
        { name: "MediaPipe", color: "#0F9D58" },
        { name: "Computer Vision", color: "#FF9800" }
      ],
      github: "https://github.com/NishanthGandhe/DrStrangeMagicHands",
      live: null,
      image: "./images/strange.jpg",
      collaborators: []
    },
    {
      id: 6,
      title: "Article Reader + Q&A",
      description: "A powerful web application that allows users to extract information from online articles by asking natural language questions. The system uses advanced NLP and transformer models to understand article content and provide accurate answers.",
      details: [
        "Natural language processing for article analysis",
        "Transformer models for question answering",
        "Web scraping for article content extraction",
        "Interactive Q&A interface"
      ],
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "NLP", color: "#FF6B35" },
        { name: "Transformers", color: "#8E44AD" },
        { name: "Web Scraping", color: "#27AE60" }
      ],
      github: "https://github.com/NishanthGandhe/ArticleReader",
      live: null,
      image: "./images/article.jpg",
      collaborators: []
    },
    {
      id: 7,
      title: "PDF Reader",
      description: "A web application that allows users to upload PDF documents and ask questions about their content. The system uses natural language processing and machine learning to extract relevant answers from the documents.",
      details: [
        "PDF document processing and text extraction",
        "Machine learning for content understanding",
        "Natural language question answering",
        "Document upload and management system"
      ],
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "NLP", color: "#FF6B35" },
        { name: "PDF Processing", color: "#E74C3C" },
        { name: "Machine Learning", color: "#9B59B6" }
      ],
      github: "https://github.com/NishanthGandhe/PDFReader",
      live: null,
      image: "./images/pdfimage.png",
      collaborators: []
    },
    {
      id: 8,
      title: "HackAnimation Website",
      description: "A web application that simulates a classic \"hacking\" animation where letters randomly cycle until they match the target text. It was built with Next.js, Tailwind CSS, and uses google fonts.",
      details: [
        "Realistic hacking terminal animation effects",
        "Letter-by-letter text cycling algorithm",
        "Modern Next.js and React architecture",
        "Responsive design with Tailwind CSS"
      ],
      technologies: [
        { name: "Next.js", color: "#000000" },
        { name: "React", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "TypeScript", color: "#3178C6" }
      ],
      github: "https://github.com/NishanthGandhe/WordOuputNextJs",
      live: null,
      image: "./images/hackanimation.png",
      collaborators: []
    },
    {
      id: 9,
      title: "NLP Streamlit App",
      description: "An interactive machine learning web application that demonstrates text classification using a Naive Bayes classifier. Built with Streamlit, it provides real-time prediction interface with cross-validation metrics and model transparency.",
      details: [
        "Interactive Naive Bayes text classifier with real-time predictions",
        "Cross-validation metrics and model performance visualization",
        "Streamlit web interface with modern, responsive design",
        "Training data visualization and feature importance analysis"
      ],
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "Streamlit", color: "#FF4B4B" },
        { name: "Scikit-learn", color: "#F7931E" },
        { name: "Pandas", color: "#150458" },
        { name: "NumPy", color: "#013243" }
      ],
      github: "https://github.com/nishanthgandhe/NLPStreamlitApp",
      live: "https://nlpworkshop.streamlit.app/",
      image: "./images/nlp_streamlit.png",
      collaborators: []
    },
    {
      id: 10,
      title: "Personal Portfolio V1",
      description: "My first personal portfolio website showcasing projects and skills. Built with vanilla HTML, CSS, and JavaScript featuring responsive design, dark mode toggle, project carousel, and contact forms.",
      details: [
        "Responsive design optimized for all devices and screen sizes",
        "Dark mode toggle with smooth transitions and theme persistence",
        "Interactive project carousel with smooth animations",
        "Contact form with validation and email integration"
      ],
      technologies: [
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "Responsive Design", color: "#20B2AA" }
      ],
      github: "https://github.com/nishanthgandhe/PersonalPortfolio-1",
      live: null,
      image: "./images/portfolio_v1.png",
      collaborators: []
    },
    {
      id: 11,
      title: "XMLGenius",
      description: "A comprehensive desktop XML validation and editing application built with Electron and React frontend, powered by Python FastAPI backend. Features XML parsing, validation, repair, and tree visualization.",
      details: [
        "Desktop XML validation and editing with Electron framework",
        "React frontend with Python FastAPI backend architecture",
        "XML parsing, validation, repair, and tree visualization tools",
        "Cross-platform compatibility with modern UI design"
      ],
      technologies: [
        { name: "Electron", color: "#2B2E3A" },
        { name: "React", color: "#61DAFB" },
        { name: "Python", color: "#3776AB" },
        { name: "FastAPI", color: "#009688" },
        { name: "XML", color: "#FF6600" }
      ],
      github: "https://github.com/nishanthgandhe/XMLGenius",
      live: null,
      image: "./images/xml_genius.png",
      collaborators: []
    },
    {
      id: 12,
      title: "PowerSwim Academy",
      description: "A professional client website for PowerSwim Academy that generated thousands of dollars in revenue for the business. Features comprehensive swimming program information, multiple locations, pricing tables, and instructor profiles with modern responsive design.",
      details: [
        "Client project that generated thousands of dollars in business revenue",
        "Multi-location swimming academy with comprehensive program information",
        "Interactive pricing tables and professional instructor profile showcases",
        "Responsive design optimized for lead generation and conversions"
      ],
      technologies: [
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "Bootstrap", color: "#7952B3" }
      ],
      github: "https://github.com/nishanthgandhe/PowerSwimAcademy",
      live: "https://www.powerswimacademy.com/",
      image: "./images/powerswim.png",
      collaborators: []
    },
    {
      id: 13,
      title: "F1 Dashboard ML",
      description: "A comprehensive Formula 1 data analysis platform with interactive race analysis, tyre strategy visualization, telemetry comparison, and AI-powered strategy simulation using advanced LightGBM models with 97% accuracy.",
      details: [
        "Interactive F1 data visualization with pace analysis and gap calculations",
        "AI-powered strategy simulator using LightGBM with 97% accuracy",
        "Real-time telemetry comparison and tyre strategy analysis",
        "Comprehensive race analysis with FastF1 API integration"
      ],
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "Streamlit", color: "#FF4B4B" },
        { name: "LightGBM", color: "#02569B" },
        { name: "FastF1", color: "#FF1801" },
        { name: "Plotly", color: "#3F4F75" }
      ],
      github: "https://github.com/nishanthgandhe/F1DashboardML",
      live: "https://f1dashboardml.streamlit.app/",
      image: "./images/f1_dashboard.png",
      collaborators: []
    },
    {
      id: 14,
      title: "Marvel Rivals: Guess Who?",
      description: "A multiplayer web-based 'Guess Who?' game featuring all 42 characters from Marvel Rivals. Real-time multiplayer gameplay with Firebase, smart spell check, dual view modes, and Marvel-themed UI design.",
      details: [
        "Multiplayer gameplay with real-time synchronization using Firebase",
        "Smart spell check with fuzzy matching and 30% error tolerance",
        "Dual view modes: browse by role or alphabetically",
        "Marvel-themed UI with custom fonts and official character portraits"
      ],
      technologies: [
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "Firebase", color: "#FFCA28" },
        { name: "Tailwind CSS", color: "#06B6D4" }
      ],
      github: "https://github.com/nishanthgandhe/MarvelRivals-GuessWho",
      live: "https://nishanthgandhe.github.io/MarvelRivals-GuessWho/",
      image: "./images/marvel_rivals.png",
      collaborators: []
    },
    {
      id: 15,
      title: "CryptoPipeline",
      description: "Production-ready AI cryptocurrency prediction platform with automated ML pipeline, cloud deployment, and real-time forecasting for 22+ cryptocurrencies. Features XGBoost models with 95% success rate and comprehensive dashboard.",
      details: [
        "AI cryptocurrency prediction using XGBoost with 14+ technical indicators",
        "Production cloud deployment with microservices architecture",
        "Automated ETL pipeline with real-time data ingestion and processing",
        "Interactive dashboard with 1-30 day prediction slider and live charts"
      ],
      technologies: [
        { name: "Python", color: "#3776AB" },
        { name: "Next.js", color: "#000000" },
        { name: "XGBoost", color: "#02569B" },
        { name: "PostgreSQL", color: "#336791" },
        { name: "FastAPI", color: "#009688" },
        { name: "TypeScript", color: "#3178C6" }
      ],
      github: "https://github.com/nishanthgandhe/CryptoPipeline",
      live: "https://crypto-pipeline.vercel.app/",
      image: "./images/crypto_pipeline.png",
      collaborators: []
    }
  ];

  return (
    <section id="projects" className="bg-black flex flex-col justify-center items-center text-white py-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="text-center mb-16">
        <div className="inline-block">
          <span className="text-sm border border-gray-700/50 bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 text-gray-300 mb-6 inline-block hover:border-cyan-400/50 transition-colors duration-300">
            Explore My Creations
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Projects
          <span className="block h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded"></span>
        </h2>
      </div>

      <div className="lg:w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project bg-gray-950/90 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-600/50 hover:border-cyan-400/70 group hover:-translate-y-2"
              style={{ 
                background: 'linear-gradient(145deg, rgba(9, 9, 11, 0.9), rgba(24, 24, 27, 0.9))'
              }}
            >
              <div className="relative h-40 overflow-hidden">
                <a
                  href={project.github || project.live || '#'}
                  target={project.github || project.live ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>

              <div className="p-4 flex flex-col h-80">
                <h3 className="text-lg md:text-xl text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-3 text-xs leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                <ul className="mb-3 flex-grow">
                  {project.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-400 mb-1 flex items-start group-hover:text-gray-300 transition-colors duration-300">
                      <span className="text-cyan-400 mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-gray-600/50 hover:border-gray-400 transition-colors duration-300 bg-gray-800/50"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      ></div>
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full border border-gray-600/50 text-gray-400 bg-gray-800/30 hover:border-gray-400 hover:text-gray-300 transition-colors duration-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mt-auto">
                  {project.github && project.live ? (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-2 py-2 rounded-lg flex justify-center items-center gap-1 text-xs border border-gray-600/50 hover:bg-gray-800/70 hover:border-gray-400 transition-all duration-300 bg-gray-900/30"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-2 py-2 rounded-lg flex justify-center items-center gap-1 text-xs border border-cyan-600/70 bg-cyan-600/20 hover:bg-cyan-600/30 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-300"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.github || project.live || '#'}
                      target={project.github || project.live ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="w-full px-2 py-2 rounded-lg flex justify-center items-center gap-1 text-xs border border-gray-600/50 hover:bg-gray-800/70 hover:border-gray-400 transition-all duration-300 bg-gray-900/30"
                    >
                      {project.github ? (
                        <>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </>
                      ) : (
                        <>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-4">Want to see more of my work?</p>
          <a 
            href="https://github.com/ngandhe-school" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
