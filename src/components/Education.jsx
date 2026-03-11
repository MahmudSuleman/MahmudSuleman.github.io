import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Master of Philosophy in Computer Science',
      institution: 'University of Ghana, Legon',
      location: 'Accra, Ghana',
      period: '2023 - Present',
      status: 'In Progress',
      description: 'Advanced studies in computer science with focus on software engineering and system design',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University for Development Studies',
      location: 'Tamale, Ghana',
      period: '2016 - 2020',
      status: 'Completed',
      description: 'Comprehensive foundation in computer science, software development, and information systems',
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <GraduationCap className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {edu.institution}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
