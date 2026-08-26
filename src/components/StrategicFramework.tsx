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
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold flex items-center gap-1.5">
            <Target className="w-4 h-4 text-blue-400" />
            {language === 'es' ? 'Marco Estratégico & Pilares' : 'Strategic Pillars & Blueprint'}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            {language === 'es' ? 'EdTech + FinTech Institucional' : 'EdTech + Institutional FinTech'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {language === 'es'
            ? 'Pilares EdTech, FinTech, Escalabilidad e Implementación'
            : 'EdTech & FinTech Pillars, Scalability and Implementation'}
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          {language === 'es'
            ? 'Un desglose exhaustivo de los pilares que hacen viable, escalable y transformador el ecosistema entre la educación superior y las entidades financieras.'
            : 'A comprehensive strategic breakdown of the pillars that make the higher education and banking ecosystem viable, scalable, and impactful.'}
        </p>

        {/* Filter Navigation */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {['all', 'EdTech', 'FinTech', 'Tecnología', 'Escalabilidad', 'Viabilidad', 'Implementación'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedVertical(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedVertical === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
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
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                {language === 'es' ? 'Propuesta de Valor Tripartita (Win-Win-Win)' : 'Tripartite Value Creation'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="space-y-1 border-l-2 border-blue-400 pl-3">
                  <span className="font-bold text-blue-300 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Para Universidades' : 'For Universities'}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {pillar.institutionalValue.forUniversities}
                  </p>
                </div>

                <div className="space-y-1 border-l-2 border-emerald-400 pl-3">
                  <span className="font-bold text-emerald-300 flex items-center gap-1">
                    <Landmark className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Para Bancos' : 'For Banks'}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {pillar.institutionalValue.forBanks}
                  </p>
                </div>

                <div className="space-y-1 border-l-2 border-amber-400 pl-3">
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {language === 'es' ? 'Para Estudiantes' : 'For Students'}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
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
