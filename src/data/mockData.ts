import { StrategicPillar, StudentProfile, TuitionFinancingPlan, ResearchGrant, UniversityMetric, BankMetric } from '../types';

export const mockStudent: StudentProfile = {
  id: 'stu-98214',
  name: 'Valentina Restrepo Morales',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  university: 'Universidad Metropolitana de Innovación',
  program: 'Ingeniería de Software & Computación Cuántica',
  semester: 7,
  studentIdNumber: 'UMI-2022-84920',
  academicIndex: 4.85,
  status: 'Excelencia Académica',
  verifiedBySIS: true,
  universityLogo: '🎓 UMI',
  bankPartner: 'Banco Alianza Futuro (UniBank)',
  digitalPassId: 'PASS-EDU-8839-XYZ',
  kycAcademicToken: '0x9E7F...3B12 (ZKP Verified)',
};

export const mockTuitionPlans: TuitionFinancingPlan[] = [
  {
    id: 'plan-sem-2026',
    title: 'Plan Matrícula Cero Fricción (Convenio Institucional)',
    semesterCost: 2800,
    installments: 6,
    interestRate: 0.0, // Subsidized 0% by university-bank agreement
    status: 'available',
    sponsorBank: 'Banco Alianza Futuro',
    universityValidationCode: 'UMI-ESCROW-2026-A',
    monthlyAmount: 466.66,
    academicRequirement: 'Matrícula activa y promedio superior a 3.8/5.0',
    features: [
      'Desembolso directo a la Tesorería de la Universidad',
      'Sin revisión de historial crediticio personal (Aval Académico Institucional)',
      '0% tasa de interés subsidiada por fondo de retención',
      'Flexibilidad en periodos de exámenes y prácticas profesionales'
    ]
  },
  {
    id: 'plan-tech-lab',
    title: 'Línea de Equipamiento & Software Especializado',
    semesterCost: 1400,
    installments: 12,
    interestRate: 1.2,
    status: 'available',
    sponsorBank: 'Global Bank Educación',
    universityValidationCode: 'UMI-LABS-TECH',
    monthlyAmount: 124.50,
    academicRequirement: 'Estudiante regular de 4to semestre en adelante',
    features: [
      'Financiación para Workstations, licencias de IA y hardware de laboratorio',
      'Convenio directo con proveedores certificados de la universidad',
      'Plazo diferido con pago posterior a pasantías universitarias',
      'Tasa preferencial 70% inferior al crédito de consumo tradicional'
    ]
  },
  {
    id: 'plan-exchange',
    title: 'Garantía Escrow para Intercambio Internacional',
    semesterCost: 3500,
    installments: 8,
    interestRate: 0.8,
    status: 'available',
    sponsorBank: 'Santander Universidades Red Global',
    universityValidationCode: 'UMI-GLOBAL-EXCHANGE',
    monthlyAmount: 450.00,
    academicRequirement: 'Aceptación formal por Oficina de Relaciones Internacionales',
    features: [
      'Garantía líquida y cuenta multimoneda sin comisiones de giro',
      'Custodia en Escrow con liberación por hitos académicos',
      'Seguro de repatriación académica y gastos de visado incluidos'
    ]
  }
];

export const mockResearchGrants: ResearchGrant[] = [
  {
    id: 'grant-01',
    title: 'Fondo de Innovación FinTech & Inclusión Abierta 2026',
    category: 'FinTech Innovation',
    bankSponsor: 'Banco Alianza Futuro Innovation Labs',
    sponsorLogo: '🏛️ BAF Labs',
    totalPool: 120000,
    grantedPerProject: 15000,
    deadline: '15 de Mayo, 2026',
    openSpots: 8,
    description: 'Convocatoria para proyectos de grado y semilleros de investigación enfocados en modelos de tokenización de activos académicos y Open Finance universitario.',
    requirements: [
      'Equipo multidisciplinario de 2 a 4 estudiantes',
      'Tutor docente avalado por la facultad',
      'Prototipo funcional o paper con prueba de concepto'
    ],
    universityBacking: ['UMI', 'Politécnico Innovación', 'UniAndes']
  },
  {
    id: 'grant-02',
    title: 'Cátedra de IA & Modelos Predictivos para la Deserción',
    category: 'AI & EdTech',
    bankSponsor: 'Horizon Bank ESG Ventures',
    sponsorLogo: '🌐 Horizon ESG',
    totalPool: 85000,
    grantedPerProject: 10000,
    deadline: '30 de Junio, 2026',
    openSpots: 5,
    description: 'Financiamiento directo para algoritmos de alerta temprana que detecten estudiantes en riesgo de deserción vocacional y propongan tutorías bancarias.',
    requirements: [
      'Estudiantes de Ciencia de Datos, Pedagogía o Ingeniería',
      'Metodología validada con datos anonimizados de la universidad'
    ],
    universityBacking: ['UMI', 'Universidad Nacional de Ingeniería']
  },
  {
    id: 'grant-03',
    title: 'Semillero de Sostenibilidad & Huella Verde en Campus',
    category: 'Sostenibilidad',
    bankSponsor: 'Banca Verde Institucional',
    sponsorLogo: '🌱 EcoBank Uni',
    totalPool: 60000,
    grantedPerProject: 8000,
    deadline: '20 de Julio, 2026',
    openSpots: 6,
    description: 'Subsidio a fondo perdido para la digitalización de procesos de carnetización física y transición energética de laboratorios de investigación.',
    requirements: [
      'Impacto medible en reducción de huella de carbono universitaria',
      'Implementación en el campus en menos de 6 meses'
    ],
    universityBacking: ['Todas las universidades aliadas']
  }
];

export const mockUniversityMetrics: UniversityMetric = {
  enrolledStudents: 14280,
  tuitionReconciliationRate: 99.4,
  dropoutPreventionScore: 92.8,
  activeGrantsCount: 24,
  totalDisbursedFunds: 4850000,
  partnerBanksCount: 6,
  sisSyncStatus: 'Connected (Canvas / Banner)'
};

export const mockBankMetrics: BankMetric = {
  activeStudentAccounts: 38400,
  institutionalPortfolioValue: 18200000,
  defaultRate: 0.42, // Exceptionally low because of university escrow and degree value
  esgImpactScore: 96,
  talentHiredCount: 1420,
  activeUniversityPartners: 18
};

export const mockStrategicPillars: StrategicPillar[] = [
  {
    id: 'pillar-edtech',
    vertical: 'EdTech',
    title: 'Pilares EdTech: Validación Académica & Empleabilidad',
    tagline: 'El valor del estudiante radica en su trayectoria educativa, no en su historial financiero previo.',
    summary: 'Transforma la información del Sistema de Gestión Estudiantil (SIS) en credenciales de confianza verificables, integrando carnetización inteligente, trazabilidad de competencias y becas por mérito.',
    keyComponents: [
      {
        title: 'Identidad Digital & Smart Student Pass',
        description: 'Credencial académica interoperable que combina carnet universitario, acceso físico al campus y llave criptográfica para beneficios bancarios sin fricción.',
        metrics: '100% digitalización, 0 costo de emisión física'
      },
      {
        title: 'Validación Académica como Garante (Academic Underwriting)',
        description: 'La regularidad académica, el promedio ponderado y el avance de créditos reemplazan a los burós de crédito tradicionales como respaldo institucional.',
        metrics: '94% reducción en rechazos de crédito por falta de historial'
      },
      {
        title: 'Micro-certificaciones & Semilleros de Innovación',
        description: 'Plataforma de postulación a grants y pasantías directas en laboratorios de innovación bancaria antes de graduarse.',
        metrics: '+40% tasa de inserción laboral inmediata'
      }
    ],
    institutionalValue: {
      forUniversities: 'Disminución del abandono estudiantil, fidelización de la matrícula y vinculación directa con la industria.',
      forBanks: 'Acceso a un semillero de talento altamente cualificado con perfil académico verificado.',
      forStudents: 'Acceso a financiamiento justo basado en su esfuerzo y dedicación, sin discriminación financiera.'
    }
  },
  {
    id: 'pillar-fintech',
    vertical: 'FinTech',
    title: 'Pilares FinTech: Infraestructura Institucional B2B2C',
    tagline: 'Una autopista de conciliación y liquidez entre la tesorería universitaria y el core bancario.',
    summary: 'Reemplaza el modelo invasivo de revisar finanzas personales por una arquitectura institucional de escrow, desembolsos directos a matrícula y fondeo de investigación con impacto ESG.',
    keyComponents: [
      {
        title: 'Escrow & Desembolso Directo a Tesorería',
        description: 'Los fondos aprobados viajan directamente del banco a la universidad, eliminando desvíos de fondos y automatizando la conciliación contable.',
        metrics: 'Conciliación instantánea T+0 vs 15 días tradicional'
      },
      {
        title: 'Fondos de Retención & Co-Financiamiento',
        description: 'Mecanismo de riesgo compartido donde la universidad y el banco crean un buffer de liquidez para mitigar emergencias socioeconómicas de los alumnos.',
        metrics: '0.42% tasa de mora institucional'
      },
      {
        title: 'Cuentas Universitarias Sin Comisiones de Por Vida',
        description: 'Apertura de cuenta joven/estudiantil sin costo de mantenimiento, con dispersión de becas y pasantías en tiempo real.',
        metrics: '98% adopción de servicios financieros formales'
      }
    ],
    institutionalValue: {
      forUniversities: 'Flujo de caja garantizado al inicio de cada semestre y cero carga operativa de cobranza manual.',
      forBanks: 'Captación del segmento universitario desde el día 1 con el costo de adquisición (CAC) más bajo del mercado.',
      forStudents: 'Transparencia total, sin cobros ocultos ni tasas abusivas de préstamos de consumo.'
    }
  },
  {
    id: 'pillar-tech',
    vertical: 'Tecnología',
    title: 'Ecosistema Tecnológico: Mesh SIS-Banca con Zero-Knowledge',
    tagline: 'Seguridad institucional, soberanía del dato y privacidad por diseño.',
    summary: 'Arquitectura de microservicios con conectores nativos a sistemas universitarios (Banner, Canvas, Moodle, Peoplesoft) y APIs de Open Finance.',
    keyComponents: [
      {
        title: 'ZKP (Zero-Knowledge Proofs) & Privacidad Blindada',
        description: 'La plataforma certifica que el estudiante cumple los criterios académicos requeridos por el banco sin exponer jamás datos financieros privados ni notas privadas no relevantes.',
        metrics: '100% conformidad con GDPR, LGPD y Leyes de Protección de Datos'
      },
      {
        title: 'Conector Interoperable SIS-Core Banking',
        description: 'Webhooks y APIs REST seguras para sincronización bidireccional de estados de matrícula y liquidación de cuotas.',
        metrics: '<200ms latencia en validación de credenciales'
      },
      {
        title: 'Smart Contracts para Desembolso de Grants',
        description: 'Automatización de pagos por entregables de investigación validados por el tutor docente.',
        metrics: 'Auditoría inmutable en tiempo real'
      }
    ],
    institutionalValue: {
      forUniversities: 'Integración plug-and-play sin alterar la infraestructura legacy del campus.',
      forBanks: 'Conformidad regulatoria absoluta y cumplimiento de estándares bancarios ISO 27001.',
      forStudents: 'Tranquilidad total de que su privacidad financiera y personal está 100% protegida.'
    }
  },
  {
    id: 'pillar-scalability',
    vertical: 'Escalabilidad',
    title: 'Estrategia de Escalabilidad e Impacto (Roadmap)',
    tagline: 'De campus piloto a la mayor red de educación superior y banca de América Latina.',
    summary: 'Modelo de expansión multisede y multipaís estructurado en 4 fases, apalancado en economías de red donde cada nueva universidad atrae a más bancos y viceversa.',
    keyComponents: [
      {
        title: 'Fase 1: Validación Piloto (Campus Hub)',
        description: 'Despliegue en 3 universidades de referencia con 2 bancos ancla. Calibración del algoritmo de aval académico y conciliación de matrícula.',
        metrics: '15,000 estudiantes activos, 99% satisfacción'
      },
      {
        title: 'Fase 2: Red Nacional de Educación Superior',
        description: 'Expansión a 25 universidades públicas y privadas. Incorporación de marketplace de grants de investigación y compras tecnológicas.',
        metrics: '180,000 estudiantes, $45M USD transaccionados'
      },
      {
        title: 'Fase 3: Pasaporte Académico Regional LATAM',
        description: 'Interoperabilidad internacional para programas de doble titulación, intercambios y financiamiento cross-border.',
        metrics: '1.2M estudiantes en 5 países de la región'
      },
      {
        title: 'Fase 4: Ecosistema Abierto de Empleabilidad & Fintech',
        description: 'Integración con corporaciones globales para contratación temprana y patrocinio de matrículas completas (Corporate Sponsorship).',
        metrics: 'Escalamiento exponencial con margen operativo >65%'
      }
    ],
    institutionalValue: {
      forUniversities: 'Posicionamiento en rankings internacionales por empleabilidad y transferencia tecnológica.',
      forBanks: 'Escala regional con un único estándar tecnológico y un solo punto de integración.',
      forStudents: 'Movilidad académica internacional con respaldo financiero garantizado.'
    }
  },
  {
    id: 'pillar-viability',
    vertical: 'Viabilidad',
    title: 'Estrategias de Viabilidad y Valor Agregado',
    tagline: 'Un modelo de negocio sostenible donde todos los actores ganan de forma medible.',
    summary: 'Estructura económica diversificada basada en comisiones por éxito y SaaS institucional, protegiendo al estudiante de tarifas abusivas.',
    keyComponents: [
      {
        title: 'Modelo B2B2C Sostenible (Win-Win-Win)',
        description: 'La universidad ahorra costes de tesorería y retiene matrículas; el banco reduce drásticamente su CAC de clientes jóvenes; el estudiante recibe 0% tasa o subsidio directo.',
        metrics: 'ROI estimado de 4.2x para universidades y 6.8x para bancos'
      },
      {
        title: 'Monetización B2B Equilibrada',
        description: 'SaaS modular para universidades (gestión de becas y convenios) + Origination fee de bajo margen al banco por cada colocación exitosa.',
        metrics: 'Cero comisiones cobradas al estudiante por usar la plataforma'
      },
      {
        title: 'Impacto ESG & Finanzas Sostenibles',
        description: 'Las colocaciones califican directamente como bonos sociales y créditos educativos computables para las metas de inclusión bancaria de los bancos.',
        metrics: '+100% de cumplimiento en metas ESG del regulador financiero'
      }
    ],
    institutionalValue: {
      forUniversities: 'Reducción del 85% en cartera morosa y costos de cobranza externa.',
      forBanks: 'Relación financiera duradera: 72% de los estudiantes retiene la cuenta de nómina tras graduarse.',
      forStudents: 'Educación accesible y oportuna sin caer en endeudamiento predatorio.'
    }
  },
  {
    id: 'pillar-implementation',
    vertical: 'Implementación',
    title: 'Implementación: Plan de Despliegue Técnico y Operativo',
    tagline: 'Integración ágil en 6 semanas sin fricción de IT.',
    summary: 'Metodología estructurada de onboarding institucional que asegura interoperabilidad, seguridad y capacitación del personal universitario y bancario.',
    keyComponents: [
      {
        title: 'Semanas 1-2: Conexión de APIs & Sandbox Seguro',
        description: 'Configuración de webhooks con el SIS universitario y el Core Bancario en ambiente sandbox encriptado.',
        metrics: 'Pruebas de estrés y certificación de seguridad SOC2'
      },
      {
        title: 'Semanas 3-4: Calibración de Políticas & Convenio',
        description: 'Parametrización de los planes de cuotas, cupos de grants y criterios de validación académica acordados.',
        metrics: 'Firma digital de acuerdos marco y reglas de escrow'
      },
      {
        title: 'Semanas 5-6: Lanzamiento & Activación en Campus',
        description: 'Campaña de digital pass en el portal del estudiante y activación de la mesa de ayuda conjunta.',
        metrics: '>80% de activación en los primeros 14 días'
      }
    ],
    institutionalValue: {
      forUniversities: 'Despliegue sin sobrecarga para el equipo interno de tecnología.',
      forBanks: 'Monitoreo de métricas y riesgos en un dashboard dedicado en tiempo real.',
      forStudents: 'Experiencia de usuario 100% móvil, intuitiva y en menos de 3 clics.'
    }
  }
];

export const mockTranslations = {
  es: {
    appTitle: 'Nexus EduFin',
    appSubtitle: 'Ecosistema Institucional B2B2C: Universidad, Banca y Estudiantes',
    tabs: {
      landing: 'Inicio / Portales',
      prototype: 'Prototipo Interactivo',
      strategic: 'Pilares & Estrategia',
      architecture: 'Arquitectura & Privacidad',
      simulator: 'Simulador de Impacto & ROI'
    },
    personas: {
      student: 'Portal Estudiante',
      university: 'Portal Universidad',
      bank: 'Portal Bancario'
    },
    privacyBadge: 'Privacidad por Diseño (ZKP): Cero revisión de finanzas personales',
    quickSummary: 'Puente institucional de financiamiento académico, grants de investigación y tesorería automatizada.',
  },
  en: {
    appTitle: 'Nexus EduFin',
    appSubtitle: 'B2B2C Institutional Ecosystem: Universities, Banking & Students',
    tabs: {
      landing: 'Home / Portals',
      prototype: 'Interactive Prototype',
      strategic: 'Strategic Framework & Pillars',
      architecture: 'Architecture & Privacy',
      simulator: 'Impact & ROI Simulator'
    },
    personas: {
      student: 'Student Portal',
      university: 'University Portal',
      bank: 'Banking Partner Portal'
    },
    privacyBadge: 'Privacy by Design (ZKP): Zero review of personal finances',
    quickSummary: 'Institutional bridge for academic financing, research grants, and automated treasury.',
  }
};
