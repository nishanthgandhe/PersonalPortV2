const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm border border-gray-700/50 bg-gray-900/80 rounded-full px-4 py-2 text-gray-300 mb-6 inline-block">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About Me
            <span className="block h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded"></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-gray-300">
                Howdy! I'm a rising junior at <span className="text-cyan-400 font-medium">Texas A&M</span> pursuing a Bachelor of Science in Computer Science and a member of the <span className="text-cyan-400 font-medium">Engineering Honors Program</span>. I'm passionate about finding innovative ways for technology to address challenging real-world issues.
              </p>
              
              <p className="text-gray-300">
                I'm expanding my expertise with a minor in <span className="text-purple-400 font-medium">Statistics and AI in Business</span> to better delve into data analytics and practical applications of programming. My interests span <span className="text-purple-400 font-medium">AI</span>, <span className="text-purple-400 font-medium">cybersecurity</span>, and <span className="text-purple-400 font-medium">software development</span>.
              </p>
              
              <p className="text-gray-300">
                I've gained hands-on experience through a <span className="text-pink-400 font-medium">SWE Internship at State Farm</span>, work at <span className="text-pink-400 font-medium">Capsher Technologies</span>, an externship with <span className="text-pink-400 font-medium">Beats by Dr. Dre</span>, and a cybersecurity apprenticeship. Currently seeking internship opportunities for Fall 2025 and 2026, with plans to pursue an MBA after gaining industry experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                <div className="text-sm text-gray-400">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                <div className="text-sm text-gray-400">Professional Roles</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-pink-400 mb-2">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Tech Stack
                <span className="block h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-2 rounded"></span>
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'C/C#/C++', 'SQL', 'Swift', 'HTML','CSS'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'Angular', 'Vue.js', 'Electron', 'Node.js', 'TensorFlow', 'PyTorch', 'FastAPI', 'OpenCV', 'MediaPipe'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-purple-400 hover:text-purple-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-300 mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-3">
                    {['AWS', 'Docker', 'Git', 'MongoDB', 'PostgreSQL', 'Supabase', 'Firebase', 'Xcode'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-pink-400 hover:text-pink-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-6 rounded-lg border border-gray-700/50">
              <h4 className="text-lg font-medium text-white mb-3">Currently Focused On</h4>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning and AI', 'Cybersecurity', 'Software Engineering'].map((focus) => (
                  <span 
                    key={focus}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
