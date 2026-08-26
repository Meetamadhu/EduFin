import React, { useState } from 'react';
import { BankMetric, ResearchGrant, Language } from '../types';
import { 
  Landmark, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Award, 
  Briefcase, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  BarChart, 
  PieChart, 
  Sliders, 
  ArrowUpRight,
  UserCheck,
  Building2,
  Lock
} from 'lucide-react';

interface BankPortalProps {
  metrics: BankMetric;
  grants: ResearchGrant[];
  language: Language;
  onAllocateGrant: () => void;
  onOpenUnderwritingEngine: () => void;
}

export const BankPortal: React.FC<BankPortalProps> = ({
  metrics,
  grants,
  language,
  onAllocateGrant,
  onOpenUnderwritingEngine
}) => {
  const [selectedCohort, setSelectedCohort] = useState('Ingeniería & STEM');

  return (
    <div className="space-y-8">
      {/* Bank Partner Header Banner */}
      <div className="bg-linear-to-br from-emerald-50 via-sky-50 to-white rounded-2xl p-6 sm:p-8 text-slate-800 border border-emerald-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                <Landmark className="w-4 h-4 text-emerald-600" />
                {language === 'es' ? 'Portal bancario' : 'Bank portal'}
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                {language === 'es' ? 'Aval académico, no buró' : 'Academic backing, not a bureau'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'es' ? 'Consorcio Bancario Alianza Futuro' : 'Alianza Futuro Banking Consortium'}
            </h1>
            <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
              {language === 'es'
                ? 'Coloca crédito educativo con aval universitario y capta clientes jóvenes sin costo de adquisición.'
                : 'Originate education credit with university backing and win young customers at near-zero acquisition cost.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenUnderwritingEngine}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <Sliders className="w-4 h-4" />
              <span>{language === 'es' ? 'Motor de Riesgo Académico' : 'Academic Risk Engine'}</span>
            </button>
            <button
              onClick={onAllocateGrant}
              className="px-4 py-2.5 bg-white hover:bg-emerald-50 text-slate-700 border border-emerald-200 text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{language === 'es' ? 'Crear Nuevo Fondo Grant' : 'Allocate Innovation Grant'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Bank Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Estudiantes Vinculados' : 'Active Student Accounts'}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{metrics.activeStudentAccounts.toLocaleString()}</div>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            {language === 'es' ? 'CAC = $0 (Originación Directa)' : 'CAC = $0 (Direct Campus Origination)'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Tasa de Mora Institucional' : 'Institutional Default Rate'}</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{metrics.defaultRate}%</div>
          <p className="text-xs text-blue-600 font-semibold">
            {language === 'es' ? 'vs 4.8% en crédito de consumo' : 'vs 4.8% in traditional consumer loans'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Puntaje de Impacto ESG' : 'ESG Impact Rating'}</span>
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
              <HeartHandshake className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{metrics.esgImpactScore} / 100</div>
          <p className="text-xs text-teal-600 font-semibold">
            {language === 'es' ? 'Elegible Bonos Sociales' : 'Social Bond Eligible'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Talento Contratado' : 'Hired Tech Talent'}</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{metrics.talentHiredCount.toLocaleString()}</div>
          <p className="text-xs text-indigo-600 font-semibold">
            {language === 'es' ? 'Semilleros bancarios activos' : 'Active bank incubator pipeline'}
          </p>
        </div>
      </div>

      {/* Main Grid: Institutional Underwriting vs Traditional Personal Scrutiny */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Academic Underwriting Engine */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {language === 'es' ? 'Motor de Suscripción Académica (Zero Personal Intrusiveness)' : 'Institutional Academic Underwriting Engine'}
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'es' 
                  ? 'Cómo evaluamos el riesgo sin tocar extractos bancarios ni datos personales.'
                  : 'How risk is modeled without reviewing bank statements or private personal finances.'}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" />
              ZKP Model
            </span>
          </div>

          {/* Contrast Matrix: Traditional Personal Scrutiny vs Nexus Institutional Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80 space-y-2">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                {language === 'es' ? 'Modelo Tradicional (Invasivo y Rechazado)' : 'Traditional Model (Intrusive & Flawed)'}
              </div>
              <ul className="space-y-1.5 text-xs text-rose-900/90">
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Exige extractos bancarios personales y de los padres</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Rechaza al 90% por falta de historial crediticio</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Costos altísimos de adquisición y cobranza judicial</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {language === 'es' ? 'Modelo Nexus (Institucional y Sostenible)' : 'Nexus Model (Institutional & Fair)'}
              </div>
              <ul className="space-y-1.5 text-xs text-emerald-900/90">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Aval por regularidad de créditos en el SIS universitario</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Desembolso 100% en escrow directo a la tesorería universitaria</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mora institucional inferior al 0.5% con valor del grado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Underwriting Weight Factors */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              {language === 'es' ? 'Variables del Algoritmo de Riesgo Institucional' : 'Institutional Risk Algorithm Weights'}
            </h3>

            <div className="space-y-2.5">
              {[
                { label: 'Tasa de Empleabilidad del Programa Académico (STEM/Negocios/Salud)', weight: 35, color: 'bg-emerald-500' },
                { label: 'Avance de Créditos y Regularidad en el Semestre (SIS)', weight: 30, color: 'bg-blue-500' },
                { label: 'Acreditación Institucional de Alta Calidad de la Universidad', weight: 20, color: 'bg-indigo-500' },
                { label: 'Participación en Semilleros de Investigación y Pasantías', weight: 15, color: 'bg-amber-500' }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-slate-700">
                    <span>{item.label}</span>
                    <span className="font-bold">{item.weight}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.weight * 2.5}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: LTV & Early Career Pipeline */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  {language === 'es' ? 'Valor de Vida del Cliente (LTV)' : 'Customer Lifetime Value (LTV)'}
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-600">72% Retención</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'es'
                ? 'El 72% de los estudiantes financiados abre su cuenta de nómina y solicita su primer crédito hipotecario o vehicular en el mismo banco con el que financió su carrera universitaria.'
                : '72% of students funded retain their direct deposit and request their initial auto or mortgage loans with the partner bank.'}
            </p>

            <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-600">{language === 'es' ? 'CAC Universitario' : 'University CAC'}</span>
                <span className="font-bold text-emerald-700">$0.00 USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">{language === 'es' ? 'LTV proyectado a 10 años' : '10-year projected LTV'}</span>
                <span className="font-bold text-indigo-700">$4,850 USD / cliente</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">{language === 'es' ? 'Conversión a Nómina' : 'Payroll Conversion'}</span>
                <span className="font-bold text-slate-900">84% al graduarse</span>
              </div>
            </div>

            <button
              onClick={onAllocateGrant}
              className="w-full bg-slate-900 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <UserCheck className="w-4 h-4 text-emerald-400" />
              {language === 'es' ? 'Patrocinar Cohorte de Becarios' : 'Sponsor Cohort of Scholars'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
