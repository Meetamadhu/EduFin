import React, { useEffect, useState } from 'react';
import { MainView, PersonaType, Language, TuitionFinancingPlan, ResearchGrant } from './types';
import { 
  mockStudent, 
  mockTuitionPlans, 
  mockResearchGrants, 
  mockUniversityMetrics, 
  mockBankMetrics
} from './data/mockData';
import { pathFromState, stateFromPath, titleFromState } from './routes';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { StudentPortal } from './components/StudentPortal';
import { UniversityPortal } from './components/UniversityPortal';
import { BankPortal } from './components/BankPortal';
import { StrategicFramework } from './components/StrategicFramework';
import { EcosystemArchitecture } from './components/EcosystemArchitecture';
import { RoiSimulator } from './components/RoiSimulator';
import { Modals } from './components/Modals';
import { 
  Building2, 
  Landmark, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const initial = stateFromPath(window.location.pathname);
  const [currentView, setCurrentView] = useState<MainView>(initial.view);
  const [currentPersona, setCurrentPersona] = useState<PersonaType>(initial.persona ?? 'student');
  const [language, setLanguage] = useState<Language>('es');
  const [activeModal, setActiveModal] = useState<'plan' | 'grant' | 'privacy' | 'agreement' | 'dropout_relief' | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<TuitionFinancingPlan | null>(null);
  const [selectedGrant, setSelectedGrant] = useState<ResearchGrant | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const navigateTo = (view: MainView, persona: PersonaType = currentPersona) => {
    const nextPersona = view === 'prototype' ? persona : currentPersona;
    if (view === 'prototype') setCurrentPersona(persona);
    setCurrentView(view);
    const path = pathFromState(view, nextPersona);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    document.title = titleFromState(view, nextPersona);
  };

  useEffect(() => {
    document.title = titleFromState(currentView, currentPersona);
    const onPopState = () => {
      const next = stateFromPath(window.location.pathname);
      setCurrentView(next.view);
      if (next.persona) setCurrentPersona(next.persona);
      document.title = titleFromState(next.view, next.persona ?? currentPersona);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [currentView, currentPersona]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleSelectPersona = (persona: PersonaType) => {
    navigateTo('prototype', persona);
    showToast(
      language === 'es'
        ? `Entraste al portal de ${persona === 'student' ? 'estudiantes' : persona === 'university' ? 'universidades' : 'banca'}.`
        : `Opened the ${persona === 'student' ? 'student' : persona === 'university' ? 'university' : 'bank'} portal.`
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-slate-900">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-sm space-y-1">
            <span className="font-bold text-white block">{language === 'es' ? 'Listo' : 'Done'}</span>
            <p className="text-slate-300 leading-relaxed">{toastMessage}</p>
          </div>
        </div>
      )}

      <Header
        currentView={currentView}
        currentPersona={currentPersona}
        language={language}
        setLanguage={setLanguage}
        onOpenPrivacyInfo={() => setActiveModal('privacy')}
        onNavigate={navigateTo}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'landing' && (
          <LandingPage
            language={language}
            onSelectPersona={handleSelectPersona}
            onNavigateView={(view) => navigateTo(view)}
            onOpenPrivacy={() => setActiveModal('privacy')}
          />
        )}

        {currentView === 'prototype' && (
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => navigateTo('landing')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-slate-900 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-sky-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                  {currentPersona === 'student' && <GraduationCap className="w-4 h-4" />}
                  {currentPersona === 'university' && <Building2 className="w-4 h-4" />}
                  {currentPersona === 'bank' && <Landmark className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {language === 'es' ? 'Viendo como' : 'Viewing as'}{' '}
                    <span className="text-sky-700">
                      {currentPersona === 'student' && (language === 'es' ? 'estudiante' : 'student')}
                      {currentPersona === 'university' && (language === 'es' ? 'universidad' : 'university')}
                      {currentPersona === 'bank' && (language === 'es' ? 'banco' : 'bank')}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-500">
                    {language === 'es' ? 'Cambia de rol para ver el mismo flujo desde otro actor.' : 'Switch roles to see the same flow from another side.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 self-end sm:self-auto text-sm">
                <button
                  onClick={() => navigateTo('prototype', 'student')}
                  className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                    currentPersona === 'student' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {language === 'es' ? 'Estudiante' : 'Student'}
                </button>
                <button
                  onClick={() => navigateTo('prototype', 'university')}
                  className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                    currentPersona === 'university' ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {language === 'es' ? 'Universidad' : 'University'}
                </button>
                <button
                  onClick={() => navigateTo('prototype', 'bank')}
                  className={`px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                    currentPersona === 'bank' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {language === 'es' ? 'Banco' : 'Bank'}
                </button>
              </div>
            </div>

            {currentPersona === 'student' && (
              <StudentPortal
                student={mockStudent}
                tuitionPlans={mockTuitionPlans}
                grants={mockResearchGrants}
                language={language}
                onApplyPlan={(plan) => {
                  setSelectedPlan(plan);
                  setActiveModal('plan');
                }}
                onApplyGrant={(grant) => {
                  setSelectedGrant(grant);
                  setActiveModal('grant');
                }}
                onViewPrivacyCert={() => setActiveModal('privacy')}
              />
            )}

            {currentPersona === 'university' && (
              <UniversityPortal
                metrics={mockUniversityMetrics}
                grants={mockResearchGrants}
                language={language}
                onApproveAgreement={() => setActiveModal('agreement')}
                onTriggerDropoutIntervention={() => setActiveModal('dropout_relief')}
              />
            )}

            {currentPersona === 'bank' && (
              <BankPortal
                metrics={mockBankMetrics}
                grants={mockResearchGrants}
                language={language}
                onAllocateGrant={() => setActiveModal('grant')}
                onOpenUnderwritingEngine={() => navigateTo('architecture')}
              />
            )}
          </div>
        )}

        {currentView === 'strategic_deck' && (
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => navigateTo('landing')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-slate-900 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </button>
            <StrategicFramework language={language} />
          </div>
        )}
        {currentView === 'architecture' && (
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => navigateTo('landing')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-slate-900 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </button>
            <EcosystemArchitecture
              language={language}
              onOpenPrivacyModal={() => setActiveModal('privacy')}
            />
          </div>
        )}
        {currentView === 'simulator' && (
          <div className="space-y-6">
            <button
              type="button"
              onClick={() => navigateTo('landing')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-slate-900 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </button>
            <RoiSimulator language={language} />
          </div>
        )}
      </main>

      <footer className="bg-sky-200 text-slate-700 border-t border-sky-300 mt-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-slate-800">NEXUS EduFin</span>
              </div>
              <p className="leading-relaxed">
                {language === 'es'
                  ? 'Financiamiento de matrícula con aval universitario. El banco paga a tesorería, no al estudiante.'
                  : 'Tuition financing backed by the university. The bank pays treasury, not the student.'}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-3 text-xs">
                {language === 'es' ? 'Para estudiantes' : 'For students'}
              </h4>
              <ul className="space-y-1.5">
                <li>• {language === 'es' ? 'Matrícula sin buró de crédito' : 'Tuition without a credit bureau'}</li>
                <li>• {language === 'es' ? 'Fondos de investigación' : 'Research grants'}</li>
                <li>• {language === 'es' ? 'Carnet digital del campus' : 'Digital campus pass'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-3 text-xs">
                {language === 'es' ? 'Para instituciones' : 'For institutions'}
              </h4>
              <ul className="space-y-1.5">
                <li>• {language === 'es' ? 'Pago directo a tesorería' : 'Direct treasury settlement'}</li>
                <li>• {language === 'es' ? 'Menos deserción' : 'Lower dropout'}</li>
                <li>• {language === 'es' ? 'Nuevos clientes jóvenes' : 'New young customers'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-3 text-xs">
                {language === 'es' ? 'Privacidad' : 'Privacy'}
              </h4>
              <p className="leading-relaxed">
                {language === 'es'
                  ? 'La universidad confirma que el estudiante está activo. El banco no ve extractos ni historial familiar.'
                  : 'The university confirms the student is enrolled. The bank never sees statements or family credit history.'}
              </p>
              <button
                onClick={() => setActiveModal('privacy')}
                className="mt-3 font-semibold text-sky-800 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                {language === 'es' ? 'Ver cómo funciona' : 'See how it works'}
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-sky-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <span>© 2026 NEXUS EduFin</span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => navigateTo('landing')} className="hover:text-slate-900 cursor-pointer">Inicio</button>
              <button onClick={() => navigateTo('prototype', 'student')} className="hover:text-slate-900 cursor-pointer">{language === 'es' ? 'Estudiante' : 'Student'}</button>
              <button onClick={() => navigateTo('strategic_deck')} className="hover:text-slate-900 cursor-pointer">{language === 'es' ? 'Estrategia' : 'Strategy'}</button>
              <button onClick={() => navigateTo('architecture')} className="hover:text-slate-900 cursor-pointer">{language === 'es' ? 'Arquitectura' : 'Architecture'}</button>
              <button onClick={() => navigateTo('simulator')} className="hover:text-slate-900 cursor-pointer">ROI</button>
            </div>
          </div>
        </div>
      </footer>

      <Modals
        activeModal={activeModal}
        selectedPlan={selectedPlan}
        selectedGrant={selectedGrant}
        student={mockStudent}
        language={language}
        onClose={() => setActiveModal(null)}
        onSuccessToast={showToast}
      />
    </div>
  );
}
