export type Language = 'es' | 'en';

export type MainView = 'landing' | 'prototype' | 'strategic_deck' | 'architecture' | 'simulator';

export type PersonaType = 'student' | 'university' | 'bank';

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  university: string;
  program: string;
  semester: number;
  studentIdNumber: string;
  academicIndex: number; // e.g. 4.8 / 5.0 or 9.4 / 10
  status: 'Activo Regular' | 'Excelencia Académica' | 'Investigador Junior';
  verifiedBySIS: boolean;
  universityLogo: string;
  bankPartner: string;
  digitalPassId: string;
  kycAcademicToken: string;
}

export interface TuitionFinancingPlan {
  id: string;
  title: string;
  semesterCost: number;
  installments: number;
  interestRate: number; // Institutional subsidized rate (e.g., 0% or 1.2% subsidized by university/bank)
  status: 'available' | 'active' | 'completed';
  sponsorBank: string;
  universityValidationCode: string;
  monthlyAmount: number;
  academicRequirement: string;
  features: string[];
}

export interface ResearchGrant {
  id: string;
  title: string;
  category: 'FinTech Innovation' | 'AI & EdTech' | 'Sostenibilidad' | 'Ciencia de Datos' | 'Impacto Social';
  bankSponsor: string;
  sponsorLogo: string;
  totalPool: number;
  grantedPerProject: number;
  deadline: string;
  openSpots: number;
  description: string;
  requirements: string[];
  universityBacking: string[];
}

export interface UniversityMetric {
  enrolledStudents: number;
  tuitionReconciliationRate: number;
  dropoutPreventionScore: number;
  activeGrantsCount: number;
  totalDisbursedFunds: number;
  partnerBanksCount: number;
  sisSyncStatus: 'Connected (Canvas / Banner)' | 'Syncing' | 'Offline';
}

export interface BankMetric {
  activeStudentAccounts: number;
  institutionalPortfolioValue: number;
  defaultRate: number; // Typically < 0.8% due to university-backed milestone clearing
  esgImpactScore: number; // out of 100
  talentHiredCount: number;
  activeUniversityPartners: number;
}

export interface StrategicPillar {
  id: string;
  vertical: 'EdTech' | 'FinTech' | 'Tecnología' | 'Escalabilidad' | 'Viabilidad' | 'Implementación';
  title: string;
  tagline: string;
  summary: string;
  keyComponents: {
    title: string;
    description: string;
    metrics: string;
  }[];
  institutionalValue: {
    forUniversities: string;
    forBanks: string;
    forStudents: string;
  };
}
