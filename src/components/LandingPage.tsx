import React, { useState } from 'react';
import { PersonaType, Language } from '../types';
import { 
  GraduationCap, 
  Building2, 
  Landmark, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  BookOpen, 
  Network, 
  ChevronRight, 
  Check,
  Clock
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

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const isEs = language === 'es';

  return (
    <div className="space-y-16 pb-12 animate-in fade-in duration-300">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-sky-950 text-white p-6 sm:p-10 lg:p-14 min-h-[540px] border border-sky-300 shadow-xl">
        <img
          src="/hero-campus.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none backdrop-blur-[8px]"
          style={{
            WebkitMaskImage: 'linear-gradient(108deg, black 0%, black 36%, transparent 58%)',
            maskImage: 'linear-gradient(108deg, black 0%, black 36%, transparent 58%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(108deg, rgba(8, 47, 73, 0.92) 0%, rgba(12, 74, 110, 0.78) 34%, rgba(12, 74, 110, 0.28) 52%, transparent 68%)',
          }}
        />

        <div className="relative z-10 max-w-xl lg:max-w-[52%] space-y-5">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
            {isEs
              ? 'Financia tu matrícula con el aval de tu universidad'
              : 'Finance tuition with your university’s backing'}
          </h1>
          <p className="text-base sm:text-lg text-white/95 max-w-lg leading-relaxed">
            {isEs
              ? 'Sin buró de crédito. El banco paga directo a tesorería.'
              : 'No credit bureau. The bank pays treasury directly.'}
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectPersona('student')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{isEs ? 'Soy estudiante' : 'I’m a student'}</span>
            </button>
            <button
              onClick={() => onSelectPersona('university')}
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              <span>{isEs ? 'Soy universidad' : 'I’m a university'}</span>
            </button>
            <button
              onClick={() => onSelectPersona('bank')}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <Landmark className="w-4 h-4" />
              <span>{isEs ? 'Soy banco' : 'I’m a bank'}</span>
            </button>
          </div>

          <p className="text-sm text-white/90 flex flex-wrap items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            {isEs
              ? 'Tu historial y extractos personales no se revisan.'
              : 'Your personal statements and credit history are not reviewed.'}
            <button onClick={onOpenPrivacy} className="underline hover:text-white cursor-pointer">
              {isEs ? 'Cómo' : 'How'}
            </button>
          </p>
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-2 gap-3 max-w-xl lg:max-w-[52%]">
          {[
            {
              value: '18+',
              label: isEs ? 'Universidades' : 'Universities',
              icon: Building2,
              accent: 'bg-sky-400/20 text-sky-200 border-sky-300/30',
            },
            {
              value: 'T+0',
              label: isEs ? 'Pago el mismo día' : 'Same-day settlement',
              icon: Clock,
              accent: 'bg-amber-400/20 text-amber-200 border-amber-300/30',
            },
            {
              value: '< 0.42%',
              label: isEs ? 'Mora institucional' : 'Default rate',
              icon: BarChart3,
              accent: 'bg-emerald-400/20 text-emerald-200 border-emerald-300/30',
            },
            {
              value: '0',
              label: isEs ? 'Revisión de buró' : 'Credit checks',
              icon: ShieldCheck,
              accent: 'bg-indigo-400/20 text-indigo-200 border-indigo-300/30',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/12 backdrop-blur-md border border-white/25 p-4 shadow-[0_10px_28px_rgba(8,47,73,0.28)] hover:bg-white/18 hover:border-white/40 transition-colors"
            >
              <div className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-xl border ${stat.accent}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {stat.value}
              </span>
              <p className="mt-1 text-sm text-white/80 leading-snug">{stat.label}</p>
            </div>
          ))}
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
          <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-br from-white via-indigo-50/70 to-violet-50/40 border border-indigo-200/80 hover:border-indigo-400 shadow-[0_10px_30px_rgba(79,70,229,0.08)] hover:shadow-[0_22px_44px_rgba(79,70,229,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-indigo-500 via-violet-400 to-indigo-600" />
            <div className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none group-hover:bg-indigo-400/30 transition-colors" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-violet-200/30 rounded-tr-full pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/40 ring-4 ring-indigo-100 group-hover:scale-110 group-hover:ring-indigo-200 transition-all duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 text-indigo-700 border border-indigo-200 shadow-sm backdrop-blur-sm">
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

              <div className="space-y-1.5 pt-2 border-t border-indigo-100/80 text-sm text-slate-600">
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Smart Student Pass:</strong> {isEs ? 'Carnet digital e identidad interoperable con el campus.' : 'Interoperable digital campus ID & pass.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Planes Matrícula 0%:</strong> {isEs ? 'Subsidio por convenio directo con tesorería universitaria.' : '0% subsidized tuition via institutional agreement.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Grants de Investigación:</strong> {isEs ? 'Fondos no reembolsables patrocinados por la banca.' : 'Non-repayable innovation grants from bank sponsors.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Sin Buró Crediticio:</strong> {isEs ? 'Aval 100% académico sin solicitar nóminas familiares.' : '100% academic underwriting without family payslips.'}</span>
                </div>
              </div>

              {/* Mini Preview Box */}
              <div className="bg-white/80 rounded-xl p-3 border border-indigo-200/80 text-[11px] text-indigo-900 flex items-center justify-between shadow-sm backdrop-blur-sm">
                <span>{isEs ? 'Perfil de ejemplo activo:' : 'Sample active profile:'}</span>
                <span className="font-bold text-indigo-700">Valentina R. (Prom. 4.85)</span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onSelectPersona('student')}
                className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all group-hover:gap-3 cursor-pointer"
              >
                <span>{isEs ? 'Ingresar al Portal Estudiante' : 'Enter Student Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. UNIVERSITY ENTRY CARD */}
          <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-br from-white via-sky-50/80 to-blue-50/50 border border-sky-200/80 hover:border-blue-400 shadow-[0_10px_30px_rgba(37,99,235,0.08)] hover:shadow-[0_22px_44px_rgba(37,99,235,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-sky-500 via-blue-500 to-indigo-500" />
            <div className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-sky-400/20 blur-3xl pointer-events-none group-hover:bg-sky-400/30 transition-colors" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-blue-200/30 rounded-tr-full pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 ring-4 ring-sky-100 group-hover:scale-110 group-hover:ring-sky-200 transition-all duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 text-blue-700 border border-sky-200 shadow-sm backdrop-blur-sm">
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

              <div className="space-y-1.5 pt-2 border-t border-sky-100/80 text-sm text-slate-600">
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Conciliación T+0 en Escrow:</strong> {isEs ? 'Flujo directo a la cuenta concentradora sin cobro manual.' : 'Direct settlement into treasury with zero manual chasing.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Alerta Temprana de Abandono:</strong> {isEs ? 'Detección predictiva y activación de fondos de retención.' : 'Predictive dropout intervention and relief buffers.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Conectores SIS (Banner/Canvas):</strong> {isEs ? 'Sincronización segura de estados académicos y cuotas.' : 'Plug-and-play sync with Banner, Canvas, and Moodle.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Co-Financiamiento de Labs:</strong> {isEs ? 'Supervisión de entregables de semilleros con la banca.' : 'Joint lab funding & research deliverable monitoring.'}</span>
                </div>
              </div>

              {/* Mini Preview Box */}
              <div className="bg-white/80 rounded-xl p-3 border border-sky-200/80 text-[11px] text-blue-900 flex items-center justify-between shadow-sm backdrop-blur-sm">
                <span>{isEs ? 'Estado tesorería actual:' : 'Current treasury status:'}</span>
                <span className="font-bold text-blue-700">99.4% Conciliado (14.2K Alumnos)</span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onSelectPersona('university')}
                className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all group-hover:gap-3 cursor-pointer"
              >
                <span>{isEs ? 'Ingresar al Portal Universidad' : 'Enter University Portal'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3. BANK ENTRY CARD */}
          <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-br from-white via-emerald-50/70 to-teal-50/40 border border-emerald-200/80 hover:border-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.08)] hover:shadow-[0_22px_44px_rgba(16,185,129,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-emerald-500 via-teal-400 to-emerald-600" />
            <div className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none group-hover:bg-emerald-400/30 transition-colors" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-teal-200/30 rounded-tr-full pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/40 ring-4 ring-emerald-100 group-hover:scale-110 group-hover:ring-emerald-200 transition-all duration-300">
                  <Landmark className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/80 text-emerald-700 border border-emerald-200 shadow-sm backdrop-blur-sm">
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

              <div className="space-y-1.5 pt-2 border-t border-emerald-100/80 text-sm text-slate-600">
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Motor Academic Underwriting:</strong> {isEs ? 'Suscripción basada en avance curricular y titulación.' : 'Scoring engine driven by degree completion metrics.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Adquisición CAC $0:</strong> {isEs ? 'Onboarding institucional dentro del campus universitario.' : 'Zero CAC onboarding directly inside campus channels.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bonos Sociales & Metas ESG:</strong> {isEs ? 'Cartera 100% computable como inclusión financiera formal.' : 'Inclusion portfolio qualifying for official ESG credit.'}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl px-2 py-1.5 hover:bg-white/70 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>72% Retención de Nómina:</strong> {isEs ? 'Fidelización temprana para hipotecas y cuentas laborales.' : 'High graduate retention into lifelong primary banking.'}</span>
                </div>
              </div>

              {/* Mini Preview Box */}
              <div className="bg-white/80 rounded-xl p-3 border border-emerald-200/80 text-[11px] text-emerald-900 flex items-center justify-between shadow-sm backdrop-blur-sm">
                <span>{isEs ? 'Cartera institucional actual:' : 'Current active portfolio:'}</span>
                <span className="font-bold text-emerald-700">$18.2M USD (0.42% Mora)</span>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onSelectPersona('bank')}
                className="w-full py-3 px-4 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all group-hover:gap-3 cursor-pointer"
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
          <p className="text-sm text-slate-500">
            {isEs
              ? 'Un circuito cerrado donde el aval académico sustituye al fiador y los fondos fluyen directamente a la tesorería.'
              : 'A closed loop where academic milestones replace guarantors and funds disburse directly to university escrow.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden bg-linear-to-br from-white to-indigo-50/80 p-6 rounded-2xl border border-indigo-100 shadow-[0_8px_24px_rgba(79,70,229,0.06)] hover:shadow-[0_16px_32px_rgba(79,70,229,0.14)] hover:-translate-y-1 transition-all duration-300 space-y-4">
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-linear-to-b from-indigo-500 to-violet-500" />
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-indigo-500/30">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {isEs ? 'Validación Académica Automática' : 'Automated Academic Verification'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEs
                ? 'El estudiante solicita su plan o grant desde su Smart Pass. El sistema SIS de la universidad certifica su estatus regular y avance de créditos sin revelar datos privados.'
                : 'The student requests their plan or grant via Smart Pass. The university SIS confirms active enrollment and progress with zero personal data leakage.'}
            </p>
            <div className="text-[11px] font-semibold text-indigo-700 bg-indigo-100/80 px-2.5 py-1 rounded-lg w-fit border border-indigo-200/70">
              {isEs ? 'Zero-Knowledge Proof (ZKP)' : 'Zero-Knowledge Proof (ZKP)'}
            </div>
          </div>

          <div className="relative overflow-hidden bg-linear-to-br from-white to-sky-50/80 p-6 rounded-2xl border border-sky-100 shadow-[0_8px_24px_rgba(37,99,235,0.06)] hover:shadow-[0_16px_32px_rgba(37,99,235,0.14)] hover:-translate-y-1 transition-all duration-300 space-y-4">
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-linear-to-b from-sky-500 to-blue-600" />
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-blue-500/30">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {isEs ? 'Desembolso en Escrow T+0' : 'T+0 Direct Escrow Disbursement'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEs
                ? 'El banco aliado desembolsa la matrícula directamente en la cuenta concentradora de la universidad, eliminando desvíos de fondos y conciliando contablemente al instante.'
                : 'The partner bank transfers tuition directly into the university treasury account, eliminating fund diversion and completing reconciliation in real time.'}
            </p>
            <div className="text-[11px] font-semibold text-blue-700 bg-sky-100/80 px-2.5 py-1 rounded-lg w-fit border border-sky-200/70">
              {isEs ? 'Conciliación Automática T+0' : 'Real-time T+0 Settlement'}
            </div>
          </div>

          <div className="relative overflow-hidden bg-linear-to-br from-white to-emerald-50/80 p-6 rounded-2xl border border-emerald-100 shadow-[0_8px_24px_rgba(16,185,129,0.06)] hover:shadow-[0_16px_32px_rgba(16,185,129,0.14)] hover:-translate-y-1 transition-all duration-300 space-y-4">
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-linear-to-b from-emerald-500 to-teal-500" />
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-emerald-500/30">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">
              {isEs ? 'Retención, Grants y Vínculo Laboral' : 'Retention, Grants & Career Link'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEs
                ? 'La universidad reduce el abandono escolar; el estudiante se gradúa sin deudas predatorias y el banco fideliza al profesional con su cuenta de nómina y productos futuros.'
                : 'The university stops dropout; students graduate without predatory debt, and the bank captures a loyal professional for future payroll and mortgage accounts.'}
            </p>
            <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg w-fit border border-emerald-200/70">
              {isEs ? 'Win-Win-Win Sostenible' : 'Sustainable Win-Win-Win'}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON: TRADITIONAL VS NEXUS EDUFIN */}
      <section className="bg-sky-400 text-white rounded-3xl p-6 sm:p-10 border border-sky-300 shadow-xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {isEs ? '¿Por qué el Modelo Tradicional está Roto?' : 'Why the Traditional Model is Broken'}
          </h2>
          <p className="text-xs sm:text-sm text-sky-50/90">
            {isEs
              ? 'Comparativa entre el crédito de consumo bancario tradicional y el ecosistema institucional Nexus EduFin.'
              : 'Comparing traditional consumer credit with the Nexus EduFin institutional framework.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Way */}
          <div className="bg-white rounded-2xl p-6 border border-rose-200 space-y-4 shadow-[0_12px_32px_rgba(244,63,94,0.12)] hover:border-rose-300 hover:shadow-[0_16px_36px_rgba(244,63,94,0.16)] transition-all">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span>{isEs ? 'Modelo Bancario Tradicional (Invasivo & Ineficiente)' : 'Traditional Consumer Credit (Invasive & Inefficient)'}</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold text-sm">✕</span>
                <span>{isEs ? 'Exige extractos bancarios personales, fiadores con bienes inmuebles y scoring en buró que los jóvenes no tienen.' : 'Demands personal bank statements, property-backed cosigners, and credit scores students lack.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold text-sm">✕</span>
                <span>{isEs ? 'Cobranza manual y dispersa: la universidad invierte meses persiguiendo pagos de matrícula atrasados.' : 'Manual, fragmented collection: universities spend months chasing overdue payments.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold text-sm">✕</span>
                <span>{isEs ? 'Tasas de interés de consumo de más del 25% anual que asfixian y fuerzan la deserción estudiantil.' : 'High consumer interest rates exceeding 25% APR forcing student dropouts.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold text-sm">✕</span>
                <span>{isEs ? 'Cero vinculación con la investigación, semilleros o retención académica del campus.' : 'Zero integration with research labs, campus innovation, or graduation incentives.'}</span>
              </li>
            </ul>
          </div>

          {/* Nexus EduFin Way */}
          <div className="bg-white rounded-2xl p-6 border border-emerald-200 space-y-4 shadow-[0_12px_32px_rgba(16,185,129,0.12)] hover:border-emerald-300 hover:shadow-[0_16px_36px_rgba(16,185,129,0.16)] transition-all">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isEs ? 'Ecosistema NEXUS EduFin (Institucional & Justo)' : 'NEXUS EduFin Ecosystem (Institutional & Fair)'}</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isEs ? 'Aval Académico Institucional (SIS): el avance de créditos y el valor del título sustituyen al fiador.' : 'Academic Underwriting (SIS): course credits and degree completion value replace guarantors.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isEs ? 'Desembolso T+0 directo en Escrow a tesorería universitaria, con conciliación automática.' : 'T+0 direct escrow disbursement into university treasury with instant automated reconciliation.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isEs ? 'Tasa 0% o preferencial subsidiada por fondos de retención y convenios institucionales.' : '0% or subsidized rates backed by retention buffers and institutional agreements.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{isEs ? 'Marketplace de Grants bancarios que premia el talento y fomenta la innovación universitaria.' : 'Bank-sponsored research grants funding thesis, student labs, and patent prototypes.'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STRATEGIC MODULES EXPLORATION BAR */}
      <section className="relative overflow-hidden rounded-3xl p-6 sm:p-10 border border-indigo-100/80 bg-linear-to-br from-indigo-50 via-sky-50 to-emerald-50 shadow-[0_12px_40px_rgba(79,70,229,0.08)] space-y-6">
        <div className="absolute -top-16 -left-10 w-56 h-56 rounded-full bg-indigo-300/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-10 w-56 h-56 rounded-full bg-emerald-300/25 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-sky-300/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {isEs ? 'Explora la Documentación Estratégica & Simuladores' : 'Explore Strategic Modules & Simulators'}
            </h3>
            <p className="text-sm text-slate-600">
              {isEs ? 'Accede a los análisis profundos, la arquitectura técnica de privacidad y el simulador de retorno de inversión.' : 'Access comprehensive strategic decks, technical architecture, and the ROI simulator.'}
            </p>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Strategic Deck */}
          <div 
            onClick={() => onNavigateView('strategic_deck')}
            className="relative overflow-hidden bg-linear-to-br from-indigo-100 via-violet-50 to-white p-6 rounded-2xl border border-indigo-200 hover:border-indigo-400 shadow-[0_8px_24px_rgba(79,70,229,0.10)] hover:shadow-[0_18px_36px_rgba(79,70,229,0.20)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="absolute -top-10 -right-8 w-28 h-28 rounded-full bg-indigo-400/20 blur-2xl pointer-events-none" />
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:bg-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-500/40 transition-all">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-700 transition-colors">
                {isEs ? 'Marco Estratégico & Pilares' : 'Strategic Framework & Pillars'}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isEs 
                  ? 'Pilares EdTech, FinTech, escalabilidad multisede, impacto ESG y plan de implementación en 6 semanas.'
                  : 'EdTech & FinTech pillars, scalability roadmap, ESG social metrics, and 6-week deployment plan.'}
              </p>
            </div>
            <div className="relative z-10 pt-4 mt-2 border-t border-indigo-200/70 flex items-center justify-between text-xs font-semibold text-indigo-700">
              <span>{isEs ? 'Ver presentación completa' : 'View full deck'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Architecture & ZKP */}
          <div 
            onClick={() => onNavigateView('architecture')}
            className="relative overflow-hidden bg-linear-to-br from-sky-100 via-blue-50 to-white p-6 rounded-2xl border border-sky-200 hover:border-blue-400 shadow-[0_8px_24px_rgba(14,165,233,0.10)] hover:shadow-[0_18px_36px_rgba(37,99,235,0.20)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="absolute -top-10 -right-8 w-28 h-28 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/30 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                {isEs ? 'Arquitectura Técnica & Privacidad ZKP' : 'Technical Architecture & ZKP'}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isEs 
                  ? 'Diagrama del puente SIS-Banca, flujo de tokens encriptados y garantía de cero acceso a extractos personales.'
                  : 'SIS-to-Bank bridge architecture, encrypted credential flows, and Zero-Knowledge Proof protocol.'}
              </p>
            </div>
            <div className="relative z-10 pt-4 mt-2 border-t border-sky-200/70 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>{isEs ? 'Ver arquitectura del puente' : 'View bridge architecture'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: ROI Simulator */}
          <div 
            onClick={() => onNavigateView('simulator')}
            className="relative overflow-hidden bg-linear-to-br from-emerald-100 via-teal-50 to-white p-6 rounded-2xl border border-emerald-200 hover:border-emerald-400 shadow-[0_8px_24px_rgba(16,185,129,0.10)] hover:shadow-[0_18px_36px_rgba(16,185,129,0.20)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          >
            <div className="absolute -top-10 -right-8 w-28 h-28 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />
            <div className="space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:bg-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-500/40 transition-all">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                {isEs ? 'Simulador de Impacto & ROI' : 'Impact & ROI Simulator'}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isEs 
                  ? 'Calculadora interactiva para proyectar ahorros en deserción, colocación bancaria y retorno universitario.'
                  : 'Interactive financial calculator modeling dropout savings, banking portfolio, and university ROI.'}
              </p>
            </div>
            <div className="relative z-10 pt-4 mt-2 border-t border-emerald-200/70 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>{isEs ? 'Calcular métricas' : 'Calculate metrics'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (ROLE-BASED FAQ) */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-indigo-50/40 to-sky-50/50 rounded-3xl p-6 sm:p-10 border border-indigo-100/80 shadow-[0_12px_40px_rgba(79,70,229,0.08)] space-y-6">
        <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-indigo-300/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-white/80 px-3 py-1 rounded-full border border-indigo-200 shadow-sm">
            {isEs ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {isEs ? 'Resolviendo Dudas Institucionales' : 'Answering Institutional Questions'}
          </h2>
          <p className="text-sm text-slate-500">
            {isEs ? 'Claridad absoluta sobre gobernanza, riesgo y privacidad.' : 'Complete transparency on governance, risk, and privacy.'}
          </p>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4 pt-4">
          {[
            {
              q: isEs ? '¿Por qué no se revisa el historial crediticio o finanzas personales de los estudiantes?' : 'Why is there zero review of personal finances or student credit history?',
              a: isEs
                ? 'El ecosistema Nexus EduFin opera con suscripción académica (Academic Underwriting). La probabilidad de pago y el valor económico se fundamentan en el avance del plan de estudios y la retención del título profesional, no en el historial financiero pasado de una familia. La universidad actúa como garante institucional y los fondos se liquidan en escrow directo a matrícula.'
                : 'Nexus EduFin relies on Academic Underwriting. Repayment probability and economic value stem from curriculum advancement and the high return on completed degrees, not historical family wealth. The university acts as the institutional anchor and funds disburse directly to tuition in escrow.',
              accent: 'indigo',
              icon: GraduationCap,
            },
            {
              q: isEs ? '¿Cómo garantiza la universidad su flujo de caja y cómo se integra con el SIS?' : 'How does the university secure treasury cashflow and integrate with existing SIS?',
              a: isEs
                ? 'Los bancos aliados dispersan el 100% de la matrícula al inicio de cada semestre directamente en la cuenta concentradora de la universidad (T+0). La integración se realiza mediante conectores API ligeros y seguros con plataformas estándar como Banner, Canvas, PeopleSoft o Moodle en un plazo de 6 semanas sin alterar su infraestructura central.'
                : 'Partner banks disburse 100% of enrolled tuition directly into the university treasury account at semester start (T+0). Integration is handled via lightweight, secure API webhooks with Banner, Canvas, PeopleSoft, or Moodle within 6 weeks without disrupting legacy infrastructure.',
              accent: 'sky',
              icon: Building2,
            },
            {
              q: isEs ? '¿Cómo mitiga la entidad bancaria el riesgo crediticio si la tasa de mora es inferior al 0.5%?' : 'How does the bank mitigate credit risk to achieve a sub-0.5% default rate?',
              a: isEs
                ? 'El riesgo se mitiga estructuralmente a través de cuatro mecanismos: 1) Los fondos nunca se entregan en efectivo sino que van a la matrícula universitaria en escrow; 2) Existe un fondo de retención y alivio de emergencias co-financiado; 3) El estudiante mantiene un incentivo máximo para conservar su estatus académico; y 4) La tasa de retención de nómina post-graduación supera el 72%.'
                : 'Risk is mitigated through four structural pillars: 1) Funds disburse straight into tuition escrow (no cash leakage); 2) Joint emergency retention buffers absorb temporary hardship; 3) Students are deeply incentivized to maintain enrollment; and 4) Graduate payroll retention exceeds 72%.',
              accent: 'emerald',
              icon: Landmark,
            },
            {
              q: isEs ? '¿Qué son los Grants Bancarios de Investigación y cómo se adjudican?' : 'What are Bank-Sponsored Research Grants and how are they awarded?',
              a: isEs
                ? 'Son fondos directos a fondo perdido que las entidades bancarias destinan a semilleros, tesis y proyectos de innovación (FinTech, IA, sostenibilidad). Los estudiantes postulan con su aval docente y los fondos se liberan por cumplimiento de hitos académicos certificados por la universidad.'
                : 'They are non-repayable corporate funds allocated by partner banks for student labs, thesis innovation, and prototypes (FinTech, AI, ESG). Students apply with faculty endorsements, and tranches unlock upon certified milestone completions.',
              accent: 'violet',
              icon: Sparkles,
            }
          ].map((faq, idx) => {
            const isOpen = activeFaq === idx;
            const Icon = faq.icon;
            const tones = {
              indigo: {
                card: 'from-white via-indigo-50/80 to-violet-50/50 border-indigo-200/80 hover:border-indigo-400',
                bar: 'from-indigo-500 to-violet-500',
                icon: 'from-indigo-500 to-violet-600 shadow-indigo-500/30',
                open: 'shadow-[0_16px_36px_rgba(79,70,229,0.16)] ring-1 ring-indigo-200',
                answer: 'bg-indigo-50/50 border-indigo-100 text-slate-600',
                chevron: 'bg-indigo-100 text-indigo-600',
              },
              sky: {
                card: 'from-white via-sky-50/80 to-blue-50/50 border-sky-200/80 hover:border-sky-400',
                bar: 'from-sky-500 to-blue-600',
                icon: 'from-sky-500 to-blue-600 shadow-blue-500/30',
                open: 'shadow-[0_16px_36px_rgba(14,165,233,0.16)] ring-1 ring-sky-200',
                answer: 'bg-sky-50/50 border-sky-100 text-slate-600',
                chevron: 'bg-sky-100 text-sky-700',
              },
              emerald: {
                card: 'from-white via-emerald-50/80 to-teal-50/50 border-emerald-200/80 hover:border-emerald-400',
                bar: 'from-emerald-500 to-teal-500',
                icon: 'from-emerald-500 to-teal-600 shadow-emerald-500/30',
                open: 'shadow-[0_16px_36px_rgba(16,185,129,0.16)] ring-1 ring-emerald-200',
                answer: 'bg-emerald-50/50 border-emerald-100 text-slate-600',
                chevron: 'bg-emerald-100 text-emerald-700',
              },
              violet: {
                card: 'from-white via-violet-50/80 to-fuchsia-50/40 border-violet-200/80 hover:border-violet-400',
                bar: 'from-violet-500 to-fuchsia-500',
                icon: 'from-violet-500 to-fuchsia-600 shadow-violet-500/30',
                open: 'shadow-[0_16px_36px_rgba(139,92,246,0.16)] ring-1 ring-violet-200',
                answer: 'bg-violet-50/50 border-violet-100 text-slate-600',
                chevron: 'bg-violet-100 text-violet-700',
              },
            } as const;
            const tone = tones[faq.accent as keyof typeof tones];

            return (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl border bg-linear-to-br transition-all duration-300 ${tone.card} ${
                isOpen ? `${tone.open} -translate-y-0.5` : 'shadow-[0_8px_24px_rgba(15,23,42,0.05)]'
              }`}
            >
              <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full bg-linear-to-b ${tone.bar}`} />
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 pl-5 sm:pl-6 text-left font-bold text-slate-900 text-sm flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="flex items-start gap-3">
                  <span className={`mt-0.5 w-8 h-8 rounded-xl bg-linear-to-br text-white flex items-center justify-center shrink-0 shadow-md ${tone.icon}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="pt-1.5 leading-snug">{faq.q}</span>
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${tone.chevron} ${isOpen ? 'rotate-90' : ''}`}>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
              {isOpen && (
                <div className={`mx-4 mb-4 sm:mx-5 sm:mb-5 ml-5 sm:ml-6 rounded-xl px-4 py-3 text-sm leading-relaxed border ${tone.answer}`}>
                  {faq.a}
                </div>
              )}
            </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CALL TO ACTION / ENTRY SELECTOR */}
      <section className="bg-violet-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl border border-violet-300">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            {isEs ? '¿Listo para experimentar el ecosistema?' : 'Ready to Experience the Ecosystem?'}
          </h2>
          <p className="text-sm text-slate-700">
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
