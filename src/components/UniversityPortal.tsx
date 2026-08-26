import React, { useState } from 'react';
import { UniversityMetric, ResearchGrant, Language } from '../types';
import { 
  Building2, 
  Landmark, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  Database, 
  ArrowUpRight, 
  RefreshCw, 
  FileText, 
  Filter,
  Layers,
  ChevronRight,
  AlertTriangle,
  HeartHandshake
} from 'lucide-react';

interface UniversityPortalProps {
  metrics: UniversityMetric;
  grants: ResearchGrant[];
  language: Language;
  onApproveAgreement: (name: string) => void;
  onTriggerDropoutIntervention: () => void;
}

export const UniversityPortal: React.FC<UniversityPortalProps> = ({
  metrics,
  grants,
  language,
  onApproveAgreement,
  onTriggerDropoutIntervention
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState('2026-1');
  const [isReconciling, setIsReconciling] = useState(false);
  const [reconcileSuccess, setReconcileSuccess] = useState(false);

  const handleReconcile = () => {
    setIsReconciling(true);
    setTimeout(() => {
      setIsReconciling(false);
      setReconcileSuccess(true);
      setTimeout(() => setReconcileSuccess(false), 3500);
    }, 1200);
  };

  return (
    <div className="space-y-8">
      {/* University Header Banner */}
      <div className="bg-linear-to-br from-sky-100 via-blue-50 to-white rounded-2xl p-6 sm:p-8 text-slate-800 border border-sky-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-sky-700 border border-sky-200 text-xs font-semibold flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-sky-600" />
                {language === 'es' ? 'Tesorería universitaria' : 'University treasury'}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-600" />
                {metrics.sisSyncStatus}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'es' ? 'Universidad Metropolitana de Innovación (UMI)' : 'Metropolitan University of Innovation (UMI)'}
            </h1>
            <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
              {language === 'es'
                ? 'Ve el dinero de matrícula el mismo día, concilia con los bancos y cofinancia investigación.'
                : 'See tuition land the same day, reconcile with banks, and co-fund research.'}
            </p>
          </div>

          {/* Quick Action Button */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleReconcile}
              disabled={isReconciling}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isReconciling ? 'animate-spin' : ''}`} />
              <span>{isReconciling ? (language === 'es' ? 'Conciliando...' : 'Reconciling...') : (language === 'es' ? 'Sincronizar Tesorería T+0' : 'Sync Treasury T+0')}</span>
            </button>
            <button
              onClick={() => onApproveAgreement('Banco Santander & BBVA Horizon')}
              className="px-4 py-2.5 bg-white hover:bg-sky-50 text-slate-700 border border-sky-200 text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-600" />
              <span>{language === 'es' ? 'Ver Convenios Marco' : 'Framework Agreements'}</span>
            </button>
          </div>
        </div>

        {reconcileSuccess && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{language === 'es' ? 'Conciliación completada: 100% de los desembolsos de la banca fueron acreditados a la tesorería.' : 'Reconciliation complete: 100% of banking disbursements credited to university treasury.'}</span>
          </div>
        )}
      </div>

      {/* KPI Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Matrícula Conciliada' : 'Tuition Reconciled'}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{metrics.tuitionReconciliationRate}%</div>
          <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {language === 'es' ? 'T+0 Liquidación directa' : 'T+0 Direct Settlement'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Prevención Deserción' : 'Dropout Prevention'}</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <HeartHandshake className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{metrics.dropoutPreventionScore}%</div>
          <p className="text-xs text-blue-600 font-semibold">
            {language === 'es' ? '+1,240 alumnos retenidos' : '+1,240 students retained'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Fondo Desembolsado' : 'Disbursed Funds'}</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">${(metrics.totalDisbursedFunds / 1000000).toFixed(2)}M USD</div>
          <p className="text-xs text-slate-500">
            {language === 'es' ? '6 Bancos aliados participantes' : '6 Partner banks contributing'}
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-500 text-xs font-medium">
            <span>{language === 'es' ? 'Grants de Investigación' : 'Research Grants'}</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">{metrics.activeGrantsCount} Proyectos</div>
          <p className="text-xs text-amber-600 font-semibold">
            {language === 'es' ? 'Fondeo bancario a fondo perdido' : 'Non-repayable bank sponsorship'}
          </p>
        </div>
      </div>

      {/* Main Grid: Treasury Reconciliation & Early Retention System */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Tuition Reconciliation & Cashflow */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {language === 'es' ? 'Flujo de Matrícula & Liquidación Bancaria' : 'Tuition Cashflow & Bank Settlement'}
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'es' 
                  ? 'Transacciones acreditadas directamente a la cuenta concentradora universitaria.'
                  : 'Disbursements credited directly to the university institutional escrow account.'}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              Semestre 2026-I
            </span>
          </div>

          {/* Visual Cashflow Progress */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-700">{language === 'es' ? 'Matrículas Financiadas vs Recaudadas' : 'Funded vs Collected Tuition'}</span>
              <span className="text-indigo-600">$4,850,000 / $5,000,000 USD (97%)</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex">
              <div className="bg-emerald-500 h-full w-[82%]" title="Desembolso Directo Banca"></div>
              <div className="bg-indigo-500 h-full w-[15%]" title="Becas y Convenios"></div>
              <div className="bg-amber-400 h-full w-[3%]" title="En Trámite ZKP"></div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                {language === 'es' ? 'Acreditado Bancario (82%)' : 'Bank Disbursed (82%)'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                {language === 'es' ? 'Fondo de Retención (15%)' : 'Retention Fund (15%)'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                {language === 'es' ? 'Procesando ZKP (3%)' : 'ZKP Processing (3%)'}
              </span>
            </div>
          </div>

          {/* Bank Partners Breakdown Table */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              {language === 'es' ? 'Bancos Aliados & Fondos Aportados' : 'Partner Banks & Contributed Funds'}
            </h3>

            <div className="space-y-2">
              {[
                { name: 'Banco Alianza Futuro', students: 4820, amount: '$2,150,000 USD', rate: '0% Subvencionado', status: 'Activo T+0' },
                { name: 'Santander Universidades', students: 3100, amount: '$1,400,000 USD', rate: '0.8% Preferencial', status: 'Activo T+0' },
                { name: 'Global UniBank Edu', students: 2250, amount: '$980,000 USD', rate: '1.2% Subvencionado', status: 'Activo T+0' },
                { name: 'BBVA Horizon Impact', students: 850, amount: '$320,000 USD', rate: 'Grants R&D', status: 'Activo T+0' },
              ].map((bank, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{bank.name}</h4>
                      <p className="text-slate-500 text-[11px]">{bank.students} alumnos matriculados</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-900 block">{bank.amount}</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">{bank.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Early Retention & Dropout Prevention Hub */}
        <div className="lg:col-span-5 space-y-6">
          {/* Dropout Early Warning & Relief Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-900">
                  {language === 'es' ? 'Alerta Temprana de Deserción' : 'Early Dropout Warning AI'}
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-semibold">
                {language === 'es' ? 'SIS Predictor' : 'SIS Predictor'}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'es'
                ? 'El modelo predictivo detecta estudiantes en riesgo de no renovar matrícula por causas económicas e inmediata y automáticamente activa una propuesta de cuotas subsidiadas respaldada por los bancos aliados.'
                : 'Predictive model detects students at risk of non-enrollment due to liquidity issues and instantly deploys subsidized installment plans backed by partner banks.'}
            </p>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-900">{language === 'es' ? 'Cohorte en Riesgo Identificada' : 'Identified Risk Cohort'}</span>
                <span className="font-mono text-amber-800 font-bold">142 Alumnos</span>
              </div>
              <p className="text-[11px] text-amber-800">
                {language === 'es' 
                  ? 'Fondo de Retención Banco-Universidad disponible para activación inmediata.'
                  : 'University-Bank Retention Buffer available for instant emergency allocation.'}
              </p>
            </div>

            <button
              onClick={onTriggerDropoutIntervention}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm shadow-amber-200"
            >
              <HeartHandshake className="w-4 h-4" />
              {language === 'es' ? 'Activar Buffer de Retención Bancario' : 'Deploy Bank Retention Relief'}
            </button>
          </div>

          {/* Research Lab Co-Management */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-bold text-slate-900">
                  {language === 'es' ? 'Incubadora & Grants de Investigación' : 'Research & Lab Co-Funding'}
                </h3>
              </div>
              <span className="text-xs font-bold text-indigo-600">$265,000 USD Pool</span>
            </div>

            <p className="text-xs text-slate-600">
              {language === 'es' 
                ? 'Coordinación docente para la validación de entregables y desembolso por hitos académicos.'
                : 'Faculty supervision for academic milestone verification and grant tranche disbursement.'}
            </p>

            <div className="space-y-2">
              {grants.slice(0, 2).map((g) => (
                <div key={g.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 line-clamp-1">{g.title}</h4>
                    <p className="text-[11px] text-slate-500">{g.bankSponsor}</p>
                  </div>
                  <span className="font-bold text-emerald-600 shrink-0 ml-2">
                    ${g.grantedPerProject.toLocaleString()} USD
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
