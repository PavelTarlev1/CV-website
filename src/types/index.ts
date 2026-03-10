// Make sure ALL interfaces are exported
export interface IExperience {
  title: string;
  company: string;
  project?: string;
  period: string;
  description: string[];
  tech: string[];
  projectInfo?: string;
  projectLink?: string;
}

export interface ITheme {
  bg: string;
  cardBg: string;
  border: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentLight: string;
  hover: string;
}

export interface IOpenSections {
  about: boolean;
}

export interface IOpenProjects {
  altice: boolean;
  dbs: boolean;
  wpx: boolean;
}