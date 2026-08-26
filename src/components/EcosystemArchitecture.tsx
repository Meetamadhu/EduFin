import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Network, 
  ShieldCheck, 
  Lock, 
  Building2, 
  Landmark, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Database, 
  Server, 
  Cpu, 
  Key,
  EyeOff,
  Code2,
  RefreshCw
} from 'lucide-react';

interface EcosystemArchitectureProps {
  language: Language;
  onOpenPrivacyModal: () => void;
}

export const EcosystemArchitecture: React.FC<EcosystemArchitectureProps> = ({
  language,
  onOpenPrivacyModal
}) => {
  const [selectedLayer, setSelectedLayer] = useState<'bridge' | 'privacy' | 'escrow' | 'sis'>('bridge');

  return (
    <div className="space-y-8">
      {/* Top Banner explaining the University-Bank Bridge */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-2xl p-6 sm:p-8 text-white border border-slate-700 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5">
            <Network className="w-4 h-4 text-indigo-400" />
            {language === 'es' ? 'El Puente Universidad – Banca' : 'The University – Bank Bridge'}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5">
            <EyeOff className="w-3.5 h-3.5 text-emerald-400" />
            {language === 'es' ? 'Cero Datos Financieros Personales' : 'Zero Personal Financial Data'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {language === 'es'
            ? 'Arquitectura del Ecosistema Institucional B2B2C'
            : 'Institutional B2B2C Ecosystem Architecture'}
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          {language === 'es'
            ? 'Respondiendo a la pregunta fundamental: ¿Cómo actúa la plataforma como puente entre universidades y bancos? A través de verificación de avance académico (SIS), custodia en escrow directo a tesorería y orquestación de grants sin tocar finanzas personales.'
            : 'Answering the fundamental question: How does the platform act as a bridge between banks and universities? Through academic milestone verification (SIS), direct treasury escrow settlement, and research grant orchestration without touching personal financial information.'}
        </p>

        <div className="pt-2 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedLayer('bridge')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedLayer === 'bridge' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {language === 'es' ? '1. Flujo del Puente Institucional' : '1. Institutional Bridge Flow'}
          </button>
          <button
            onClick={() => setSelectedLayer('privacy')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedLayer === 'privacy' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {language === 'es' ? '2. Privacidad por Diseño (ZKP)' : '2. Privacy by Design (ZKP)'}
          </button>
          <button
            onClick={() => setSelectedLayer('escrow')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedLayer === 'escrow' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {language === 'es' ? '3. Escrow & Tesorería T+0' : '3. Escrow & Treasury T+0'}
          </button>
          <button
            onClick={() => setSelectedLayer('sis')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedLayer === 'sis' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {language === 'es' ? '4. Conectores SIS (Banner/Canvas)' : '4. SIS Connectors (Banner/Canvas)'}
          </button>
        </div>
      </div>

      {/* Visual Interactive Architecture Diagram */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl font-extrabold text-slate-900">
            {language === 'es' ? 'Flujo de Interoperabilidad Tripartita' : 'Tripartite Interoperability Mesh'}
          </h2>
          <p className="text-xs text-slate-500">
            {language === 'es'
              ? 'Conexión segura entre sistemas universitarios, motor de gobernanza Nexus y core bancario.'
              : 'Secure connection between university SIS, Nexus governance mesh, and core banking APIs.'}
          </p>
        </div>

        {/* 3 Node Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Node 1: University SIS */}
          <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-200 shadow-sm space-y-4 text-center relative group hover:border-blue-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-300">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                Nodo Universidad
              </span>
              <h3 className="font-bold text-slate-900 text-base mt-2">
                SIS & Tesorería
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Banner, Canvas, Moodle, Peoplesoft
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-blue-100 text-left text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Emite Aval de Regularidad</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Recibe 100% Matrícula en Escrow</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Valida Hitos de Tesis & Grants</span>
              </div>
            </div>
          </div>

          {/* Node 2: Nexus Hub (Center) */}
          <div className="bg-gradient-to-b from-indigo-50 to-white p-6 rounded-2xl border-2 border-indigo-300 shadow-md space-y-4 text-center relative group hover:border-indigo-600 transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
              Motor Orquestador
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-md shadow-indigo-300 mt-2">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">
                Nexus Engine
              </span>
              <h3 className="font-bold text-slate-900 text-base mt-2">
                ZKP & Escrow Hub
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Zero-Knowledge Proofs & Conciliación
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-indigo-100 text-left text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-emerald-800">Blindaje de Privacidad ZKP</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Liquidación Automatizada T+0</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Gestión de Grants de Investigación</span>
              </div>
            </div>
          </div>

          {/* Node 3: Core Banking */}
          <div className="bg-gradient-to-b from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-200 shadow-sm space-y-4 text-center relative group hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md shadow-emerald-300">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Nodo Bancario
              </span>
              <h3 className="font-bold text-slate-900 text-base mt-2">
                Core Banking & FinTech
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Open Finance APIs & Líneas ESG
              </p>
            </div>
            <div className="bg-white p-3 rounded-xl border border-emerald-100 text-left text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Fondea 0% / Tasa Subvencionada</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cero CAC de Adquisición Joven</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Aporte a Grants No Reembolsables</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Zero Personal Finance is Better: Comparative Analysis */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {language === 'es' 
                  ? 'Por qué el modelo B2B2C es superior a revisar finanzas personales' 
                  : 'Why the B2B2C Model Outperforms Personal Financial Scrutiny'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'es'
                  ? 'Cumpliendo la directriz del certamen: El valor es institucional, no invasivo.'
                  : 'Delivering the contest vision: Institutional value creation, zero privacy invasion.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] block">
                1. El Verdadero Colateral
              </span>
              <h4 className="font-bold text-white text-sm">El Título Universitario</h4>
              <p className="text-slate-300 leading-relaxed">
                El valor de un estudiante no está en su extracto bancario actual (que suele ser bajo o nulo), sino en su capacidad de graduarse y generar ingresos formales. El aval institucional SIS es un predictor 8x más certero que el historial crediticio tradicional.
              </p>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <span className="text-blue-400 font-bold uppercase tracking-wider text-[11px] block">
                2. Escrow a Tesorería
              </span>
              <h4 className="font-bold text-white text-sm">Cero Desvío de Fondos</h4>
              <p className="text-slate-300 leading-relaxed">
                Al transferir los fondos directamente del banco a la universidad, se elimina por completo el riesgo de desvío del dinero a gastos de consumo personal, garantizando el 100% de cumplimiento educativo.
              </p>
            </div>

            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <span className="text-indigo-400 font-bold uppercase tracking-wider text-[11px] block">
                3. Eficiencia Operativa
              </span>
              <h4 className="font-bold text-white text-sm">Conciliación Instantánea</h4>
              <p className="text-slate-300 leading-relaxed">
                Las universidades gastan hasta un 12% de sus costes operativos cobrando y conciliando matrículas. Nexus automatiza el recaudo y la dispersión de becas en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
