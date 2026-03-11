import { motion } from 'framer-motion'
import { MapPin, Languages, GraduationCap } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
  ]

  const highlights = [
    { icon: MapPin, label: 'Location', value: 'Accra, Ghana' },
    { icon: Languages, label: 'Languages', value: 'English, Twi, Dagbani' },
    { icon: GraduationCap, label: 'Current', value: 'MPhil in Computer Science' },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <GraduationCap className="w-5 h-5 text-blue-500 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-sm xl:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                I am a passionate Computer Scientist and Software Engineer with extensive experience 
                in developing innovative solutions across web, mobile, and enterprise systems. Currently 
                pursuing my MPhil in Computer Science at the University of Ghana.
              </p>
              <p className="text-sm xl:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                My expertise spans full-stack development, mobile application development, database 
                design, and system integration. I have successfully delivered projects for educational 
                institutions, government agencies, and private organizations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-3 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-3 md:p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className=''>
                      <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <item.icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                        <strong className="text-slate-900 dark:text-slate-100">{item.label}:</strong>
                      </span>
                      <span className='text-xs md:text-sm text-slate-600 dark:text-slate-400'>{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
