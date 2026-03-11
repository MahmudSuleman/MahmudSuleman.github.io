import { useState, useEffect } from 'react'
import { Linkedin, Github, Facebook } from 'lucide-react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Save theme preference and update document class
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <footer className="py-4 px-4 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Mahmud Sheikh Wunnam Suleman. All rights reserved.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-2 md:gap-4">
                <a
                  href="https://www.linkedin.com/in/mahmud-suleman-sheikh-wunnam-a38427168/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/MahmudSuleman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://web.facebook.com/mahmudsuleman.sheikhwunnam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
