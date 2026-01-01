
export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export enum SectionId {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Process = 'process',
  Contact = 'contact'
}

export enum View {
  Home = 'home',
  Portfolio = 'portfolio'
}
