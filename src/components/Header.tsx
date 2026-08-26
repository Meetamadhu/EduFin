import React from 'react';
import { MainView, PersonaType, Language } from '../types';
import { mockTranslations } from '../data/mockData';
import { 
  Building2, 
  GraduationCap, 
  Landmark, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  BarChart3, 
  Network, 
  BookOpen, 
  Globe2,
  Compass
} from 'lucide-react';

interface HeaderProps {
  currentView: MainView;
  setCurrentView: (view: MainView) => void;
  currentPersona: PersonaType;
  setCurrentPersona: (persona: PersonaType) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenPrivacyInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  currentPersona,
  setCurrentPersona,
  language,
  setLanguage,
  onOpenPrivacyInfo
}) => {
  const t = mockTranslations[language];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      {/* Top Banner: Contest & Institutional Guarantee */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-4 py-1.5 border-b border-blue-800/40 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-blue-200">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-white">Ecosistema B2B2C Universidad–Banca:</span>
          <span className="hidden sm:inline text-blue-200/90">
            {language === 'es' 
              ? 'El puente institucional de financiamiento, tesorería y grants sin revisar finanzas personales.'
              : 'Institutional bridge for tuition financing, treasury & research grants with zero personal finance review.'}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenPrivacyInfo}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-colors cursor-pointer text-[11px] font-medium"
            title="Conoce cómo funciona la privacidad por diseño"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'es' ? 'Privacidad ZKP: Cero datos personales' : 'ZKP Privacy: Zero personal finance data'}</span>
          </button>

          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 cursor-pointer"
          >
            <Globe2 className="w-3 h-3 text-blue-400" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('landing')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-bold">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
                  NEXUS <span className="text-blue-400">EduFin</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  B2B2C Mesh
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden md:block">
                {language === 'es' ? 'Plataforma Universidad–Banca–Estudiante' : 'University–Banking–Student Ecosystem'}
              </p>
            </div>
          </div>

          {/* Primary View Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
            <button
              onClick={() => setCurrentView('landing')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentView === 'landing'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              {t.tabs.landing}
            </button>
            <button
              onClick={() => setCurrentView('prototype')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentView === 'prototype'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              {t.tabs.prototype}
            </button>
            <button
              onClick={() => setCurrentView('strategic_deck')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentView === 'strategic_deck'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              {t.tabs.strategic}
            </button>
            <button
              onClick={() => setCurrentView('architecture')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentView === 'architecture'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Network className="w-4 h-4" />
              {t.tabs.architecture}
            </button>
            <button
              onClick={() => setCurrentView('simulator')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                currentView === 'simulator'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              {t.tabs.simulator}
            </button>
          </nav>

          {/* Persona Switcher Buttons (Direct shortcuts to Prototype with that persona) */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium hidden xl:inline">
              {language === 'es' ? 'Acceso directo:' : 'Direct entry:'}
            </span>
            <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => {
                  setCurrentPersona('student');
                  setCurrentView('prototype');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  currentPersona === 'student' && currentView === 'prototype'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Ir al Portal Estudiante Universitario"
              >
                <GraduationCap className="w-3.5 h-3.5 text-indigo-300" />
                <span className="hidden sm:inline">{language === 'es' ? 'Estudiante' : 'Student'}</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPersona('university');
                  setCurrentView('prototype');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  currentPersona === 'university' && currentView === 'prototype'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Ir al Portal Directivos y Tesorería Universitaria"
              >
                <Building2 className="w-3.5 h-3.5 text-blue-300" />
                <span className="hidden sm:inline">{language === 'es' ? 'Universidad' : 'University'}</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPersona('bank');
                  setCurrentView('prototype');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  currentPersona === 'bank' && currentView === 'prototype'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Ir al Portal Entidad Bancaria / FinTech Partner"
              >
                <Landmark className="w-3.5 h-3.5 text-emerald-300" />
                <span className="hidden sm:inline">{language === 'es' ? 'Banca' : 'Bank'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sub-Navigation for Small Screens */}
        <div className="lg:hidden flex items-center justify-between py-2.5 border-t border-slate-800 gap-1 overflow-x-auto text-xs">
          <button
            onClick={() => setCurrentView('landing')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium cursor-pointer ${
              currentView === 'landing' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabs.landing}
          </button>
          <button
            onClick={() => setCurrentView('prototype')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium cursor-pointer ${
              currentView === 'prototype' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabs.prototype}
          </button>
          <button
            onClick={() => setCurrentView('strategic_deck')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium cursor-pointer ${
              currentView === 'strategic_deck' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabs.strategic}
          </button>
          <button
            onClick={() => setCurrentView('architecture')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium cursor-pointer ${
              currentView === 'architecture' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabs.architecture}
          </button>
          <button
            onClick={() => setCurrentView('simulator')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium cursor-pointer ${
              currentView === 'simulator' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabs.simulator}
          </button>
        </div>
      </div>
    </header>
  );
};

