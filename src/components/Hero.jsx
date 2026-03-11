import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 opacity-30 blur-md"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-tranparent border-0 border-white dark:border-slate-900">
                <img
                  src="/profile.png"
                  alt="Mahmud Sheikh Wunnam Suleman"
                  className="w-full h-full object-cover opacity-50"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Placeholder if no image */}
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-500 to-emerald-500">
                  <span className="text-6xl md:text-8xl font-bold text-white">MS</span>
                </div>
              </div>

              {/* Decorative dots */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 dark:bg-blue-600 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-500 dark:bg-emerald-600 rounded-full opacity-20"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-2xl order-2 lg:order-2"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Mahmud Sheikh Wunnam Suleman
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Scientist & Software Engineer
            </motion.p>
            
            <motion.p 
              className="text-base md:text-lg text-slate-500 dark:text-slate-500 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Building innovative solutions across web, mobile, and enterprise systems
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-200 dark:to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-xl font-medium transition-all hover:scale-105 hover:border-slate-900 dark:hover:border-slate-100 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Get In Touch</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-0 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-slate-400 dark:text-slate-600" />
      </motion.a>
    </section>
  )
}

export default Hero
