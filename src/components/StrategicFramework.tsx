import React, { useState } from 'react';
import { mockStrategicPillars } from '../data/mockData';
import { StrategicPillar, Language } from '../types';
import { 
  GraduationCap, 
  Landmark, 
  Cpu, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  Layers, 
  Building2, 
  Users,
  Target,
  Sparkles
} from 'lucide-react';

interface StrategicFrameworkProps {
  language: Language;
}

export const StrategicFramework: React.FC<StrategicFrameworkProps> = ({ language }) => {
  const [selectedVertical, setSelectedVertical] = useState<string>('all');

  const pillars = selectedVertical === 'all'
    ? mockStrategicPillars
    : mockStrategicPillars.filter(p => p.vertical === selectedVertical);

  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case 'EdTech': return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'FinTech': return <Landmark className="w-5 h-5 text-emerald-600" />;
      case 'Tecnología': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Escalabilidad': return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'Viabilidad': return <Award className="w-5 h-5 text-teal-600" />;
      case 'Implementación': return <Calendar className="w-5 h-5 text-rose-600" />;
      default: return <Layers className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Strategic Deck Header */}
      <div className="bg-linear-to-br from-sky-100 via-violet-50 to-white rounded-2xl p-6 sm:p-8 text-slate-800 border border-sky-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-semibold flex items-center gap-1.5">
            <Target className="w-4 h-4 text-sky-600" />
            {language === 'es' ? 'Marco estratégico' : 'Strategic pillars'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {language === 'es'
            ? 'Cómo se arma y se escala el ecosistema'
            : 'How the ecosystem is built and scaled'}
        </h1>
        <p className="text-slate-600 text-base max-w-3xl leading-relaxed">
          {language === 'es'
            ? 'Los pilares de educación, banca, tecnología e implementación en un solo mapa.'
            : 'Education, banking, technology, and rollout in one map.'}
        </p>

        <div className="pt-2 flex flex-wrap gap-1.5">
          {['all', 'EdTech', 'FinTech', 'Tecnología', 'Escalabilidad', 'Viabilidad', 'Implementación'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedVertical(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                selectedVertical === cat
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-sky-50 border border-sky-200'
              }`}
            >
              {cat === 'all' ? (language === 'es' ? 'Ver Todos los Pilares' : 'All Pillars') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Strategic Pillars Cards */}
      <div className="space-y-8">
        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 hover:border-indigo-300 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  {getVerticalIcon(pillar.vertical)}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {pillar.vertical}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-1">{pillar.title}</h2>
                </div>
              </div>
              <div className="text-xs font-medium text-slate-500 max-w-sm italic">
                "{pillar.tagline}"
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {pillar.summary}
            </p>

            {/* Key Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillar.keyComponents.map((comp, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{comp.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 text-[11px] font-bold text-indigo-700">
                    Impacto: {comp.metrics}
                  </div>
                </div>
              ))}
            </div>

            {/* Institutional Value Creation (3 Perspectives) */}
            <div className="bg-sky-50 text-slate-800 rounded-xl p-5 space-y-3 border border-sky-200">
              <h4 className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                {language === 'es' ? 'Propuesta de Valor Tripartita (Win-Win-Win)' : 'Tripartite Value Creation'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1 border-l-2 border-blue-400 pl-3">
                  <span className="font-bold text-sky-700 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Para Universidades' : 'For Universities'}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.institutionalValue.forUniversities}
                  </p>
                </div>

                <div className="space-y-1 border-l-2 border-emerald-400 pl-3">
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Para Bancos' : 'For Banks'}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.institutionalValue.forBanks}
                  </p>
                </div>

                <div className="space-y-1 border-l-2 border-amber-400 pl-3">
                  <span className="font-bold text-amber-700 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Para Estudiantes' : 'For Students'}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.institutionalValue.forStudents}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
