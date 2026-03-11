import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mahmudsheikh25@gmail.com',
      href: 'mailto:mahmudsheikh25@gmail.com',
      color: 'blue',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 24 181 2087',
      href: 'tel:+233241812087',
      color: 'emerald',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Accra, Ghana',
      href: null,
      color: 'purple',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
              <Mail className="w-5 h-5 text-pink-500 dark:text-pink-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
              Get In Touch
            </h2>
          </div>
          
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href || '#'}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex items-start gap-4 ${
                    item.href ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className={`p-3 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-500 dark:text-${item.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl text-white"
              >
                <h3 className="text-lg font-bold mb-2">Let's Build Something Great</h3>
                <p className="text-sm text-blue-50">
                  I'm always excited to work on innovative projects and collaborate with talented teams.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6">
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <User className={`w-4 h-4 transition-colors ${
                            focusedField === 'name' 
                              ? 'text-blue-500 dark:text-blue-400' 
                              : 'text-slate-400 dark:text-slate-600'
                          }`} />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-2 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <Mail className={`w-4 h-4 transition-colors ${
                            focusedField === 'email' 
                              ? 'text-blue-500 dark:text-blue-400' 
                              : 'text-slate-400 dark:text-slate-600'
                          }`} />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          placeholder="john@example.com"
                          className="w-full pl-12 pr-4 py-2 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Your Message
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 pointer-events-none">
                          <MessageSquare className={`w-4 h-4 transition-colors ${
                            focusedField === 'message' 
                              ? 'text-blue-500 dark:text-blue-400' 
                              : 'text-slate-400 dark:text-slate-600'
                          }`} />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows="4"
                          placeholder="Tell me about your project..."
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all outline-none resize-none"
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl transition-all flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
