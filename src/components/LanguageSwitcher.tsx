import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const languages = [
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'pt', label: 'PT', name: 'Português' }
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    return (
        <div className="relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 text-zinc-400 hover:text-[#FE6700] transition-colors px-3 py-2 rounded-full hover:bg-zinc-900/50"
            >
                <Globe className="w-5 h-5" />
                <span className="font-bold text-sm">{currentLang.label}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute right-0 mt-2 w-40 bg-[#0a0a0a] border border-zinc-800 rounded-xl shadow-xl overflow-hidden z-50"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-zinc-900 flex items-center justify-between ${i18n.language === lang.code ? 'text-[#FE6700]' : 'text-zinc-400 hover:text-white'
                                        }`}
                                >
                                    <span>{lang.name}</span>
                                    {i18n.language === lang.code && (
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FE6700]" />
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
