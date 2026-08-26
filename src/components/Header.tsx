import React, { useEffect, useRef, useState } from 'react';
import { MainView, PersonaType, Language } from '../types';
import { mockTranslations } from '../data/mockData';
import { 
  Building2, 
  GraduationCap, 
  Landmark, 
  ShieldCheck, 
  Sparkles, 
  Globe2,
  ChevronDown,
  BookOpen,
  Network,
  Compass,
  Layers,
  BarChart3
} from 'lucide-react';

interface HeaderProps {
  currentView: MainView;
  currentPersona: PersonaType;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenPrivacyInfo: () => void;
  onNavigate: (view: MainView, persona?: PersonaType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  currentPersona,
  language,
  setLanguage,
  onOpenPrivacyInfo,
  onNavigate
}) => {
  const [portalOpen, setPortalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setPortalOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const enterPortal = (persona: PersonaType) => {
    setPortalOpen(false);
    onNavigate('prototype', persona);
  };

  const t = mockTranslations[language];

  const navItems: { view: MainView; label: string; icon: React.ReactNode }[] = [
    { view: 'landing', label: t.tabs.landing, icon: <Compass className="w-4 h-4" /> },
    { view: 'prototype', label: t.tabs.prototype, icon: <Layers className="w-4 h-4" /> },
    { view: 'strategic_deck', label: t.tabs.strategic, icon: <BookOpen className="w-4 h-4" /> },
    { view: 'architecture', label: t.tabs.architecture, icon: <Network className="w-4 h-4" /> },
    { view: 'simulator', label: t.tabs.simulator, icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const portalLabel =
    currentView === 'prototype'
      ? currentPersona === 'university'
        ? language === 'es' ? 'Universidad' : 'University'
        : currentPersona === 'bank'
          ? language === 'es' ? 'Banca' : 'Bank'
          : language === 'es' ? 'Estudiante' : 'Student'
      : language === 'es' ? 'Entrar al portal' : 'Enter portal';

  return (
    <header className="bg-sky-200 text-slate-800 border-b border-sky-300 sticky top-0 z-40 shadow-sm">
      <div className="bg-slate-900 px-4 py-1.5 border-b border-slate-800 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">
            {language === 'es'
              ? 'Universidad, banca y estudiantes en un mismo flujo.'
              : 'Universities, banks, and students in one flow.'}
          </span>
        </div>

        <button
          onClick={onOpenPrivacyInfo}
          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors cursor-pointer text-[11px] font-medium"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{language === 'es' ? 'Tu historial personal no se comparte' : 'Personal finances stay private'}</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer text-left"
            onClick={() => onNavigate('landing')}
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shadow-md shadow-sky-400/40 text-white font-bold">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-800">
                NEXUS <span className="text-sky-700">EduFin</span>
              </span>
              <p className="text-sm text-slate-600 font-medium hidden xl:block">
                {language === 'es' ? 'Financiamiento educativo sin buró crediticio' : 'Tuition financing without a credit check'}
              </p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1 bg-white/70 p-1 rounded-xl border border-sky-300">
            {navItems.map((item) => (
              <button
                key={item.view}
                type="button"
                onClick={() => onNavigate(item.view)}
                className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  currentView === item.view
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1 text-sm font-medium px-2.5 py-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-700 transition-colors border border-sky-300 cursor-pointer"
            >
              <Globe2 className="w-4 h-4 text-sky-600" />
              <span>{language.toUpperCase()}</span>
            </button>

            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setPortalOpen((open) => !open)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold shadow-sm cursor-pointer"
              >
                <span>{portalLabel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${portalOpen ? 'rotate-180' : ''}`} />
              </button>

              {portalOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-sky-200 bg-white shadow-xl p-1.5 z-50">
                  <button
                    type="button"
                    onClick={() => enterPortal('student')}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-indigo-50 cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    {language === 'es' ? 'Portal Estudiante' : 'Student portal'}
                  </button>
                  <button
                    type="button"
                    onClick={() => enterPortal('university')}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-sky-50 cursor-pointer"
                  >
                    <Building2 className="w-4 h-4 text-sky-600" />
                    {language === 'es' ? 'Portal Universidad' : 'University portal'}
                  </button>
                  <button
                    type="button"
                    onClick={() => enterPortal('bank')}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-emerald-50 cursor-pointer"
                  >
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    {language === 'es' ? 'Portal Banco' : 'Bank portal'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-1 overflow-x-auto pb-3">
          {navItems.map((item) => (
            <button
              key={item.view}
              type="button"
              onClick={() => onNavigate(item.view)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer ${
                currentView === item.view
                  ? 'bg-sky-500 text-white'
                  : 'bg-white/80 text-slate-600 border border-sky-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
