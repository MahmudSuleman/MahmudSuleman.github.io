import { motion } from 'framer-motion'
import { Code, Smartphone, Database, Monitor } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Web Development',
      skills: [
        'HTML & CSS',
        'Bootstrap',
        'Tailwind CSS',
        'JavaScript',
        'jQuery',
        'Vue.js',
        'React',
        'Node.js',
        'Express',
        'PHP',
        'Laravel',
        'Livewire',
        'ASP.NET Core',
        'DevExpress',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        'Native Android',
        'Java',
        'Kotlin',
        'Flutter',
        'React Native',
        'Cross-platform',
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        'MySQL',
        'SQLite',
        'SQL Server',
        'Oracle',
        'PostgreSQL',
        'Firebase',
        'MongoDB',
      ],
    },
    {
      icon: Monitor,
      title: 'Operating Systems',
      skills: [
        'Windows',
        'Windows Server',
        'Linux',
        'MacOS',
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
              <Code className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <category.icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
