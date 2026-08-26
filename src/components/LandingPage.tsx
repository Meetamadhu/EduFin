import React, { useState } from 'react';
import { PersonaType, Language } from '../types';
import { 
  GraduationCap, 
  Building2, 
  Landmark, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Lock, 
  BarChart3, 
  Layers, 
  TrendingUp, 
  Users, 
  Award, 
  BookOpen, 
  Network, 
  ChevronRight, 
  DollarSign, 
  Clock, 
  FileText, 
  HelpCircle,
  Cpu,
  Globe2,
  Check
} from 'lucide-react';

interface LandingPageProps {
  language: Language;
  onSelectPersona: (persona: PersonaType) => void;
  onNavigateView: (view: 'prototype' | 'strategic_deck' | 'architecture' | 'simulator') => void;
  onOpenPrivacy: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  language,
  onSelectPersona,
  onNavigateView,
  onOpenPrivacy,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTabRole, setActiveTabRole] = useState<'student' | 'university' | 'bank'>('student');

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isEs = language === 'es';

  return (
    <div className="space-y-16 pb-12 animate-in fade-in duration-300">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-2xl">
        {/* Background ambient lighting effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>
              {isEs 
                ? 'Ecosistema Institucional B2B2C Universidad – Banca – Estudiante' 
                : 'B2B2C Institutional Ecosystem: Universities – Banking – Students'}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {isEs ? (
              <>
                El Puente Institucional que Transforma el{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Financiamiento Educativo
                </span>{' '}
                y la Tesorería Universitaria
              </>
            ) : (
              <>
                The Institutional Bridge Transforming{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Higher Ed Financing
                </span>{' '}
                and University Treasury
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {isEs
              ? 'Conectamos a las universidades con las entidades financieras mediante aval académico, liquidación directa en escrow T+0 y grants de investigación. Cero revisión de finanzas personales o historial crediticio previo.'
              : 'Connecting universities and financial institutions through academic underwriting, T+0 direct escrow settlement, and research grants. Zero review of personal finances or prior credit history.'}
          </p>

          {/* Fast Quick-Jump Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs">
            <button
              onClick={() => onSelectPersona('student')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{isEs ? 'Entrar como Estudiante' : 'Enter as Student'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectPersona('university')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              <span>{isEs ? 'Entrar como Universidad' : 'Enter as University'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelectPersona('bank')}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 cursor-pointer"
            >
              <Landmark className="w-4 h-4" />
              <span>{isEs ? 'Entrar como Banco / FinTech' : 'Enter as Bank / FinTech'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Privacy Micro-Badge */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              {isEs 
                ? 'Garantía Criptográfica ZKP: Tu historial y extractos bancarios personales nunca son expuestos.' 
                : 'ZKP Cryptographic Guarantee: Personal banking history is never accessed or exposed.'}
            </span>
            <button
              onClick={onOpenPrivacy}
              className="underline text-indigo-300 hover:text-white cursor-pointer ml-1"
            >
              {isEs ? 'Ver protocolo' : 'View protocol'}
            </button>
          </div>
        </div>

        {/* Live Metrics Ticker */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">18+</span>
            <p className="text-xs text-slate-400">{isEs ? 'Universidades Conectadas (SIS)' : 'Connected Universities'}</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400">T+0</span>
            <p className="text-xs text-slate-400">{isEs ? 'Conciliación Automática en Escrow' : 'Automated Escrow Settlement'}</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">&lt; 0.42%</span>
            <p className="text-xs text-slate-400">{isEs ? 'Tasa de Mora Institucional' : 'Institutional Default Rate'}</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-400">100%</span>
            <p className="text-xs text-slate-400">{isEs ? 'Privacidad por Diseño (ZKP)' : 'Privacy by Design (ZKP)'}</p>
          </div>
        </div>
      </section>

      {/* THREE MAIN PORTAL ENTRY CARDS (STUDENTS, UNIVERSITIES, BANKS) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isEs ? 'Selecciona tu Puerta de Entrada' : 'Select Your Access Portal'}
          </h2>
          <p className="text-sm text-slate-600">
            {isEs 
              ? 'Explora la experiencia interactiva diseñada para cada actor clave del ecosistema educativo y financiero.'
              : 'Explore the dedicated interactive experience built for each core stakeholder.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 1. STUDENT ENTRY CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {isEs ? 'Portal Estudiantil' : 'Student Portal'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {isEs ? 'Estudiantes Universitarios' : 'University Students'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isEs
                    ? 'Tu trayectoria académica y avance de créditos son tu respaldo para financiar matrícula, hardware y proyectos.'
                    : 'Your academic progress and credits unlock tuition financing, tech gear, and research grants.'}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Smart Student Pass:</strong> {isEs ? 'Carnet digital e identidad interoperable con el campus.' : 'Interoperable digital campus ID & pass.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Planes Matrícula 0%:</strong> {isEs ? 'Subsidio por convenio directo con tesorería universitaria.' : '0% subsidized tuition via institutional agreement.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Grants de Investigación:</strong> {isEs ? 'Fondos no reembolsables patrocinados por la banca.' : 'Non-repayable innovation grants from bank sponsors.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Sin Buró Crediticio:</strong> {isEs ? 'Aval 100% académico sin solicitar nóminas familiares.' : '100% academic underwriting without family payslips.'}</span>
                </div>
              </div>

              {/* Mini Preview Box */}
              <div className="bg-indigo-50/60 rounded-xl p-3 border border-indigo-100/80 text-[11px] text-indigo-900 flex items-center justify-between">
                <span>{isEs ? 'Perfil de ejemplo activo:' : 'Sample active profile:'}</span>
                <span className="font-bold text-indigo-700">Valentina R. (Prom. 4.85)</span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onSelectPersona('student')}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all group-hover:gap-3 cursor-pointer"
              >
                <span>{isEs ? 'Ingresar al Portal Estudiante' : 'Enter Student Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. UNIVERSITY ENTRY CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {isEs ? 'Portal Universidad' : 'University Portal'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {isEs ? 'Directivos & Tesorería Universitaria' : 'University Deans & Treasury'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isEs
                    ? 'Garantiza liquidez al inicio de cada semestre, automatiza la conciliación contable y mitiga la deserción.'
                    : 'Secure upfront semester liquidity, automate accounting reconciliation, and mitigate dropout risk.'}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Conciliación T+0 en Escrow:</strong> {isEs ? 'Flujo directo a la cuenta concentradora sin cobro manual.' : 'Direct settlement into treasury with zero manual chasing.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Alerta Temprana de Abandono:</strong> {isEs ? 'Detección predictiva y activación de fondos de retención.' : 'Predictive dropout intervention and relief buffers.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Conectores SIS (Banner/Canvas):</strong> {isEs ? 'Sincronización segura de estados académicos y cuotas.' : 'Plug-and-play sync with Banner, Canvas, and Moodle.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Co-Financiamiento de Labs:</strong> {isEs ? 'Supervisión de entregables de semilleros con la banca.' : 'Joint lab funding & research deliverable monitoring.'}</span>
                </div>
              </div>

              {/* Mini Preview Box */}
              <div className="bg-blue-50/60 rounded-xl p-3 border border-blue-100/80 text-[11px] text-blue-900 flex items-center justify-between">
                <span>{isEs ? 'Estado tesorería actual:' : 'Current treasury status:'}</span>
                <span className="font-bold text-blue-700">99.4% Conciliado (14.2K Alumnos)</span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onSelectPersona('university')}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all group-hover:gap-3 cursor-pointer"
              >
                <span>{isEs ? 'Ingresar al Portal Universidad' : 'Enter University Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. BANK ENTRY CARD */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-100 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30">
                  <Landmark className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {isEs ? 'Portal Bancario' : 'Bank Portal'}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {isEs ? 'Entidades Bancarias & FinTechs' : 'Banks & FinTech Partners'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isEs
                    ? 'Originación masiva de clientes de alto LTV con CAC $0, riesgo &lt;0.8% y cartera ESG verificada.'
                    : 'Low-CAC origination of high-LTV future professionals with <0.8% default and verified ESG metrics.'}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Motor Academic Underwriting:</strong> {isEs ? 'Suscripción basada en avance curricular y titulación.' : 'Scoring engine driven by degree completion metrics.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Adquisición CAC $0:</strong> {isEs ? 'Onboarding institucional dentro del campus universitario.' : 'Zero CAC onboarding directly inside campus channels.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bonos Sociales & Metas ESG:</strong> {isEs ? 'Cartera 100% computable como inclusión financiera formal.' : 'Inclusion portfolio qualifying for official ESG credit.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>72% Retención de Nómina:</strong> {isEs ? 'Fidelización temprana para hipotecas y cuentas laborales.' : 'High graduate retention into lifelong primary banking.'}</span>
                </div>
              </div>

              {/* Mini Preview Box */}
              <div className="bg-emerald-50/60 rounded-xl p-3 border border-emerald-100/80 text-[11px] text-emerald-900 flex items-center justify-between">
                <span>{isEs ? 'Cartera institucional actual:' : 'Current active portfolio:'}</span>
                <span className="font-bold text-emerald-700">$18.2M USD (0.42% Mora)</span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onSelectPersona('bank')}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all group-hover:gap-3 cursor-pointer"
              >
                <span>{isEs ? 'Ingresar al Portal Bancario' : 'Enter Bank Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW THE ECOSYSTEM WORKS: 3-STEP COLLABORATION */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            {isEs ? 'Flujo de Interacción Institucional' : 'Institutional Interaction Flow'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isEs ? '¿Cómo Conectamos a los Tres Actores?' : 'How We Connect All Three Stakeholders'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isEs
              ? 'Un circuito cerrado donde el aval académico sustituye al fiador y los fondos fluyen directamente a la tesorería.'
              : 'A closed loop where academic milestones replace guarantors and funds disburse directly to university escrow.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {isEs ? 'Validación Académica Automática' : 'Automated Academic Verification'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEs
                ? 'El estudiante solicita su plan o grant desde su Smart Pass. El sistema SIS de la universidad certifica su estatus regular y avance de créditos sin revelar datos privados.'
                : 'The student requests their plan or grant via Smart Pass. The university SIS confirms active enrollment and progress with zero personal data leakage.'}
            </p>
            <div className="text-[11px] font-semibold text-indigo-700 bg-indigo-100/60 px-2.5 py-1 rounded-lg">
              {isEs ? 'Zero-Knowledge Proof (ZKP)' : 'Zero-Knowledge Proof (ZKP)'}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {isEs ? 'Desembolso en Escrow T+0' : 'T+0 Direct Escrow Disbursement'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEs
                ? 'El banco aliado desembolsa la matrícula directamente en la cuenta concentradora de la universidad, eliminando desvíos de fondos y conciliando contablemente al instante.'
                : 'The partner bank transfers tuition directly into the university treasury account, eliminating fund diversion and completing reconciliation in real time.'}
            </p>
            <div className="text-[11px] font-semibold text-blue-700 bg-blue-100/60 px-2.5 py-1 rounded-lg">
              {isEs ? 'Conciliación Automática T+0' : 'Real-time T+0 Settlement'}
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {isEs ? 'Retención, Grants y Vínculo Laboral' : 'Retention, Grants & Career Link'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isEs
                ? 'La universidad reduce el abandono escolar; el estudiante se gradúa sin deudas predatorias y el banco fideliza al profesional con su cuenta de nómina y productos futuros.'
                : 'The university stops dropout; students graduate without predatory debt, and the bank captures a loyal professional for future payroll and mortgage accounts.'}
            </p>
            <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-lg">
              {isEs ? 'Win-Win-Win Sostenible' : 'Sustainable Win-Win-Win'}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON: TRADITIONAL VS NEXUS EDUFIN */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isEs ? '¿Por qué el Modelo Tradicional está Roto?' : 'Why the Traditional Model is Broken'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {isEs
              ? 'Comparativa entre el crédito de consumo bancario tradicional y el ecosistema institucional Nexus EduFin.'
              : 'Comparing traditional consumer credit with the Nexus EduFin institutional framework.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Way */}
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-rose-500/20 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span>{isEs ? 'Modelo Bancario Tradicional (Invasivo & Ineficiente)' : 'Traditional Consumer Credit (Invasive & Inefficient)'}</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold text-sm">✕</span>
                <span>{isEs ? 'Exige extractos bancarios personales, fiadores con bienes inmuebles y scoring en buró que los jóvenes no tienen.' : 'Demands personal bank statements, property-backed cosigners, and credit scores students lack.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold text-sm">✕</span>
                <span>{isEs ? 'Cobranza manual y dispersa: la universidad invierte meses persiguiendo pagos de matrícula atrasados.' : 'Manual, fragmented collection: universities spend months chasing overdue payments.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold text-sm">✕</span>
                <span>{isEs ? 'Tasas de interés de consumo de más del 25% anual que asfixian y fuerzan la deserción estudiantil.' : 'High consumer interest rates exceeding 25% APR forcing student dropouts.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold text-sm">✕</span>
                <span>{isEs ? 'Cero vinculación con la investigación, semilleros o retención académica del campus.' : 'Zero integration with research labs, campus innovation, or graduation incentives.'}</span>
              </li>
            </ul>
          </div>

          {/* Nexus EduFin Way */}
          <div className="bg-indigo-900/40 rounded-2xl p-6 border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isEs ? 'Ecosistema NEXUS EduFin (Institucional & Justo)' : 'NEXUS EduFin Ecosystem (Institutional & Fair)'}</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{isEs ? 'Aval Académico Institucional (SIS): el avance de créditos y el valor del título sustituyen al fiador.' : 'Academic Underwriting (SIS): course credits and degree completion value replace guarantors.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{isEs ? 'Desembolso T+0 directo en Escrow a tesorería universitaria, con conciliación automática.' : 'T+0 direct escrow disbursement into university treasury with instant automated reconciliation.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{isEs ? 'Tasa 0% o preferencial subsidiada por fondos de retención y convenios institucionales.' : '0% or subsidized rates backed by retention buffers and institutional agreements.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{isEs ? 'Marketplace de Grants bancarios que premia el talento y fomenta la innovación universitaria.' : 'Bank-sponsored research grants funding thesis, student labs, and patent prototypes.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRATEGIC MODULES EXPLORATION BAR */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {isEs ? 'Explora la Documentación Estratégica & Simuladores' : 'Explore Strategic Modules & Simulators'}
            </h3>
            <p className="text-xs text-slate-500">
              {isEs ? 'Accede a los análisis profundos, la arquitectura técnica de privacidad y el simulador de retorno de inversión.' : 'Access comprehensive strategic decks, technical architecture, and the ROI simulator.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Strategic Deck */}
          <div 
            onClick={() => onNavigateView('strategic_deck')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                {isEs ? 'Marco Estratégico & Pilares' : 'Strategic Framework & Pillars'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isEs 
                  ? 'Pilares EdTech, FinTech, escalabilidad multisede, impacto ESG y plan de implementación en 6 semanas.'
                  : 'EdTech & FinTech pillars, scalability roadmap, ESG social metrics, and 6-week deployment plan.'}
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
              <span>{isEs ? 'Ver presentación completa' : 'View full deck'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Architecture & ZKP */}
          <div 
            onClick={() => onNavigateView('architecture')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                {isEs ? 'Arquitectura Técnica & Privacidad ZKP' : 'Technical Architecture & ZKP'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isEs 
                  ? 'Diagrama del puente SIS-Banca, flujo de tokens encriptados y garantía de cero acceso a extractos personales.'
                  : 'SIS-to-Bank bridge architecture, encrypted credential flows, and Zero-Knowledge Proof protocol.'}
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
              <span>{isEs ? 'Ver arquitectura del puente' : 'View bridge architecture'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: ROI Simulator */}
          <div 
            onClick={() => onNavigateView('simulator')}
            className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-600 transition-colors">
                {isEs ? 'Simulador de Impacto & ROI' : 'Impact & ROI Simulator'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isEs 
                  ? 'Calculadora interactiva para proyectar ahorros en deserción, colocación bancaria y retorno universitario.'
                  : 'Interactive financial calculator modeling dropout savings, banking portfolio, and university ROI.'}
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
              <span>{isEs ? 'Calcular métricas' : 'Calculate metrics'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (ROLE-BASED FAQ) */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isEs ? 'Resolviendo Dudas Institucionales' : 'Answering Institutional Questions'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {isEs ? 'Claridad absoluta sobre gobernanza, riesgo y privacidad.' : 'Complete transparency on governance, risk, and privacy.'}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 pt-4">
          {[
            {
              q: isEs ? '¿Por qué no se revisa el historial crediticio o finanzas personales de los estudiantes?' : 'Why is there zero review of personal finances or student credit history?',
              a: isEs
                ? 'El ecosistema Nexus EduFin opera con suscripción académica (Academic Underwriting). La probabilidad de pago y el valor económico se fundamentan en el avance del plan de estudios y la retención del título profesional, no en el historial financiero pasado de una familia. La universidad actúa como garante institucional y los fondos se liquidan en escrow directo a matrícula.'
                : 'Nexus EduFin relies on Academic Underwriting. Repayment probability and economic value stem from curriculum advancement and the high return on completed degrees, not historical family wealth. The university acts as the institutional anchor and funds disburse directly to tuition in escrow.'
            },
            {
              q: isEs ? '¿Cómo garantiza la universidad su flujo de caja y cómo se integra con el SIS?' : 'How does the university secure treasury cashflow and integrate with existing SIS?',
              a: isEs
                ? 'Los bancos aliados dispersan el 100% de la matrícula al inicio de cada semestre directamente en la cuenta concentradora de la universidad (T+0). La integración se realiza mediante conectores API ligeros y seguros con plataformas estándar como Banner, Canvas, PeopleSoft o Moodle en un plazo de 6 semanas sin alterar su infraestructura central.'
                : 'Partner banks disburse 100% of enrolled tuition directly into the university treasury account at semester start (T+0). Integration is handled via lightweight, secure API webhooks with Banner, Canvas, PeopleSoft, or Moodle within 6 weeks without disrupting legacy infrastructure.'
            },
            {
              q: isEs ? '¿Cómo mitiga la entidad bancaria el riesgo crediticio si la tasa de mora es inferior al 0.5%?' : 'How does the bank mitigate credit risk to achieve a sub-0.5% default rate?',
              a: isEs
                ? 'El riesgo se mitiga estructuralmente a través de cuatro mecanismos: 1) Los fondos nunca se entregan en efectivo sino que van a la matrícula universitaria en escrow; 2) Existe un fondo de retención y alivio de emergencias co-financiado; 3) El estudiante mantiene un incentivo máximo para conservar su estatus académico; y 4) La tasa de retención de nómina post-graduación supera el 72%.'
                : 'Risk is mitigated through four structural pillars: 1) Funds disburse straight into tuition escrow (no cash leakage); 2) Joint emergency retention buffers absorb temporary hardship; 3) Students are deeply incentivized to maintain enrollment; and 4) Graduate payroll retention exceeds 72%.'
            },
            {
              q: isEs ? '¿Qué son los Grants Bancarios de Investigación y cómo se adjudican?' : 'What are Bank-Sponsored Research Grants and how are they awarded?',
              a: isEs
                ? 'Son fondos directos a fondo perdido que las entidades bancarias destinan a semilleros, tesis y proyectos de innovación (FinTech, IA, sostenibilidad). Los estudiantes postulan con su aval docente y los fondos se liberan por cumplimiento de hitos académicos certificados por la universidad.'
                : 'They are non-repayable corporate funds allocated by partner banks for student labs, thesis innovation, and prototypes (FinTech, AI, ESG). Students apply with faculty endorsements, and tranches unlock upon certified milestone completions.'
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-4 hover:bg-slate-100/60 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronRight
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                    activeFaq === idx ? 'rotate-90 text-indigo-600' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION / ENTRY SELECTOR */}
      <section className="bg-gradient-to-tr from-indigo-900 via-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-indigo-700/40">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {isEs ? '¿Listo para experimentar el ecosistema?' : 'Ready to Experience the Ecosystem?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            {isEs
              ? 'Haz clic en el portal correspondiente para iniciar la simulación interactiva con datos reales y flujos en vivo.'
              : 'Click your designated portal below to start the interactive simulation with live workflows and verified data.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onSelectPersona('student')}
            className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2.5 shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>{isEs ? 'Entrar como Estudiante' : 'Enter as Student'}</span>
          </button>
          <button
            onClick={() => onSelectPersona('university')}
            className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2.5 shadow-xl shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
          >
            <Building2 className="w-5 h-5" />
            <span>{isEs ? 'Entrar como Universidad' : 'Enter as University'}</span>
          </button>
          <button
            onClick={() => onSelectPersona('bank')}
            className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2.5 shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 cursor-pointer"
          >
            <Landmark className="w-5 h-5" />
            <span>{isEs ? 'Entrar como Banco' : 'Enter as Bank'}</span>
          </button>
        </div>
      </section>
    </div>
  );
};
