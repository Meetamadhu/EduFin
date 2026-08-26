import React, { useState } from 'react';
import { Language } from '../types';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  GraduationCap, 
  Building2, 
  Landmark, 
  Sparkles, 
  CheckCircle2, 
  RotateCcw,
  Sliders
} from 'lucide-react';

interface RoiSimulatorProps {
  language: Language;
}

export const RoiSimulator: React.FC<RoiSimulatorProps> = ({ language }) => {
  // Simulator input state
  const [studentCount, setStudentCount] = useState<number>(15000);
  const [semesterTuition, setSemesterTuition] = useState<number>(2400);
  const [dropoutReduction, setDropoutReduction] = useState<number>(35); // 35% reduction in dropout
  const [grantPool, setGrantPool] = useState<number>(250000);

  // Calculations
  const baselineDropoutRate = 0.12; // 12% baseline dropout
  const baselineDropouts = Math.round(studentCount * baselineDropoutRate);
  const retainedStudents = Math.round(baselineDropouts * (dropoutReduction / 100));
  
  // University impact
  const protectedTuitionRevenue = retainedStudents * semesterTuition * 2; // Annual 2 semesters
  const operationalCollectionSavings = Math.round(studentCount * 45); // $45 saved per student in manual collection
  const totalUniversityGain = protectedTuitionRevenue + operationalCollectionSavings;
  const universityRoi = ((totalUniversityGain / 35000) * 100) / 100; // estimated SaaS cost

  // Bank impact
  const financedStudents = Math.round(studentCount * 0.42); // 42% adoption
  const portfolioOriginated = financedStudents * semesterTuition * 2;
  const traditionalCacSavings = financedStudents * 65; // $65 CAC saved per young customer
  const bankLtvGenerated = financedStudents * 3800; // 10-year LTV
  const bankRoiMultiple = (bankLtvGenerated / (grantPool + (portfolioOriginated * 0.005))).toFixed(1);

  // Student impact
  const studentInterestSavings = Math.round(portfolioOriginated * 0.14); // 14% APR saved vs commercial predatory credit

  const handleReset = () => {
    setStudentCount(15000);
    setSemesterTuition(2400);
    setDropoutReduction(35);
    setGrantPool(250000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-indigo-400" />
            {language === 'es' ? 'Simulador Dinámico de Impacto & ROI' : 'Interactive Impact & ROI Simulator'}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
            {language === 'es' ? 'Modelado B2B2C en Tiempo Real' : 'Real-Time B2B2C Financial Modeling'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {language === 'es'
            ? 'Calculadora de Viabilidad y Retorno de Inversión'
            : 'Viability and Return on Investment Calculator'}
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          {language === 'es'
            ? 'Ajusta los parámetros universitarios y bancarios para proyectar los ahorros en deserción, el valor de vida del cliente (LTV) y el beneficio para los estudiantes.'
            : 'Adjust university and banking parameters to project dropout revenue protection, customer lifetime value (LTV), and student interest savings.'}
        </p>
      </div>

      {/* Main Grid: Controls on Left, Metrics & Projections on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-600" />
              {language === 'es' ? 'Variables del Campus' : 'Campus Parameters'}
            </h2>
            <button
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {language === 'es' ? 'Restablecer' : 'Reset'}
            </button>
          </div>

          {/* Slider 1: Student Count */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-700">{language === 'es' ? 'Población Estudiantil' : 'Enrolled Students'}</span>
              <span className="font-bold text-indigo-600">{studentCount.toLocaleString()} alumnos</span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="1000"
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>2,000</span>
              <span>25,000</span>
              <span>50,000</span>
            </div>
          </div>

          {/* Slider 2: Tuition Cost */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-700">{language === 'es' ? 'Matrícula Promedio Semestral' : 'Average Semester Tuition'}</span>
              <span className="font-bold text-indigo-600">${semesterTuition.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="500"
              max="8000"
              step="100"
              value={semesterTuition}
              onChange={(e) => setSemesterTuition(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$500</span>
              <span>$4,000</span>
              <span>$8,000</span>
            </div>
          </div>

          {/* Slider 3: Dropout Reduction */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-700">{language === 'es' ? 'Reducción de Deserción Económica' : 'Dropout Rate Reduction'}</span>
              <span className="font-bold text-emerald-600">-{dropoutReduction}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="65"
              step="5"
              value={dropoutReduction}
              onChange={(e) => setDropoutReduction(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>-10%</span>
              <span>-35%</span>
              <span>-65%</span>
            </div>
          </div>

          {/* Slider 4: Bank Grant Pool */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-700">{language === 'es' ? 'Fondo de Grants de la Banca' : 'Banking Research Grant Pool'}</span>
              <span className="font-bold text-indigo-600">${grantPool.toLocaleString()} USD</span>
            </div>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="25000"
              value={grantPool}
              onChange={(e) => setGrantPool(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$50k</span>
              <span>$500k</span>
              <span>$1.0M</span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <span className="font-bold text-slate-800 block">
              {language === 'es' ? 'Impacto en Retención de Alumnos:' : 'Student Retention Impact:'}
            </span>
            <p>
              {language === 'es'
                ? `De los ${baselineDropouts} estudiantes en riesgo histórico de deserción, el ecosistema retiene a `
                : `Out of ${baselineDropouts} students at historic risk of abandonment, the platform retains `}
              <strong className="text-emerald-700 font-bold">{retainedStudents} alumnos cada año</strong>.
            </p>
          </div>
        </div>

        {/* Right: Real-time Calculated ROI Cards */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card 1: University Economic Impact */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {language === 'es' ? 'Retorno para la Universidad' : 'University Economic Return'}
                  </h3>
                  <span className="text-[11px] text-slate-500">{language === 'es' ? 'Flujo de caja & retención anual' : 'Annual cashflow & retention'}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
                ROI: ~{(universityRoi / 10).toFixed(1)}x
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                <span className="text-xs text-blue-700 font-medium block">
                  {language === 'es' ? 'Matrículas Salvadas de Deserción' : 'Protected Tuition Revenue'}
                </span>
                <span className="text-xl font-extrabold text-blue-950 mt-1 block">
                  ${(protectedTuitionRevenue / 1000000).toFixed(2)}M USD/año
                </span>
                <span className="text-[11px] text-blue-600 mt-0.5 block">{retainedStudents} alumnos retenidos</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-600 font-medium block">
                  {language === 'es' ? 'Ahorro Operativo de Cobranza' : 'Collection Cost Savings'}
                </span>
                <span className="text-xl font-extrabold text-slate-900 mt-1 block">
                  ${operationalCollectionSavings.toLocaleString()} USD/año
                </span>
                <span className="text-[11px] text-emerald-600 mt-0.5 block">{language === 'es' ? '100% conciliación T+0' : '100% T+0 automation'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Banking Economic Return */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {language === 'es' ? 'Retorno para la Entidad Bancaria' : 'Bank Partner Return'}
                  </h3>
                  <span className="text-[11px] text-slate-500">{language === 'es' ? 'Colocación de cartera & captación CAC 0' : 'Origination & Zero-CAC onboarding'}</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs">
                LTV Multiple: {bankRoiMultiple}x
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="text-xs text-emerald-700 font-medium block">
                  {language === 'es' ? 'Cartera Colocada' : 'Total Portfolio'}
                </span>
                <span className="text-lg font-extrabold text-emerald-950 mt-1 block">
                  ${(portfolioOriginated / 1000000).toFixed(1)}M USD
                </span>
                <span className="text-[10px] text-emerald-700">{financedStudents.toLocaleString()} alumnos</span>
              </div>

              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="text-xs text-emerald-700 font-medium block">
                  {language === 'es' ? 'Ahorro CAC Total' : 'Total CAC Saved'}
                </span>
                <span className="text-lg font-extrabold text-emerald-950 mt-1 block">
                  ${(traditionalCacSavings / 1000).toFixed(0)}k USD
                </span>
                <span className="text-[10px] text-emerald-700">CAC = $0 campus</span>
              </div>

              <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                <span className="text-xs text-emerald-700 font-medium block">
                  {language === 'es' ? 'LTV Generado (10a)' : 'Projected 10y LTV'}
                </span>
                <span className="text-lg font-extrabold text-emerald-950 mt-1 block">
                  ${(bankLtvGenerated / 1000000).toFixed(1)}M USD
                </span>
                <span className="text-[10px] text-emerald-700">72% retención nómina</span>
              </div>
            </div>
          </div>

          {/* Card 3: Student Social & Financial Benefit */}
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                {language === 'es' ? 'Beneficio Directo al Estudiante' : 'Direct Student Welfare'}
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/40 font-bold">
                {language === 'es' ? 'Cero Endeudamiento Predatorio' : 'Zero Predatory Debt'}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-baseline gap-2 pt-1">
              <div>
                <span className="text-xs text-slate-300 block">
                  {language === 'es' ? 'Ahorro total en intereses de crédito usurero evitado:' : 'Total interest saved vs commercial loans:'}
                </span>
                <span className="text-2xl font-extrabold text-emerald-400">
                  ${(studentInterestSavings / 1000000).toFixed(2)}M USD
                </span>
              </div>
              <p className="text-xs text-slate-300 max-w-xs sm:text-right">
                {language === 'es'
                  ? 'Tasas 0% o subsidiadas por convenios marco institucionales.'
                  : '0% or institutionally subsidized tuition agreements.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
