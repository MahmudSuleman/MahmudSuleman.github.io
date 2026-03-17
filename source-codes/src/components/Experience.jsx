import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'I.T and Support Officer',
      company: 'Environmental Protection Authority',
      location: 'Accra, Ghana',
      period: 'Feb 2026 - Present',
      responsibilities: [
        'IT Operations Management', 
        'System maintenance and troubleshooting',        
        'Network diagnosis and troubleshooting',
      ],
    },
    {
      title: 'Application Support Engineer and IT Officer',
      company: 'Lakeside University College',
      location: 'Accra, Ghana',
      period: 'May 2022 - Jan 2026',
      responsibilities: [
        'Application Support Engineering',
        'IT Operations Management',
        'Lecturing Computer Science courses',
        'System maintenance and troubleshooting',
      ],
    },
    {
      title: 'Zonal ICT Officer',
      company: 'Ghana Forestry Commission - Tamale',
      location: 'Tamale, Ghana',
      period: 'Sep 2020 - Aug 2021',
      responsibilities: [
        'Web and Mobile Application Development',
        'Payment API System Integration',
        'Core Developer for Mobile POS Device applications',
        'Database Design and Management',
        'Business Intelligence Reports',
      ],
    },
    {
      title: 'TIN Management Officer',
      company: 'Ghana Revenue Authority - Tamale',
      location: 'Tamale, Ghana',
      period: 'May 2019 - Jul 2019',
      responsibilities: [
        'Taxpayer Identification Number (TIN) Management',
        'Database administration',
        'Customer service and support',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Briefcase className="w-5 h-5 text-purple-500 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
              Work Experience
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900" 
                  style={{ 
                    left: index % 2 === 0 ? 'calc(100% + 1px)' : '-9px'
                  }}
                />

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Briefcase className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
