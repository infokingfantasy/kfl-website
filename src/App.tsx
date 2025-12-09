import { useState, useEffect } from 'react';
import { Trophy, Zap, Menu, X, MessageCircle, Mail, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState<any>(null);

  const leagues = [
    {
      icon: <Trophy className="w-12 h-12" />,
      num: "01",
      title: t('modalities.kings.title'),
      subtitle: t('modalities.kings.subtitle'),
      duration: t('modalities.kings.duration'),
      entry: "USD$100 - $500",
      prize: "USD$1,000 - $3,000",
      desc: t('modalities.kings.desc'),
      details: [
        {
          tier: t('modalities.tiers.novato'),
          first: '60%',
          second: '25%',
          third: '15%',
          totalPrize: '$1,000 USD',
          cost: '100 USD'
        },
        {
          tier: t('modalities.tiers.pro'),
          first: '70%',
          second: '30%',
          totalPrize: '$2,000 USD',
          cost: '250 USD'
        },
        {
          tier: t('modalities.tiers.veterano'),
          first: '100%',
          totalPrize: '$3,000 USD',
          cost: '500 USD'
        }
      ]
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      num: "02",
      title: t('modalities.premier.title'),
      subtitle: t('modalities.premier.subtitle'),
      duration: t('modalities.premier.duration'),
      entry: "USD$50 - $150",
      prize: "USD$500 - $1,000",
      desc: t('modalities.premier.desc'),
      details: [
        {
          tier: t('modalities.tiers.novato'),
          first: '60%',
          second: '25%',
          third: '15%',
          totalPrize: '$500 USD',
          cost: '50 USD'
        },
        {
          tier: t('modalities.tiers.pro'),
          first: '70%',
          second: '30%',
          totalPrize: '$1,000 USD',
          cost: '100 USD'
        },
        {
          tier: t('modalities.tiers.veterano'),
          first: '100%',
          totalPrize: '$1,000 USD',
          cost: '150 USD'
        }
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      num: "03",
      title: t('modalities.pro.title'),
      subtitle: t('modalities.pro.subtitle'),
      duration: t('modalities.pro.duration'),
      entry: "USD$10 - $100",
      prize: "USD$100 - $700",
      desc: t('modalities.pro.desc'),
      details: [
        {
          tier: t('modalities.tiers.novato'),
          first: '60%',
          second: '25%',
          third: '15%',
          totalPrize: '$100 USD',
          cost: '10 USD'
        },
        {
          tier: t('modalities.tiers.pro'),
          first: '60%',
          second: '40%',
          totalPrize: '$200 USD',
          cost: '20 USD'
        },
        {
          tier: t('modalities.tiers.veterano'),
          first: '100%',
          totalPrize: '$700 USD',
          cost: '100 USD'
        }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['inicio', 'modalidades', 'nosotros', 'participar', 'testimonios', 'soporte'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FE6700] selection:text-white overflow-x-hidden font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#FE6700]/20 shadow-[0_0_15px_rgba(254,103,0,0.1)]' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#FE6700] blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src="/kfl-logo-icon.png"
                  alt="KFL Crown"
                  className="w-10 h-10 object-contain relative z-10"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter italic">KFL</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'inicio', label: t('nav.inicio') },
                { id: 'modalidades', label: t('nav.modalidades') },
                { id: 'participar', label: t('nav.participar') },
                { id: 'testimonios', label: t('nav.testimonios') },
                { id: 'soporte', label: t('nav.soporte') },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-bold tracking-widest transition-all duration-300 hover:text-[#FE6700] hover:shadow-[0_0_10px_#FE6700] ${activeSection === item.id ? 'text-[#FE6700] scale-105' : 'text-zinc-400'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-l border-zinc-800 pl-6 ml-2">
                <LanguageSwitcher />
              </div>
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              <LanguageSwitcher />
              <button
                className="text-white hover:text-[#FE6700] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a0a] border-t border-zinc-800 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {[
                  { id: 'inicio', label: t('nav.inicio') },
                  { id: 'modalidades', label: t('nav.modalidades') },
                  { id: 'participar', label: t('nav.participar') },
                  { id: 'testimonios', label: t('nav.testimonios') },
                  { id: 'soporte', label: t('nav.soporte') },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-sm font-bold tracking-widest text-zinc-400 hover:text-[#FE6700] hover:bg-zinc-900/50 rounded-lg transition-all border-l-2 border-transparent hover:border-[#FE6700]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#050505]"></div>

            {/* Background Images with Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute left-0 top-0 w-full md:w-1/2 h-full"
            >
              <img
                src="/b89e6b6461520c79cde88cdce5e3d61a.jpg"
                alt="Juan Soto"
                className="w-full h-full object-cover object-left-top opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                style={{
                  maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1 }}
              className="absolute right-0 top-0 w-full md:w-1/2 h-full"
            >
              <img
                src="/Stephen Curry Golden State Warriors NBA 2023.jpg"
                alt="Stephen Curry"
                className="w-full h-full object-cover object-right-top opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                style={{
                  maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
                }}
              />
            </motion.div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>

            {/* Animated Glows */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FE6700] rounded-full blur-[120px] opacity-10"
            ></motion.div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6 flex justify-center relative">
                <div className="absolute inset-0 bg-[#FE6700] blur-[80px] opacity-20 rounded-full"></div>
                <img
                  src="/emblema 3d NARANJA.png"
                  alt="KFL Crown"
                  className="h-40 md:h-64 object-contain drop-shadow-[0_0_35px_rgba(254,103,0,0.5)]"
                />
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-6xl md:text-9xl font-black mb-4 leading-none tracking-tighter">
                <span className="block text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">KING OF</span>
                <span className="bg-gradient-to-r from-[#FE6700] via-[#FF8533] to-[#FE6700] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-[0_0_20px_rgba(254,103,0,0.3)]">
                  FANTASY LEAGUE
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-3xl text-zinc-300 mb-12 font-light tracking-widest uppercase">
                {t('hero.slogan_prefix')} <span className="text-[#FE6700] font-bold mx-2">•</span> {t('hero.slogan_middle')} <span className="text-[#FE6700] font-bold mx-2">•</span> {t('hero.slogan_suffix')}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://discord.gg/xPnFxZ2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#FE6700] text-white font-black text-lg rounded-full hover:bg-[#e55d00] hover:shadow-[0_0_30px_rgba(254,103,0,0.4)] transition-all border border-[#FE6700] group relative overflow-hidden"
                >
                  <span className="relative z-10">{t('hero.discord_btn')}</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </motion.a>

                <motion.a
                  href="mailto:eurys.cc.03@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent text-white font-black text-lg rounded-full border border-zinc-700 hover:border-[#FE6700] hover:shadow-[0_0_20px_rgba(254,103,0,0.2)] transition-all group"
                >
                  <span>{t('hero.contact_btn')}</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Modalidades Section */}
        <section id="modalidades" className="py-32 px-4 relative bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
                <span className="text-white">{t('modalities.title_prefix')}</span>
                <span className="text-[#FE6700] ml-4">{t('modalities.title_suffix')}</span>
              </h2>
              <div className="h-1 w-40 bg-[#FE6700] mx-auto shadow-[0_0_15px_#FE6700]"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {leagues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedLeague(item)}
                  className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-zinc-800 hover:border-[#FE6700] transition-all duration-300 group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#FE6700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#FE6700] transition-colors duration-300 text-[#FE6700] group-hover:text-white">
                      {item.icon}
                    </div>
                    <span className="text-5xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors duration-300 select-none">{item.num}</span>
                  </div>

                  <h3 className="text-3xl font-black mb-2 text-white group-hover:text-[#FE6700] transition-colors uppercase italic">{item.title}</h3>
                  <p className="text-sm text-[#FE6700] font-bold mb-6 uppercase tracking-widest">{item.subtitle}</p>

                  <div className="space-y-4 mb-8 border-t border-zinc-800 pt-6 group-hover:border-[#FE6700]/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 font-medium">{t('modalities.labels.duration')}</span>
                      <span className="text-white font-bold">{item.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 font-medium">{t('modalities.labels.entry')}</span>
                      <span className="text-white font-bold">{item.entry}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400 font-medium">{t('modalities.labels.prize')}</span>
                      <span className="text-[#FE6700] font-bold drop-shadow-[0_0_5px_rgba(254,103,0,0.5)]">{item.prize}</span>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#FE6700] text-sm font-bold uppercase tracking-widest border-b border-[#FE6700]">Ver Detalles</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modal for League Details */}
          <AnimatePresence>
            {selectedLeague && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedLeague(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#0a0a0a] border border-[#FE6700]/30 rounded-2xl p-6 md:p-10 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(254,103,0,0.15)]"
                >
                  <button
                    onClick={() => setSelectedLeague(null)}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-8 h-8" />
                  </button>

                  <div className="text-center mb-10">
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-2">{selectedLeague.title}</h3>
                    <p className="text-[#FE6700] text-xl font-bold uppercase tracking-widest">{selectedLeague.subtitle}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedLeague.details.map((detail: any, index: number) => (
                      <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-[#FE6700] transition-colors group">
                        <div className="flex items-center justify-center mb-6">
                          <Trophy className={`w-10 h-10 ${index === 0 ? 'text-zinc-400' : index === 1 ? 'text-[#FE6700]' : 'text-yellow-500'}`} />
                        </div>
                        <h4 className="text-2xl font-black text-center text-white mb-6 uppercase">{detail.tier}</h4>

                        <div className="space-y-3 mb-8">
                          <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                            <span className="text-zinc-400">{t('modalities.labels.places.first')}</span>
                            <span className="text-white font-bold">{detail.first}</span>
                          </div>
                          {detail.second && (
                            <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                              <span className="text-zinc-400">{t('modalities.labels.places.second')}</span>
                              <span className="text-white font-bold">{detail.second}</span>
                            </div>
                          )}
                          {detail.third && (
                            <div className="flex justify-between items-center py-2 border-b border-zinc-800">
                              <span className="text-zinc-400">{t('modalities.labels.places.third')}</span>
                              <span className="text-white font-bold">{detail.third}</span>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm uppercase tracking-wider">{t('modalities.labels.total_prize')}</span>
                            <span className="text-[#FE6700] font-black text-xl">{detail.totalPrize}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm uppercase tracking-wider">{t('modalities.labels.cost')}</span>
                            <span className="text-white font-bold">{detail.cost}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </div>
    </section >

    {/* Nosotros Section */ }
    < section id = "nosotros" className = "py-32 px-4 bg-zinc-900/30 relative overflow-hidden" >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase">
            <span className="text-white">{t('about.title_prefix')}</span> <span className="text-[#FE6700]">{t('about.title_suffix')}</span>
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
            <Trans i18nKey="about.desc">
              Somos la evolución del fantasy deportivo. Una plataforma diseñada por gamers para gamers, donde la <span className="text-[#FE6700] font-bold">estrategia</span> se encuentra con la <span className="text-[#FE6700] font-bold">pasión</span>. Sin letras pequeñas, solo competición pura y premios reales.
            </Trans>
          </p>
        </motion.div>
      </div>
    </section >

    {/* Participar Section */ }
    < section id = "participar" className = "py-32 px-4 bg-[#0a0a0a] relative overflow-hidden" >
      {/* Background effects for more life */ }
      < div className = "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" >
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FE6700] rounded-full blur-[150px] opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FE6700] rounded-full blur-[150px] opacity-5"></div>
      </div >

    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
          <span className="text-white">{t('participate.title_prefix')}</span>
          <span className="text-[#FE6700] ml-4">{t('participate.title_suffix')}</span>
        </h2>
        <div className="h-1 w-40 bg-[#FE6700] mx-auto shadow-[0_0_15px_#FE6700]"></div>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-4">
        {[
          { num: '01', title: t('participate.steps.1.title'), desc: t('participate.steps.1.desc') },
          { num: '02', title: t('participate.steps.2.title'), desc: t('participate.steps.2.desc') },
          { num: '03', title: t('participate.steps.3.title'), desc: t('participate.steps.3.desc') },
          { num: '04', title: t('participate.steps.4.title'), desc: t('participate.steps.4.desc') },
          { num: '05', title: t('participate.steps.5.title'), desc: t('participate.steps.5.desc') },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative group h-full"
          >
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 h-full p-6 rounded-2xl border border-zinc-800 hover:border-[#FE6700] transition-all duration-300 shadow-lg hover:shadow-[#FE6700]/20 flex flex-col justify-between">
              <div>
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#FE6700] to-zinc-800 mb-4 transition-all group-hover:scale-110 origin-left">{step.num}</div>
                <h3 className="text-xl font-black mb-2 text-white uppercase italic group-hover:text-[#FE6700] transition-colors">{step.title}</h3>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{step.desc}</p>
              </div>
              <div className="mt-4 w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#FE6700] w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            </div>
            {index < 4 && (
              <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 text-zinc-800 group-hover:text-[#FE6700] transition-colors duration-300">
                <ChevronRight className="w-8 h-8" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
    </section >

    {/* Testimonios Section */ }
    < section id = "testimonios" className = "py-32 px-4 bg-zinc-900/30" >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-center mb-20 uppercase text-[#FE6700]"
        >
          {t('testimonials.title')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Miguel R.", role: t('testimonials.1.role'), quote: t('testimonials.1.quote') },
            { name: "Andrea S.", role: t('testimonials.2.role'), quote: t('testimonials.2.quote') },
            { name: "Carlos P.", role: t('testimonials.3.role'), quote: t('testimonials.3.quote') }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#0a0a0a] p-8 border border-zinc-800 relative group hover:-translate-y-2 transition-transform duration-300 rounded-xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FE6700] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-xl"></div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#FE6700] rounded-full flex items-center justify-center text-white font-black text-xl">
                  <span>{item.name.charAt(0)}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">{item.name}</h4>
                  <p className="text-xs text-[#FE6700] uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
              <p className="text-zinc-400 italic">"{item.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section >

    {/* Soporte Section */ }
    < section id = "soporte" className = "py-32 px-4 relative overflow-hidden" >
      <div className="absolute inset-0 bg-gradient-to-t from-[#FE6700]/10 to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase">
          <span className="text-white">{t('support.title_prefix')}</span> <span className="text-[#FE6700]">{t('support.title_suffix')}</span>
        </h2>
        <p className="text-xl text-zinc-300 mb-12">
          {t('support.desc')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a
            href="https://discord.gg/xPnFxZ2k"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#5865F2] text-white font-bold rounded-full hover:bg-[#4752C4] transition-all flex items-center space-x-3 shadow-lg shadow-[#5865F2]/20"
          >
            <MessageCircle className="w-6 h-6" />
            <span>{t('support.discord_btn')}</span>
          </motion.a>

          <motion.a
            href="mailto:info@kingfantasyleague.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-full border border-red-600 hover:bg-red-700 hover:border-red-700 transition-all flex items-center space-x-3 shadow-lg shadow-red-600/20"
          >
            <Mail className="w-6 h-6" />
            <span>{t('support.email_btn')}</span>
          </motion.a>
        </div>
      </div>
    </section >
  </main >

    <footer className="bg-black border-t border-zinc-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="/kfl-logo-icon.png"
              alt="KFL Crown"
              className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition-all"
            />
            <span className="text-xl font-black tracking-tighter text-zinc-500 hover:text-white transition-colors">KFL</span>
          </div>
          <p className="text-zinc-600 text-sm font-medium">
            {t('footer.rights')}
          </p>
        </div>

        {/* Download Buttons Section */}
        <div className="border-t border-zinc-900 pt-8">
          <p className="text-center text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
            {t('footer.downloads')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href="https://www.espn.com/fantasy/football/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 bg-[#DA020E] text-white text-[10px] font-bold rounded-full border border-[#DA020E] hover:bg-[#b50109] transition-all flex items-center space-x-1.5 shadow-lg shadow-[#DA020E]/20"
            >
              <img src="/espn-logo.png" alt="ESPN" className="w-3 h-3 object-contain" />
              <span>ESPN Fantasy</span>
            </motion.a>

            <motion.a
              href="https://www.fantrax.com/fantasy/league/yo8e3xu4mi5z0ekw/home"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 bg-[#0066CC] text-white text-[10px] font-bold rounded-full border border-[#0066CC] hover:bg-[#0052a3] transition-all flex items-center space-x-1.5 shadow-lg shadow-[#0066CC]/20"
            >
              <img src="/fantrax-logo.png" alt="Fantrax" className="w-3 h-3 object-contain" />
              <span>Fantrax</span>
            </motion.a>

            <motion.a
              href="https://discord.com/download"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1.5 bg-[#5865F2] text-white text-[10px] font-bold rounded-full border border-[#5865F2] hover:bg-[#4752C4] transition-all flex items-center space-x-1.5 shadow-lg shadow-[#5865F2]/20"
            >
              <img src="/discord-logo.png" alt="Discord" className="w-3 h-3 object-contain" />
              <span>Discord</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
    </div >
  );
}

export default App;
