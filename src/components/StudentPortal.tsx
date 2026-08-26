import React, { useState } from 'react';
import { StudentProfile, TuitionFinancingPlan, ResearchGrant, Language } from '../types';
import { 
  GraduationCap, 
  ShieldCheck, 
  CreditCard, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Award, 
  Laptop, 
  Plane, 
  QrCode, 
  ArrowRight, 
  BookOpen, 
  Lock, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  FileCheck2,
  Building2,
  Users
} from 'lucide-react';

interface StudentPortalProps {
  student: StudentProfile;
  tuitionPlans: TuitionFinancingPlan[];
  grants: ResearchGrant[];
  language: Language;
  onApplyPlan: (plan: TuitionFinancingPlan) => void;
  onApplyGrant: (grant: ResearchGrant) => void;
  onViewPrivacyCert: () => void;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({
  student,
  tuitionPlans,
  grants,
  language,
  onApplyPlan,
  onApplyGrant,
  onViewPrivacyCert
}) => {
  const [activeTab, setActiveTab] = useState<'financing' | 'grants' | 'smart_pass' | 'perks'>('financing');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGrants = selectedCategory === 'all' 
    ? grants 
    : grants.filter(g => g.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Top Welcome & Institutional Guarantee Card */}
      <div className="bg-linear-to-br from-sky-100 via-indigo-50 to-white rounded-2xl p-6 sm:p-8 text-slate-800 border border-sky-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-indigo-700 border border-indigo-200 text-xs font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                {student.university}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {language === 'es' ? 'Matrícula activa confirmada' : 'Active enrollment confirmed'}
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {language === 'es' ? `Hola, ${student.name.split(' ')[0]}` : `Hello, ${student.name.split(' ')[0]}`}
              </h1>
              <p className="text-slate-600 text-base mt-1 max-w-2xl leading-relaxed">
                {language === 'es' 
                  ? 'Paga tu matrícula a 0% con el aval de tu universidad, postula a fondos de investigación y usa tu carnet digital. Nadie revisa tu historial crediticio.'
                  : 'Pay tuition at 0% with your university’s backing, apply for research funds, and use your digital campus pass. Nobody checks your credit history.'}
              </p>
            </div>

            <div className="bg-white border border-emerald-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {language === 'es' ? 'Tu dinero personal no se revisa' : 'Your personal money is not reviewed'}
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    {language === 'es' 
                      ? 'La universidad solo confirma que estás activo y al día en créditos.'
                      : 'The university only confirms you are enrolled and on track.'}
                  </p>
                </div>
              </div>
              <button
                onClick={onViewPrivacyCert}
                className="shrink-0 text-sm font-semibold text-sky-700 hover:text-slate-900 flex items-center gap-1 underline underline-offset-4 cursor-pointer"
              >
                {language === 'es' ? 'Ver cómo' : 'See how'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Smart Pass Mini Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs bg-indigo-600 p-5 rounded-2xl border border-indigo-500 shadow-lg space-y-4 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider font-bold text-indigo-300">
                  Smart Digital Pass
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                  {student.digitalPassId}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-indigo-400/40"
                />
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{student.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{student.studentIdNumber}</p>
                  <p className="text-[11px] text-indigo-300 mt-0.5">{student.program.split('&')[0]}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/20 text-sm">
                <div>
                  <span className="text-indigo-100 text-xs block">{language === 'es' ? 'Semestre' : 'Semester'}</span>
                  <span className="font-bold text-white">{student.semester}° Semestre</span>
                </div>
                <div>
                  <span className="text-indigo-100 text-xs block">{language === 'es' ? 'Índice Académico' : 'Academic GPA'}</span>
                  <span className="font-bold text-emerald-200">{student.academicIndex} / 5.0</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs bg-white/15 px-3 py-2 rounded-lg border border-white/20 text-white">
                <span className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {student.bankPartner.split('(')[0]}
                </span>
                <QrCode className="w-4 h-4 text-indigo-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center justify-start border-b border-slate-200 gap-2 sm:gap-4 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('financing')}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'financing'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-lg'
              : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          {language === 'es' ? 'Financiamiento de Matrícula & Cuotas' : 'Tuition Financing & Installments'}
        </button>

        <button
          onClick={() => setActiveTab('grants')}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'grants'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-lg'
              : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          {language === 'es' ? 'Fondo de Investigación & Becas Banca' : 'Research Grants & Bank Funds'}
          <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded-full bg-indigo-100 text-indigo-700 font-bold">
            {grants.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('perks')}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'perks'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-lg'
              : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
          }`}
        >
          <Laptop className="w-4 h-4" />
          {language === 'es' ? 'Equipamiento & Intercambio' : 'Tech Equipment & Mobility'}
        </button>

        <button
          onClick={() => setActiveTab('smart_pass')}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
            activeTab === 'smart_pass'
              ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-lg'
              : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
          }`}
        >
          <QrCode className="w-4 h-4" />
          {language === 'es' ? 'Carnet Digital & ZKP' : 'Digital Pass & ZKP'}
        </button>
      </div>

      {/* Tab 1: Tuition Financing */}
      {activeTab === 'financing' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {language === 'es' ? 'Convenios de Matrícula Institucional' : 'Institutional Tuition Agreements'}
              </h2>
              <p className="text-sm text-slate-500">
                {language === 'es' 
                  ? 'Planes de cuotas sin fricción financiera con desembolso directo y automático a la tesorería de tu universidad.'
                  : 'Frictionless installment plans with direct automated disbursement to your university treasury.'}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'es' ? 'Aprobación Inmediata con Carnet' : 'Instant Approval via Student ID'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuitionPlans.map((plan) => (
              <div 
                key={plan.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between relative group hover:border-indigo-300"
              >
                {plan.interestRate === 0 && (
                  <div className="absolute -top-3 right-6 bg-linear-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
                    {language === 'es' ? '0% Tasa Subsidiada' : '0% Subsidized Rate'}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {plan.sponsorBank}
                    </span>
                    <span className="font-mono text-slate-400">{plan.universityValidationCode}</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {language === 'es' ? 'Requisito:' : 'Requirement:'} <span className="font-medium text-slate-700">{plan.academicRequirement}</span>
                    </p>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-slate-500">{language === 'es' ? 'Costo Semestre' : 'Semester Cost'}</span>
                      <span className="text-lg font-extrabold text-slate-900">${plan.semesterCost.toLocaleString()} USD</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-600">
                      <span>{language === 'es' ? 'Cuotas mensuales' : 'Monthly installments'}</span>
                      <span className="font-bold text-indigo-700">{plan.installments} x ${plan.monthlyAmount.toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-600">
                      <span>{language === 'es' ? 'Desembolso a' : 'Disbursement to'}</span>
                      <span className="font-semibold text-emerald-700">{language === 'es' ? 'Tesorería Universidad' : 'University Treasury'}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2 text-xs text-slate-600">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onApplyPlan(plan)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm shadow-indigo-200 cursor-pointer"
                  >
                    <FileCheck2 className="w-4 h-4" />
                    {language === 'es' ? 'Activar con Aval Académico' : 'Activate with Academic Pass'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Escrow Explainer */}
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                {language === 'es' ? '¿Cómo funciona la liquidación directa universidad-banco?' : 'How does direct university-bank settlement work?'}
              </h4>
              <p className="text-xs text-blue-700 max-w-3xl leading-relaxed">
                {language === 'es'
                  ? 'Al activar tu plan, el banco transfiere el 100% de la matrícula a la tesorería de la universidad en tiempo real. Tu matrícula queda formalmente pagada de inmediato y tú abonas mensualmente tus cuotas pactadas sin intereses predatorios.'
                  : 'Upon activation, the partner bank transfers 100% of the tuition directly to the university treasury in real time. Your enrollment is officially locked, and you pay your subsidized monthly installments smoothly.'}
              </p>
            </div>
            <button
              onClick={onViewPrivacyCert}
              className="shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
            >
              {language === 'es' ? 'Protocolo de Seguridad' : 'Security Protocol'}
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Research Grants */}
      {activeTab === 'grants' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {language === 'es' ? 'Semilleros & Grants de Innovación Bancaria' : 'Banking Innovation & Research Grants'}
              </h2>
              <p className="text-sm text-slate-500">
                {language === 'es' 
                  ? 'Fondos no reembolsables aportados por la banca para financiar tesis, proyectos de grado y prototipos universitarios.'
                  : 'Non-reimbursable funds sponsored by banking partners to support thesis work, capstone projects, and campus tech.'}
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl">
              {['all', 'FinTech Innovation', 'AI & EdTech', 'Sostenibilidad'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-indigo-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'all' ? (language === 'es' ? 'Todos' : 'All') : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGrants.map((grant) => (
              <div
                key={grant.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                      {grant.category}
                    </span>
                    <span className="text-slate-400 font-medium text-[11px] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {grant.deadline}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
                      {grant.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {grant.description}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-slate-500">{language === 'es' ? 'Fondo por Proyecto' : 'Grant per Project'}</span>
                      <span className="text-base font-extrabold text-emerald-600">
                        ${grant.grantedPerProject.toLocaleString()} USD
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-500">
                      <span>{language === 'es' ? 'Patrocinador' : 'Sponsor'}</span>
                      <span className="font-semibold text-slate-700">{grant.sponsorLogo}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-xs text-slate-500">
                      <span>{language === 'es' ? 'Cupos Disponibles' : 'Open Spots'}</span>
                      <span className="font-bold text-indigo-600">{grant.openSpots} proyectos</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      {language === 'es' ? 'Requisitos Principales' : 'Key Requirements'}
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {grant.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onApplyGrant(grant)}
                    className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    {language === 'es' ? 'Postular Proyecto de Grado' : 'Submit Capstone Project'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Perks & Tech */}
      {activeTab === 'perks' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {language === 'es' ? 'Beneficios y Financiamiento de Equipamiento' : 'Campus Perks & Hardware Financing'}
            </h2>
            <p className="text-sm text-slate-500">
              {language === 'es' 
                ? 'Accede a hardware especializado, licencias profesionales y programas de intercambio con respaldo institucional.'
                : 'Access certified workstations, developer tools, and exchange programs with institutional backing.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {language === 'es' ? 'Workstation & Laptops para Ingeniería' : 'Engineering Workstations & Hardware'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'es' 
                  ? 'Financiamiento hasta 24 meses sin cuota inicial en convenio directo con distribuidores autorizados de la universidad.'
                  : 'Up to 24-month zero-down financing through university-authorized hardware partners.'}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>{language === 'es' ? 'Tasa pactada' : 'Subsidized APR'}</span>
                  <span className="font-bold text-emerald-600">1.2% E.A.</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>{language === 'es' ? 'Cupo sugerido' : 'Pre-approved credit'}</span>
                  <span className="font-bold text-slate-800">$1,800 USD</span>
                </div>
              </div>
              <button 
                onClick={() => onApplyPlan(tuitionPlans[1])}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-xl text-xs transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Solicitar Cotización de Equipo' : 'Request Hardware Quote'}
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {language === 'es' ? 'Fondo Escrow para Intercambio Global' : 'Global Exchange Escrow Fund'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'es' 
                  ? 'Garantía líquida y cuenta multimoneda para manutención en el extranjero, avalado por convenios bilaterales.'
                  : 'Liquid escrow balance and multi-currency account for study abroad programs under academic bilateral agreements.'}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>{language === 'es' ? 'Destinos activos' : 'Active destinations'}</span>
                  <span className="font-bold text-indigo-600">14 Países</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>{language === 'es' ? 'Comisión cambiaria' : 'FX Commission'}</span>
                  <span className="font-bold text-emerald-600">0%</span>
                </div>
              </div>
              <button 
                onClick={() => onApplyPlan(tuitionPlans[2])}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-xl text-xs transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Ver Condiciones de Intercambio' : 'View Exchange Conditions'}
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {language === 'es' ? 'Pasantías & Bolsa de Talento Bancario' : 'Early Banking Talent Pipeline'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'es' 
                  ? 'Postulación prioritaria a vacantes de analista cuantitativo, desarrollo de software y finanzas digitales en bancos aliados.'
                  : 'Fast-track recruitment into quantitative analysis, cloud dev, and fintech teams with partner banks.'}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1">
                <div className="flex justify-between text-slate-500">
                  <span>{language === 'es' ? 'Vacantes activas' : 'Active openings'}</span>
                  <span className="font-bold text-amber-600">38 Plazas</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>{language === 'es' ? 'Beca salario' : 'Stipend range'}</span>
                  <span className="font-bold text-slate-800">$950 - $1,400 USD/m</span>
                </div>
              </div>
              <button 
                onClick={() => alert(language === 'es' ? 'Tu perfil académico ha sido sincronizado con el Talent Hub Bancario.' : 'Your academic profile has been linked to the Banking Talent Hub.')}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 rounded-xl text-xs transition-colors cursor-pointer"
              >
                {language === 'es' ? 'Conectar Perfil a Bolsa' : 'Connect Profile to Talent Hub'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Smart Pass Details */}
      {activeTab === 'smart_pass' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {language === 'es' ? 'Carnet Digital & Verificación Criptográfica' : 'Digital Campus Pass & Cryptographic Credential'}
              </h2>
              <p className="text-sm text-slate-500">
                {language === 'es'
                  ? 'Tu identificación institucional interoperable entre el campus y las entidades financieras asociadas.'
                  : 'Your interoperable credential between university physical campus and banking partner infrastructure.'}
              </p>
            </div>
            <button
              onClick={onViewPrivacyCert}
              className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:bg-emerald-100 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {language === 'es' ? 'Certificado ZKP de Privacidad' : 'ZKP Privacy Certificate'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Visual Card */}
            <div className="bg-linear-to-tr from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-6 text-white border border-slate-700 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                    UNI
                  </div>
                  <span className="font-bold text-sm tracking-tight text-slate-200">{student.university}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-500/40">
                  {student.status}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="w-16 h-16 rounded-xl object-cover ring-2 ring-indigo-400"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">{student.name}</h3>
                  <p className="text-xs text-indigo-300 font-medium">{student.program}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">ID: {student.studentIdNumber}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700/70 text-center">
                <div>
                  <span className="text-[10px] text-slate-400 block">{language === 'es' ? 'Semestre' : 'Semester'}</span>
                  <span className="font-bold text-white text-sm">{student.semester}°</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">{language === 'es' ? 'Promedio' : 'GPA'}</span>
                  <span className="font-bold text-emerald-400 text-sm">{student.academicIndex}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">{language === 'es' ? 'SIS Sync' : 'SIS Sync'}</span>
                  <span className="font-bold text-blue-400 text-sm">T+0 Real</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800 text-slate-400">
                <span className="font-mono text-[10px]">{student.kycAcademicToken}</span>
                <span className="text-indigo-400 font-semibold">{student.bankPartner}</span>
              </div>
            </div>

            {/* Explanatory bullets */}
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {language === 'es' ? 'Validez Criptográfica en Campus & Banca' : 'Cryptographic Campus & Banking Validity'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'es'
                    ? 'El carnet almacena un token firmado por el SIS universitario que permite desbloquear beneficios bancarios de inmediato sin papeleos ni solicitud de avales familiares.'
                    : 'The pass holds a signed token from your university SIS enabling immediate activation of bank benefits without bureaucracy or co-signers.'}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  {language === 'es' ? 'Zero-Knowledge Proof (ZKP)' : 'Zero-Knowledge Proof (ZKP)'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'es'
                    ? 'El banco solo recibe un "verdadero/falso" sobre si estás matriculado y tienes regularidad académica. Ningún dato personal o financiero privado sale de tu control.'
                    : 'The bank only receives a cryptographic boolean indicating active enrollment and credit standing. No personal financial history is ever shared.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
