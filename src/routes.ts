import { MainView, PersonaType } from './types';

export const PATHS = {
  landing: '/',
  student: '/estudiante',
  university: '/universidad',
  bank: '/banco',
  strategic: '/estrategia',
  architecture: '/arquitectura',
  simulator: '/simulador',
} as const;

export function pathFromState(view: MainView, persona: PersonaType): string {
  if (view === 'landing') return PATHS.landing;
  if (view === 'prototype') {
    if (persona === 'university') return PATHS.university;
    if (persona === 'bank') return PATHS.bank;
    return PATHS.student;
  }
  if (view === 'strategic_deck') return PATHS.strategic;
  if (view === 'architecture') return PATHS.architecture;
  return PATHS.simulator;
}

export function stateFromPath(pathname: string): { view: MainView; persona?: PersonaType } {
  const path = pathname.replace(/\/$/, '') || '/';
  switch (path) {
    case PATHS.student:
      return { view: 'prototype', persona: 'student' };
    case PATHS.university:
      return { view: 'prototype', persona: 'university' };
    case PATHS.bank:
      return { view: 'prototype', persona: 'bank' };
    case PATHS.strategic:
      return { view: 'strategic_deck' };
    case PATHS.architecture:
      return { view: 'architecture' };
    case PATHS.simulator:
      return { view: 'simulator' };
    default:
      return { view: 'landing' };
  }
}

export function titleFromState(view: MainView, persona: PersonaType): string {
  if (view === 'prototype') {
    if (persona === 'university') return 'Portal Universidad | NEXUS EduFin';
    if (persona === 'bank') return 'Portal Bancario | NEXUS EduFin';
    return 'Portal Estudiante | NEXUS EduFin';
  }
  if (view === 'strategic_deck') return 'Marco Estratégico | NEXUS EduFin';
  if (view === 'architecture') return 'Arquitectura | NEXUS EduFin';
  if (view === 'simulator') return 'Simulador ROI | NEXUS EduFin';
  return 'NEXUS EduFin';
}
