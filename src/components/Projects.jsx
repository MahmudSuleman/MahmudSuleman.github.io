import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Folder } from 'lucide-react'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }
  const projects = [
    {
      title: 'Lakeside University College ERP',
      description: 'Enterprise Resource Management System with scholarship application portal',
      period: 'May 2022 - Present',
      technologies: ['ASP.NET Core', 'SQL Server', 'DevExpress', 'React'],
      highlights: ['Student Management', 'Financial System', 'Scholarship Portal'],
      details: 'A comprehensive Enterprise Resource Planning system designed for Lakeside University College to streamline administrative processes, manage student records, handle financial transactions, and automate scholarship applications.',
      challenges: 'Integrating multiple legacy systems into a unified platform while ensuring data integrity and maintaining system performance with thousands of concurrent users.',
      impact: 'Reduced administrative processing time by 60% and improved scholarship application processing efficiency by 75%.',
    },
    {
      title: 'Savannah College of Education System',
      description: 'Complete educational management system including website, admission portal, and administrative tools',
      period: 'Jan 2023 - Jan 2025',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Tailwind CSS'],
      highlights: ['Admission Portal', 'Student Portal', 'Management System'],
      details: 'Complete educational management solution including a public-facing website, online admission system, student information portal, and comprehensive administrative management tools.',
      challenges: 'Building a scalable system that handles peak admission periods with thousands of simultaneous applications while maintaining data security and user experience.',
      impact: 'Digitized the entire admission process, reducing paper usage by 90% and admission processing time from weeks to days.',
    },
    {
      title: 'Ghana Forestry Commission Systems',
      description: 'Armory Management System and Charcoal/Firewood Checkpoint mobile application',
      period: 'Nov 2020 - Dec 2021',
      technologies: ['Android', 'Java', 'PHP', 'MySQL'],
      highlights: ['Mobile POS Integration', 'Real-time Tracking', 'Reporting System'],
      details: 'Developed mobile applications for Ghana Forestry Commission including an Armory Management System for tracking weapons and ammunition, and a Charcoal/Firewood Checkpoint app for monitoring forest product transportation.',
      challenges: 'Creating offline-capable mobile applications that sync data when connectivity is restored, while ensuring security for sensitive armory data.',
      impact: 'Improved checkpoint efficiency by 80% and provided real-time visibility into forest product movements across the region.',
    },
    {
      title: 'Market Information System',
      description: 'Farmer and buyer management platform with SMS/Voice SMS integration for Tree Aid Ghana',
      period: 'Feb 2021 - May 2021',
      technologies: ['Laravel', 'MySQL', 'SMS API', 'Bootstrap'],
      highlights: ['SMS Integration', 'Market Data', 'Farmer Management'],
      details: 'Built a comprehensive market information system connecting farmers with buyers, featuring SMS and voice SMS capabilities to reach farmers in remote areas without internet access.',
      challenges: 'Designing a system accessible to users with limited technology literacy and unreliable internet connectivity.',
      impact: 'Connected over 500 farmers to market opportunities, increasing their income by an average of 35%.',
    },
    {
      title: 'Election Violence Reporting System',
      description: 'Incident reporting portal for monitoring and documenting election-related incidents (ISODEC)',
      period: 'Apr 2021 - Aug 2021',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      highlights: ['Real-time Reporting', 'Data Analytics', 'Admin Dashboard'],
      details: 'Created a secure incident reporting system for documenting election-related violence and irregularities, with real-time analytics and mapping capabilities for monitoring organizations.',
      challenges: 'Ensuring data security and anonymity for reporters while maintaining system reliability during high-traffic election periods.',
      impact: 'Successfully monitored and documented incidents across multiple constituencies, contributing to peaceful election processes.',
    },
    {
      title: 'Henos Voucher System',
      description: 'Voucher distribution and management system with mobile and web applications (Pearl Technology)',
      period: 'Dec 2022 - Feb 2023',
      technologies: ['Flutter', 'Laravel', 'MySQL', 'REST API'],
      highlights: ['Mobile App', 'Voucher Management', 'Distribution Tracking'],
      details: 'Developed a complete voucher distribution ecosystem with mobile apps for field agents and a web dashboard for administrators, enabling efficient voucher generation, distribution, and redemption tracking.',
      challenges: 'Implementing secure voucher generation with anti-fraud measures and offline functionality for field agents.',
      impact: 'Streamlined voucher distribution process, reducing fraud by 95% and processing time by 70%.',
    },
    {
      title: 'Puma Fuel App',
      description: 'Customer loyalty points system for fuel purchases (Pearl Technology)',
      period: 'Jun 2023 - Jul 2023',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express'],
      highlights: ['Loyalty Program', 'Points System', 'Mobile Payments'],
      details: 'Built a mobile loyalty application for Puma Energy customers to earn and redeem points on fuel purchases, with integrated mobile payment capabilities and real-time point tracking.',
      challenges: 'Integrating with existing POS systems and ensuring real-time synchronization of points across multiple fuel stations.',
      impact: 'Increased customer retention by 40% and provided valuable customer insights through analytics.',
    },
    {
      title: 'Reflos Sales App',
      description: 'Delivery tracking and sales management system (Pearl Technology)',
      period: 'Oct 2023 - Dec 2023',
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      highlights: ['GPS Tracking', 'Sales Management', 'Real-time Updates'],
      details: 'Created a comprehensive sales and delivery tracking application with real-time GPS tracking, route optimization, and sales reporting for field sales teams.',
      challenges: 'Optimizing battery usage for continuous GPS tracking while maintaining accurate location data and offline capability.',
      impact: 'Improved delivery efficiency by 50% and provided real-time visibility into sales operations.',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Folder className="w-5 h-5 text-orange-500 dark:text-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-emerald-500 dark:text-emerald-400">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  )
}

export default Projects
