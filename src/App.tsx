import React, { useState } from 'react';
import { ChevronRight, Code, Smartphone, Globe, Users, Star, Mail, Phone, MapPin, Menu, X, ArrowRight, CheckCircle, Zap, Shield, Target, Award } from 'lucide-react';
import odogwuSite from "./assets/odogwu-site.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  // ✅ Contact form state
  type Status = 'idle' | 'sending' | 'success' | 'error';
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');


    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });


      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'A apărut o eroare la trimiterea mesajului.');
      }


      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Eroare neprevăzută.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Dezvoltare Software",
      description: "Soluții software personalizate pentru optimizarea proceselor de business și creșterea eficienței.",
      features: ["Aplicații desktop", "Sisteme ERP/CRM", "Integrări API", "Consultanță tehnică"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Dezvoltare Web",
      description: "Site-uri web moderne, responsive și optimizate SEO pentru prezența online de succes.",
      features: ["Site-uri responsive", "E-commerce", "CMS personalizat", "Optimizare performanță"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Aplicații Mobile",
      description: "Aplicații mobile native și cross-platform pentru iOS și Android cu UX excepțional.",
      features: ["iOS & Android", "React Native", "Ionic", "Design UX/UI"]
    }
  ];

  const projects = [
    {
      title: "Platformă E-learning",
      category: "Web Application",
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Aplicație Banking",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Firebase", "TypeScript"]
    },
    {
      title: "Trading and Investment Platform",
      category: "Web Site",
      image: odogwuSite,
      tech: ["Angular", "Java", "PostgreSQL"],
      link: "https://odogwu-web.netlify.app/"
    }
  ];

  const technologies = [
    "React", "Angular", "Vue.js", "Node.js", "Python", "Java", "Spring Boot",
    "React Native", "Ionic", "Swift", "Kotlin", "MongoDB", "PostgreSQL", "MySQL"
  ];

  const testimonials = [
    {
      name: "Ana Popescu",
      company: "TechStart SRL",
      text: "Echipa a livrat exact ce aveam nevoie. Aplicația web dezvoltată a crescut eficiența companiei cu 40%.",
      rating: 5
    },
    {
      name: "Mihai Ionescu",
      company: "Digital Solutions",
      text: "Profesionalism și atenție la detalii. Aplicația mobilă dezvoltată a depășit așteptările noastre.",
      rating: 5
    },
    {
      name: "Elena Dumitrescu",
      company: "Innovate Co.",
      text: "Consultanța tehnică primită ne-a ajutat să luăm deciziile corecte pentru arhitectura sistemului.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">VisionSoft</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Acasă</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Servicii</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">Despre noi</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Proiecte</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Consultanță Gratuită
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">Acasă</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">Servicii</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">Despre noi</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">Proiecte</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transformăm
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ideile </span>
                în soluții digitale
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dezvoltăm software personalizat, aplicații web și mobile care ajută businessul tău să crească și să se adapteze la era digitală.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  Începe proiectul tău
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  Vezi portofoliul
                </button>
              </div>
              <div className="flex items-center space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Proiecte livrate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5 ani</div>
                  <div className="text-gray-600">Experiență</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-gray-600">Clienți mulțumiți</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Development team working"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-orange-400 rounded-2xl blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviciile noastre</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim soluții complete de dezvoltare software adaptate nevoilor specifice ale businessului tău
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${activeService === index
                  ? 'border-blue-500 bg-blue-50 shadow-xl transform -translate-y-2'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${activeService === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600'
                  }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Despre Vision Soft</h2>
              <p className="text-lg text-gray-600 mb-6">
                Suntem o echipă pasionată de dezvoltatori cu peste 5 ani de experiență în crearea de soluții software inovatoare. Ne specializăm în transformarea ideilor în produse digitale care ajută companiile să își atingă obiectivele.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Abordarea noastră se bazează pe înțelegerea profundă a nevoilor clientului, utilizarea celor mai noi tehnologii și livrarea de soluții scalabile și sigure.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Rapiditate</div>
                    <div className="text-gray-600 text-sm">Dezvoltare agile</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Securitate</div>
                    <div className="text-gray-600 text-sm">Cod sigur</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Preciziune</div>
                    <div className="text-gray-600 text-sm">Soluții țintite</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-purple-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Calitate</div>
                    <div className="text-gray-600 text-sm">Standarde înalte</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proiectele noastre</h2>
            <p className="text-xl text-gray-600">Exemple de soluții software dezvoltate pentru clienții noștri</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 hover:underline">
                      Vezi proiectul
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tehnologii utilizate</h2>
            <p className="text-xl text-gray-600">Lucrăm cu cele mai moderne tehnologii din industrie</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce spun clienții noștri</h2>
            <p className="text-xl text-gray-600">Feedback-ul lor ne motivează să oferim servicii de calitate</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contactează-ne</h2>
            <p className="text-xl text-blue-100">Să discutăm despre proiectul tău</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Informații de contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center text-white">
                    <Phone className="w-6 h-6 mr-4" />
                    <span>+40 755 950 879</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Mail className="w-6 h-6 mr-4" />
                    <span>vision.it.sof@gmail.com</span>
                  </div>
                  <div className="flex items-center text-white">
                    <MapPin className="w-6 h-6 mr-4" />
                    <span>Adjud Vrancea, România</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nume</label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Subiect</label>
                  <input
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Despre ce vrei să discutăm?"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Mesaj</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descrie-ne proiectul tău..."
                  />
                </div>


                {/* Status messages */}
                {status === 'success' && (
                  <div className="mb-4 text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
                    Mulțumim! Mesajul tău a fost trimis.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-4 text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                    {errorMsg || 'Nu am putut trimite mesajul. Încearcă din nou.'}
                  </div>
                )}


                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Se trimite…' : 'Trimite mesajul'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Vision Soft</span>
              </div>
              <p className="text-gray-400">
                Transformăm ideile în soluții digitale de succes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicii</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Dezvoltare Software</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Aplicații Web</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Aplicații Mobile</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Consultanță IT</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Companie</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Despre noi</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Echipa</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Cariere</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+40 755 950 879</li>
                <li>vision.it.sof@gmail.com</li>
                <li>Adjud Vrancea, România</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vision Soft. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;