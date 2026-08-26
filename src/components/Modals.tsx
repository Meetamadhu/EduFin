import React, { useState } from 'react';
import { TuitionFinancingPlan, ResearchGrant, StudentProfile, Language } from '../types';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Sparkles, 
  FileCheck2, 
  GraduationCap, 
  Building2, 
  Landmark, 
  ArrowRight,
  HelpCircle,
  FileSignature
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModalsProps {
  activeModal: 'plan' | 'grant' | 'privacy' | 'agreement' | 'dropout_relief' | null;
  selectedPlan: TuitionFinancingPlan | null;
  selectedGrant: ResearchGrant | null;
  student: StudentProfile;
  language: Language;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  selectedPlan,
  selectedGrant,
  student,
  language,
  onClose,
  onSuccessToast
}) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectSummary, setProjectSummary] = useState('');
  const [facultyTutor, setFacultyTutor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!activeModal) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleConfirmPlan = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerConfetti();
      onSuccessToast(
        language === 'es'
          ? `¡Plan activado! La tesorería de la ${student.university} ha recibido el desembolso de tu matrícula en convenio con ${selectedPlan?.sponsorBank}.`
          : `Plan activated! The tuition has been disbursed to ${student.university} treasury via ${selectedPlan?.sponsorBank}.`
      );
      onClose();
    }, 1000);
  };

  const handleConfirmGrant = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerConfetti();
      onSuccessToast(
        language === 'es'
          ? `¡Propuesta enviada al Comité Científico de ${selectedGrant?.bankSponsor}! Recibirás la evaluación del grant en tu carnet digital.`
          : `Proposal submitted to the Scientific Committee of ${selectedGrant?.bankSponsor}!`
      );
      onClose();
    }, 1000);
  };

  const handleConfirmAgreement = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerConfetti();
      onSuccessToast(
        language === 'es'
          ? '¡Convenio Institucional Marco firmado con éxito! Las líneas de matrícula y grants quedan activas.'
          : 'Institutional Framework Agreement successfully signed! Tuition lines and grants are now live.'
      );
      onClose();
    }, 1000);
  };

  const handleConfirmDropoutRelief = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerConfetti();
      onSuccessToast(
        language === 'es'
          ? '¡Fondo de Alivio Bancario activado! 142 estudiantes en riesgo reciben subsidio de cuotas de emergencia.'
          : 'Emergency Bank Retention Relief deployed! 142 students at risk receive emergency fee relief.'
      );
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal 1: Plan Application */}
        {activeModal === 'plan' && selectedPlan && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{selectedPlan.title}</h3>
                <p className="text-xs text-slate-500">{selectedPlan.sponsorBank}</p>
              </div>
            </div>

            {/* Academic Backing Badge */}
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{language === 'es' ? 'Validación Académica SIS Automática' : 'Automatic SIS Academic Backing'}</span>
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                {language === 'es'
                  ? `Estudiante: ${student.name} | Semestre: ${student.semester}° | Promedio: ${student.academicIndex}/5.0. No se requiere codeudor ni revisión de extractos bancarios personales.`
                  : `Student: ${student.name} | Semester: ${student.semester} | GPA: ${student.academicIndex}/5.0. No personal credit checks or co-signers required.`}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'es' ? 'Monto financiado' : 'Financed amount'}</span>
                <span className="font-bold text-slate-900">${selectedPlan.semesterCost} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'es' ? 'Plan de cuotas' : 'Installments'}</span>
                <span className="font-bold text-indigo-700">{selectedPlan.installments} cuotas x ${selectedPlan.monthlyAmount.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{language === 'es' ? 'Destino del desembolso' : 'Disbursement Target'}</span>
                <span className="font-bold text-emerald-700">Tesorería {student.university}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleConfirmPlan}
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md shadow-indigo-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isSubmitting ? (language === 'es' ? 'Validando con SIS...' : 'Verifying with SIS...') : (language === 'es' ? 'Firmar con Carnet Digital' : 'Sign with Digital Pass')}</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal 2: Grant Submission */}
        {activeModal === 'grant' && selectedGrant && (
          <form onSubmit={handleConfirmGrant} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">{selectedGrant.title}</h3>
                <p className="text-xs text-slate-500">Patrocinado por {selectedGrant.bankSponsor}</p>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-xl text-xs text-blue-800 border border-blue-200">
              Fondo por proyecto: <strong>${selectedGrant.grantedPerProject.toLocaleString()} USD</strong> a fondo perdido.
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Título del Proyecto / Tesis</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Algoritmo ZKP para tokenización de créditos educativos"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Docente Tutor / Facultad</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Dra. Elena Morales - Facultad de Ingeniería"
                  value={facultyTutor}
                  onChange={(e) => setFacultyTutor(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Resumen del Impacto (Abstract)</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe la hipótesis, la metodología y el entregable tecnológico a desarrollar..."
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{isSubmitting ? (language === 'es' ? 'Enviando al comité...' : 'Submitting to jury...') : (language === 'es' ? 'Postular al Fondo de Investigación' : 'Submit for Research Grant')}</span>
              </button>
            </div>
          </form>
        )}

        {/* Modal 3: Privacy Certificate */}
        {activeModal === 'privacy' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Certificado de Privacidad por Diseño</h3>
                <p className="text-xs text-slate-500">Protocolo Zero-Knowledge Proof (ZKP) v4.2</p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-4 rounded-xl space-y-3 text-xs">
              <div className="font-mono text-[11px] text-emerald-400">
                PROV_STATUS: VERIFIED_WITHOUT_FINANCIAL_SCRUTINY
              </div>
              <p className="text-slate-300 leading-relaxed">
                Este ecosistema opera bajo el principio rector de que <strong>las finanzas personales de los estudiantes son privadas y nunca se auditan</strong>.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Sin extractos bancarios:</strong> No se revisan movimientos de cuentas personales ni de familiares.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Aval Académico Institucional:</strong> El respaldo se sustenta 100% en la regularidad de créditos y la acreditación universitaria.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Desembolso en Escrow Cerrado:</strong> Los fondos se transfieren directamente a la tesorería universitaria.</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Cerrar Certificado
            </button>
          </div>
        )}

        {/* Modal 4: Institutional Framework Agreement */}
        {activeModal === 'agreement' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <FileSignature className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Convenio Marco Institucional Universidad–Banca</h3>
                <p className="text-xs text-slate-500">Ratificación de Alianza Multilateral 2026-2030</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Al ratificar este convenio, el banco habilita una línea de fondeo institucional de hasta <strong>$5,000,000 USD</strong> con desembolso T+0 directo a tesorería y aporta $250,000 USD a semilleros de investigación a fondo perdido.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between font-medium text-slate-700">
                <span>Garante de Matrícula:</span>
                <span className="font-bold">Universidad Metropolitana</span>
              </div>
              <div className="flex justify-between font-medium text-slate-700">
                <span>Entidad Financiera Fondeadora:</span>
                <span className="font-bold">Consorcio Bancario Alianza Futuro</span>
              </div>
              <div className="flex justify-between font-medium text-slate-700">
                <span>Tasa Convenio a Estudiante:</span>
                <span className="font-bold text-emerald-600">0% Interés Subsidiado</span>
              </div>
            </div>

            <button
              onClick={handleConfirmAgreement}
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <FileSignature className="w-4 h-4" />
              <span>{isSubmitting ? 'Firmando convenio...' : 'Firmar Convenio Marco Digital'}</span>
            </button>
          </div>
        )}

        {/* Modal 5: Dropout Relief Deployment */}
        {activeModal === 'dropout_relief' && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Activación del Buffer de Retención</h3>
                <p className="text-xs text-slate-500">Programa de Prevención Inmediata de Abandono</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Se asignará automáticamente una flexibilización de matrícula en 8 cuotas al 0% a los <strong>142 estudiantes</strong> detectados por el modelo de alerta temprana del SIS universitario.
            </p>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs space-y-1.5 text-amber-900">
              <div className="flex justify-between font-bold">
                <span>Fondo de Subsidio a Comprometer:</span>
                <span>$68,000 USD</span>
              </div>
              <p className="text-[11px] text-amber-800">
                Aportado en partes iguales por el Fondo de Retención Universitario y la Banca Aliada.
              </p>
            </div>

            <button
              onClick={handleConfirmDropoutRelief}
              disabled={isSubmitting}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isSubmitting ? 'Desplegando auxilio...' : 'Confirmar y Desplegar Auxilio'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
