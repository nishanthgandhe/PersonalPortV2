const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "State Farm",
      role: "Software Engineering Intern",
      period: "May 2025 - August 2025",
      location: "Remote",
      logo: "./images/statefarm.png",
      description: "Developed a full-stack app to analyze, quickly repair, and view large XML documents using Electron, React, Python, and C. Enhanced system architecture by adding a new database table and GitLab routing for cached feature flags.",
      responsibilities: [
        "Developed a full-stack app to analyze, quickly repair, and view large XML documents using Electron, React, Python, and C.",
        "Enhanced system architecture by adding a new database table and GitLab routing for cached feature flags.",
        "Delivered end-to-end software solutions by building and testing support tools for agents using Agile methodologies.",
        "Competed in an intern Capture the Flag competition where I got 2nd overall and best individual using technologies such as Wireshark, Burpsuite, Ghidra, and Cyberchef."
      ],
      type: "work"
    },
    {
      id: 2,
      company: "Aggie Data Science Club",
      role: "Workshops Officer",
      period: "January 2025 - Present",
      location: "College Station, TX",
      logo: "./images/aggie_datascience.png",
      description: "Leading technical workshops for 50-100 club members on data science, machine learning, and AI topics with hands-on activities and presentations.",
      responsibilities: [
        "Assemble and deliver workshops to 50-100 club members on data science, machine learning, and AI topics.",
        "Fostered understanding of real-world applications and implications using activities, code-alongs, and presentations."
      ],
      type: "leadership"
    },
    {
      id: 3,
      company: "PowerSwim Academy",
      role: "Website Developer & Strategic Technology Consultant",
      period: "September 2024 - August 2025",
      location: "Remote",
      logo: "./images/powerswim.png",
      description: "Architected and developed a comprehensive full-stack web platform that digitally transformed a traditional swim coaching business, enabling new revenue streams and modernizing operations through strategic technology implementation.",
      responsibilities: [
        "Designed and developed a full-stack responsive website with complete booking system, payment integration, and client management functionality using modern web technologies.",
        "Successfully digitized business operations, creating online revenue streams that generated over $1,500 in additional income during the first summer implementation.",
        "Provided strategic technology consulting to establish scalable digital infrastructure and long-term growth frameworks for future business expansion.",
        "Implemented user-friendly content management systems and automated workflows to streamline coaching operations and improve client engagement.",
        "Delivered comprehensive training and documentation to ensure seamless adoption of digital tools and sustainable business growth."
      ],
      type: "freelance"
    },
    {
      id: 4,
      company: "Beats by Dre",
      role: "Consumer Insights Data Analytics Extern",
      period: "July 2024 - September 2024",
      location: "Remote",
      logo: "./images/beats.png",
      description: "Conducted comprehensive data analysis using Python, Selenium, and AI tools to extract consumer insights and perform sentiment analysis on customer reviews.",
      responsibilities: [
        "Scripted Python code and used Selenium to scrape the web for consumer data, preparing it for analysis.",
        "Conducted an Exploratory Data Analysis and Sentiment Analysis using Pandas and Matplotlib.",
        "Used Gemini AI to extract themes from customer reviews and make API calls directly from Python."
      ],
      type: "work"
    },
    {
      id: 5,
      company: "Capsher Technology",
      role: "Software Engineering Intern",
      period: "May 2024 - July 2024",
      location: "College Station, TX",
      logo: "./images/capsher.png",
      description: "Developed full-stack solutions using Angular and C# while implementing real-time communication systems and 3D data visualization components.",
      responsibilities: [
        "Implemented a dark mode transition on a multi-layered web application using Angular Frontend and C# backend.",
        "Created pipelines to connect services asynchronously on the app using SignalR.",
        "Displayed information onto 3-dimensional graphs using a DCL input for conversions and ChartJS."
      ],
      type: "work"
    },
    {
      id: 6,
      company: "AI Mastermind",
      role: "Project Lead",
      period: "June 2023 - May 2024",
      location: "Remote",
      logo: "./images/ai_mastermind.png",
      description: "Led development of multiple AI chatbots and machine learning projects, utilizing transformer models and fine-tuning techniques for various applications.",
      responsibilities: [
        "Created multiple AI chatbots to replicate JARVIS, analyze Supreme Court cases, rate movies based on the IMDB Database, and Q&A bots that can read and understand PDFs and online articles.",
        "Used transformer models, such as BERT, and trained and fine-tuned OpenAI and other Hugging Face models using Colab."
      ],
      type: "project"
    },
    {
      id: 7,
      company: "Live Labs",
      role: "Video Game & Gamification Research Student",
      period: "September 2023 - May 2024",
      location: "College Station, TX",
      logo: "./images/tamu_research.png",
      description: "Conducted research on educational applications of video games and gamification, developing prototypes and analyzing data to enhance learning outcomes.",
      responsibilities: [
        "Created AI-driven data analysis initiatives to convert raw research data into valuable insights.",
        "Investigated how video games, simulations, and gamification may be used to enhance learning at various educational levels.",
        "Actively participated in developing small-scale instructional video game prototypes using Python and C#."
      ],
      type: "research"
    },
    {
      id: 8,
      company: "Texas A&M University Cybersecurity Center",
      role: "Cybersecurity Student Technician",
      period: "December 2023 - Present",
      location: "College Station, TX",
      logo: "./images/tamu_cyber.png",
      description: "Working with enterprise-grade security tools to monitor network threats, analyze protocols, and develop custom security queries for threat detection.",
      responsibilities: [
        "Assisted in programs to analyze the frequency of various application protocols on the network and their locations.",
        "Used Crowdstrike Falcon to maintain and assess real-time alerts shown on the network.",
        "Developed custom parameters and queries on Extrahop and Elastic to analyze threats."
      ],
      type: "work"
    }
  ];

  return (
    <section 
      id="experience" 
      className="bg-black flex flex-col items-center justify-center text-neutral-100 min-h-auto py-16 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full text-center">
        <div className="flex flex-col items-center justify-center mb-8">
          <p className="inline-block text-sm border border-neutral-700/50 bg-neutral-900/80 rounded-full px-4 py-2 items-center gap-1 relative mb-6 mx-auto backdrop-blur-sm">
            <span className="text-neutral-300">My Career Overview</span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Work Experience
            <span className="block h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded"></span>
          </h2>
        </div>

        <div className="timeline-dark w-full max-w-5xl mx-auto">
          <div className="w-full bg-black font-sans md:px-10">
            <div className="relative max-w-7xl mx-auto pb-20">
              
              {experiences.map((exp) => (
                <div key={exp.id} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-white border border-neutral-300 p-2"></div>
                    </div>
                    
                    <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                      <span className="text-neutral-200 font-medium text-lg">{exp.company}</span>
                    </h3>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                    <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                      <span className="text-neutral-200 font-medium text-lg">{exp.company}</span>
                    </h3>

                    <div className="ml-8 mt-2 mb-8">
                      <div className="flex items-start">
                        <div className="timeline-wrapper">
                          <div className="w-1 h-full"></div>
                        </div>
                        <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                          <div>
                            <h1 className="font-semibold text-3xl text-white">{exp.role}</h1>
                            <p className="my-5 text-gray-300">
                              �️ {exp.period}
                            </p>
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-gray-300">
                              {exp.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="text-lg">{responsibility}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div 
                className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-0% via-neutral-400 to-transparent to-99% opacity-80"
                style={{ 
                  height: `${experiences.length * 500 + 400}px`,
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
                }}
              >
                <div 
                  className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
                  style={{ height: '0px', opacity: 0 }}
                ></div>
              </div>
            </div>
            
            <div className="w-full max-w-4xl mx-auto mt-20 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Education</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded"></div>
              </div>
              
              <div className="group relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Bachelor of Science in Computer Science
                  </h4>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="text-sm">Aug 2023 - May 2027</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span className="text-sm">College Station, TX</span>
                    </div>
                  </div>
                </div>
                
                <h5 className="text-xl text-white font-semibold mb-2 text-left">Texas A&M University</h5>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <p className="text-white/70">Minors in Statistics and AI in Business</p>
                  <p className="text-white/70">GPA: 4.0/4.0</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300">
                    3x Dean's Honor Roll
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300">
                    Engineering Honors Member
                  </span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <p className="text-gray-300 mb-4">Want to see my complete professional background?</p>
              <a 
                href="/Nishanth_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
