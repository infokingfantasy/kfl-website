import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    es: {
        translation: {
            nav: {
                inicio: 'INICIO',
                modalidades: 'MODALIDADES',
                participar: 'PARTICIPAR',
                testimonios: 'TESTIMONIOS',
                soporte: 'SOPORTE'
            },
            hero: {
                slogan_prefix: 'Compite',
                slogan_middle: 'Aprende',
                slogan_suffix: 'Domina y gana',
                discord_btn: 'ÚNETE AL DISCORD',
                contact_btn: 'CONTACTO'
            },
            modalities: {
                title_prefix: 'Modalidades',
                title_suffix: 'Competitivas',
                kings: {
                    title: 'Kings League',
                    subtitle: 'Temporada Completa',
                    duration: '4 meses',
                    desc: 'Competencia profesional de alto nivel. Estadísticas avanzadas y ranking global.'
                },
                premier: {
                    title: 'Premier League',
                    subtitle: 'Torneo Mensual',
                    duration: '30 días',
                    desc: 'Formato dinámico para jugadores constantes. Sube de división cada mes.'
                },
                pro: {
                    title: 'Pro League',
                    subtitle: 'Torneo Semanal',
                    duration: '7 días',
                    desc: 'Acción inmediata. Torneos relámpago con premios instantáneos.'
                },
                labels: {
                    duration: 'Duración',
                    entry: 'Entrada',
                    prize: 'Ganancia'
                }
            },
            about: {
                title_prefix: 'Sobre',
                title_suffix: 'Nosotros',
                desc: 'Somos la evolución del fantasy deportivo. Una plataforma diseñada por gamers para gamers, donde la <1>estrategia</1> se encuentra con la <3>pasión</3>. Sin letras pequeñas, solo competición pura y premios reales.'
            },
            participate: {
                title_prefix: 'Cómo',
                title_suffix: 'Participar',
                steps: {
                    1: { title: 'DISCORD', desc: 'Únete a nuestra comunidad oficial.' },
                    2: { title: 'MODALIDAD', desc: 'Elige tu nivel de competencia.' },
                    3: { title: 'REGLAS', desc: 'Domina el reglamento.' },
                    4: { title: 'DRAFT', desc: 'Arma tu equipo de ensueño.' },
                    5: { title: 'VICTORIA', desc: 'Compite y reclama tu premio.' }
                }
            },
            testimonials: {
                title: 'Testimonios',
                1: { role: 'Campeón Kings League', quote: 'La interfaz es brutal. Las estadísticas en tiempo real cambian el juego por completo.' },
                2: { role: 'Top 3 Premier', quote: 'Pagos rápidos y una comunidad que realmente sabe de deportes. 10/10.' },
                3: { role: 'Pro Player', quote: 'El nivel de competencia aquí es otro mundo. Si buscas retos de verdad, este es el lugar.' }
            },
            support: {
                title_prefix: '¿Listo para',
                title_suffix: 'Ganar?',
                desc: 'Únete a la comunidad más competitiva de fantasy.',
                discord_btn: 'UNIRSE AL DISCORD',
                email_btn: 'ENVIAR CORREO'
            },
            footer: {
                rights: '© 2025 KING OF FANTASY LEAGUE. TODOS LOS DERECHOS RESERVADOS.',
                downloads: 'Descargar Apps'
            }
        }
    },
    en: {
        translation: {
            nav: {
                inicio: 'HOME',
                modalidades: 'MODES',
                participar: 'HOW TO JOIN',
                testimonios: 'TESTIMONIALS',
                soporte: 'SUPPORT'
            },
            hero: {
                slogan_prefix: 'Compete',
                slogan_middle: 'Learn',
                slogan_suffix: 'Dominate and Win',
                discord_btn: 'JOIN DISCORD',
                contact_btn: 'CONTACT'
            },
            modalities: {
                title_prefix: 'Competitive',
                title_suffix: 'Modes',
                kings: {
                    title: 'Kings League',
                    subtitle: 'Full Season',
                    duration: '4 months',
                    desc: 'High-level professional competition. Advanced stats and global ranking.'
                },
                premier: {
                    title: 'Premier League',
                    subtitle: 'Monthly Tournament',
                    duration: '30 days',
                    desc: 'Dynamic format for consistent players. Climb divisions every month.'
                },
                pro: {
                    title: 'Pro League',
                    subtitle: 'Weekly Tournament',
                    duration: '7 days',
                    desc: 'Immediate action. Blitz tournaments with instant prizes.'
                },
                labels: {
                    duration: 'Duration',
                    entry: 'Entry',
                    prize: 'Prize'
                }
            },
            about: {
                title_prefix: 'About',
                title_suffix: 'Us',
                desc: 'We are the evolution of fantasy sports. A platform designed by gamers for gamers, where <1>strategy</1> meets <3>passion</3>. No fine print, just pure competition and real prizes.'
            },
            participate: {
                title_prefix: 'How to',
                title_suffix: 'Join',
                steps: {
                    1: { title: 'DISCORD', desc: 'Join our official community.' },
                    2: { title: 'MODE', desc: 'Choose your competition level.' },
                    3: { title: 'RULES', desc: 'Master the rulebook.' },
                    4: { title: 'DRAFT', desc: 'Build your dream team.' },
                    5: { title: 'VICTORY', desc: 'Compete and claim your prize.' }
                }
            },
            testimonials: {
                title: 'Testimonials',
                1: { role: 'Kings League Champion', quote: 'The interface is brutal. Real-time stats change the game completely.' },
                2: { role: 'Top 3 Premier', quote: 'Fast payments and a community that really knows sports. 10/10.' },
                3: { role: 'Pro Player', quote: 'The competition level here is another world. If you want real challenges, this is the place.' }
            },
            support: {
                title_prefix: 'Ready to',
                title_suffix: 'Win?',
                desc: 'Join the most competitive fantasy community.',
                discord_btn: 'JOIN DISCORD',
                email_btn: 'SEND EMAIL'
            },
            footer: {
                rights: '© 2025 KING OF FANTASY LEAGUE. ALL RIGHTS RESERVED.',
                downloads: 'Download Apps'
            }
        }
    },
    pt: {
        translation: {
            nav: {
                inicio: 'INÍCIO',
                modalidades: 'MODALIDADES',
                participar: 'COMO PARTICIPAR',
                testimonios: 'DEPOIMENTOS',
                soporte: 'SUPORTE'
            },
            hero: {
                slogan_prefix: 'Compita',
                slogan_middle: 'Aprenda',
                slogan_suffix: 'Domine e Ganhe',
                discord_btn: 'ENTRE NO DISCORD',
                contact_btn: 'CONTATO'
            },
            modalities: {
                title_prefix: 'Modalidades',
                title_suffix: 'Competitivas',
                kings: {
                    title: 'Kings League',
                    subtitle: 'Temporada Completa',
                    duration: '4 meses',
                    desc: 'Competição profissional de alto nível. Estatísticas avançadas e ranking global.'
                },
                premier: {
                    title: 'Premier League',
                    subtitle: 'Torneio Mensal',
                    duration: '30 dias',
                    desc: 'Formato dinâmico para jogadores constantes. Suba de divisão a cada mês.'
                },
                pro: {
                    title: 'Pro League',
                    subtitle: 'Torneio Semanal',
                    duration: '7 dias',
                    desc: 'Ação imediata. Torneios relâmpago com prêmios instantâneos.'
                },
                labels: {
                    duration: 'Duração',
                    entry: 'Entrada',
                    prize: 'Prêmio'
                }
            },
            about: {
                title_prefix: 'Sobre',
                title_suffix: 'Nós',
                desc: 'Somos a evolução do fantasy sports. Uma plataforma desenhada por gamers para gamers, onde a <1>estratégia</1> encontra a <3>paixão</3>. Sem letras miúdas, apenas competição pura e prêmios reais.'
            },
            participate: {
                title_prefix: 'Como',
                title_suffix: 'Participar',
                steps: {
                    1: { title: 'DISCORD', desc: 'Junte-se à nossa comunidade oficial.' },
                    2: { title: 'MODALIDADE', desc: 'Escolha seu nível de competição.' },
                    3: { title: 'REGRAS', desc: 'Domine o regulamento.' },
                    4: { title: 'DRAFT', desc: 'Monte seu time dos sonhos.' },
                    5: { title: 'VITÓRIA', desc: 'Compita e reivindique seu prêmio.' }
                }
            },
            testimonials: {
                title: 'Depoimentos',
                1: { role: 'Campeão Kings League', quote: 'A interface é brutal. As estatísticas em tempo real mudam o jogo completamente.' },
                2: { role: 'Top 3 Premier', quote: 'Pagamentos rápidos e uma comunidade que realmente entende de esportes. 10/10.' },
                3: { role: 'Pro Player', quote: 'O nível de competição aqui é de outro mundo. Se você quer desafios reais, este é o lugar.' }
            },
            support: {
                title_prefix: 'Pronto para',
                title_suffix: 'Ganhar?',
                desc: 'Junte-se à comunidade de fantasy mais competitiva.',
                discord_btn: 'ENTRAR NO DISCORD',
                email_btn: 'ENVIAR E-MAIL'
            },
            footer: {
                rights: '© 2025 KING OF FANTASY LEAGUE. TODOS OS DIREITOS RESERVADOS.',
                downloads: 'Baixar Apps'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
