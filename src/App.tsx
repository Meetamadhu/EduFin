import React, { useState } from 'react';
import { MainView, PersonaType, Language, TuitionFinancingPlan, ResearchGrant } from './types';
import { 
  mockStudent, 
  mockTuitionPlans, 
  mockResearchGrants, 
  mockUniversityMetrics, 
  mockBankMetrics,
  mockTranslations
} from './data/mockData';
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
  Layers, 
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  BarChart3,
  Network,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<MainView>('landing');
  const [currentPersona, setCurrentPersona] = useState<PersonaType>('student');
  const [language, setLanguage] = useState<Language>('es');

  // Modal State
  const [activeModal, setActiveModal] = useState<'plan' | 'grant' | 'privacy' | 'agreement' | 'dropout_relief' | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<TuitionFinancingPlan | null>(null);
  const [selectedGrant, setSelectedGrant] = useState<ResearchGrant | null>(null);

  // Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleApplyPlan = (plan: TuitionFinancingPlan) => {
    setSelectedPlan(plan);
    setActiveModal('plan');
  };

  const handleApplyGrant = (grant: ResearchGrant) => {
    setSelectedGrant(grant);
    setActiveModal('grant');
  };

  const handleApproveAgreement = () => {
    setActiveModal('agreement');
  };

  const handleTriggerDropoutIntervention = () => {
    setActiveModal('dropout_relief');
  };

  const handleOpenPrivacyCert = () => {
    setActiveModal('privacy');
  };

  const handleSelectPersonaFromLanding = (persona: PersonaType) => {
    setCurrentPersona(persona);
    setCurrentView('prototype');
    showToast(
      language === 'es'
        ? `Accediendo al Portal de ${persona === 'student' ? 'Estudiantes' : persona === 'university' ? 'Universidades' : 'Banca & FinTech'}...`
        : `Entering ${persona === 'student' ? 'Student' : persona === 'university' ? 'University' : 'Banking'} Portal...`
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 flex items-start gap-3 animate-in slide-in-from-bottom-5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="text-xs space-y-1">
            <span className="font-bold text-white block">Acción Confirmada</span>
            <p className="text-slate-300 leading-relaxed">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Main Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentPersona={currentPersona}
        setCurrentPersona={setCurrentPersona}
        language={language}
        setLanguage={setLanguage}
        onOpenPrivacyInfo={handleOpenPrivacyCert}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* VIEW 0: LANDING PAGE & ACCESS GATEWAYS */}
        {currentView === 'landing' && (
          <LandingPage
            language={language}
            onSelectPersona={handleSelectPersonaFromLanding}
            onNavigateView={(view) => setCurrentView(view)}
            onOpenPrivacy={handleOpenPrivacyCert}
          />
        )}

        {/* VIEW 1: INTERACTIVE PROTOTYPE */}
        {currentView === 'prototype' && (
          <div className="space-y-6">
            {/* Perspective Switcher Notice */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                  {currentPersona === 'student' && <GraduationCap className="w-4 h-4" />}
                  {currentPersona === 'university' && <Building2 className="w-4 h-4" />}
                  {currentPersona === 'bank' && <Landmark className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {language === 'es' ? 'Navegando como:' : 'Currently exploring as:'}{' '}
                    <span className="text-indigo-600">
                      {currentPersona === 'student' && (language === 'es' ? 'Estudiante Universitario' : 'University Student')}
                      {currentPersona === 'university' && (language === 'es' ? 'Directivo & Tesorería Universitaria' : 'University Dean & Treasury')}
                      {currentPersona === 'bank' && (language === 'es' ? 'Entidad Bancaria / FinTech Partner' : 'Banking & FinTech Partner')}
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {language === 'es'
                      ? 'Cambia de rol en la barra superior o en los accesos rápidos para ver cómo interactúa cada actor.'
                      : 'Switch roles in the top bar to inspect the experience from every stakeholder perspective.'}
                  </p>
                </div>
              </div>

              {/* Quick Persona Toggles */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto text-xs">
                <button
                  onClick={() => setCurrentPersona('student')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    currentPersona === 'student' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Estudiante
                </button>
                <button
                  onClick={() => setCurrentPersona('university')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    currentPersona === 'university' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Universidad
                </button>
                <button
                  onClick={() => setCurrentPersona('bank')}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                    currentPersona === 'bank' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Banca
                </button>
              </div>
            </div>

            {/* Render Selected Persona Portal */}
            {currentPersona === 'student' && (
              <StudentPortal
                student={mockStudent}
                tuitionPlans={mockTuitionPlans}
                grants={mockResearchGrants}
                language={language}
                onApplyPlan={handleApplyPlan}
                onApplyGrant={handleApplyGrant}
                onViewPrivacyCert={handleOpenPrivacyCert}
              />
            )}

            {currentPersona === 'university' && (
              <UniversityPortal
                metrics={mockUniversityMetrics}
                grants={mockResearchGrants}
                language={language}
                onApproveAgreement={handleApproveAgreement}
                onTriggerDropoutIntervention={handleTriggerDropoutIntervention}
              />
            )}

            {currentPersona === 'bank' && (
              <BankPortal
                metrics={mockBankMetrics}
                grants={mockResearchGrants}
                language={language}
                onAllocateGrant={() => setActiveModal('grant')}
                onOpenUnderwritingEngine={() => setCurrentView('architecture')}
              />
            )}
          </div>
        )}

        {/* VIEW 2: STRATEGIC DECK & PILLARS */}
        {currentView === 'strategic_deck' && (
          <StrategicFramework language={language} />
        )}

        {/* VIEW 3: ARCHITECTURE & PRIVACY MESH */}
        {currentView === 'architecture' && (
          <EcosystemArchitecture
            language={language}
            onOpenPrivacyModal={handleOpenPrivacyCert}
          />
        )}

        {/* VIEW 4: ROI & IMPACT SIMULATOR */}
        {currentView === 'simulator' && (
          <RoiSimulator language={language} />
        )}
      </main>

      {/* Footer & Strategic Highlights */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-white text-sm">NEXUS EduFin</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                El ecosistema B2B2C que conecta a las universidades con las entidades financieras para garantizar financiamiento justo, tesorería automatizada y fomento a la investigación.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Pilares EdTech
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• Identidad Digital & Smart Pass</li>
                <li>• Aval Académico Institucional (SIS)</li>
                <li>• Semilleros de Innovación & Grants</li>
                <li>• Equipamiento & Movilidad Global</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Pilares FinTech
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li>• Escrow & Tesorería Directa T+0</li>
                <li>• Fondo de Retención & Alivio</li>
                <li>• Cero revisión de finanzas personales</li>
                <li>• Inclusión temprana con CAC $0</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
                Gobernanza & Privacidad
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cumplimiento estricto con estándares bancarios y protección de datos mediante Zero-Knowledge Proofs. Tu historial personal permanece 100% privado.
              </p>
              <button
                onClick={handleOpenPrivacyCert}
                className="mt-3 text-xs font-semibold text-indigo-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Ver Protocolo de Privacidad
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <span>© 2026 Nexus EduFin Ecosystem. Diseñado para transformar la relación Universidad – Banca.</span>
            <div className="flex items-center gap-4">
              <button onClick={() => setCurrentView('landing')} className="hover:text-slate-300 cursor-pointer">Inicio / Portales</button>
              <button onClick={() => setCurrentView('prototype')} className="hover:text-slate-300 cursor-pointer">Prototipo</button>
              <button onClick={() => setCurrentView('strategic_deck')} className="hover:text-slate-300 cursor-pointer">Pilares Estratégicos</button>
              <button onClick={() => setCurrentView('architecture')} className="hover:text-slate-300 cursor-pointer">Arquitectura</button>
              <button onClick={() => setCurrentView('simulator')} className="hover:text-slate-300 cursor-pointer">Simulador ROI</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
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
