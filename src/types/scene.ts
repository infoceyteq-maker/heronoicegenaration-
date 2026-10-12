export type GeometryType = 'torusKnot' | 'icosahedron' | 'cyberSphere' | 'octahedron';

export type ColorThemeKey = 'cyan' | 'gold' | 'purple' | 'emerald';

export interface ColorTheme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  threePrimary: number;
  threeSecondary: number;
  threeAccent: number;
}

export interface SceneState {
  geometryType: GeometryType;
  colorTheme: ColorThemeKey;
  wireframe: boolean;
  rotationSpeed: number;
  particleCount: number;
  cameraPreset: 'default' | 'close' | 'wide' | 'top';
  audioEnabled: boolean;
  isPaused: boolean;
  pulseTrigger: number;
}

export const COLOR_THEMES: Record<ColorThemeKey, ColorTheme> = {
  cyan: {
    name: 'Electric Cyan',
    primary: '#06b6d4',
    secondary: '#0284c7',
    accent: '#38bdf8',
    threePrimary: 0x06b6d4,
    threeSecondary: 0x0284c7,
    threeAccent: 0x38bdf8,
  },
  gold: {
    name: 'Solar Amber',
    primary: '#f59e0b',
    secondary: '#d97706',
    accent: '#fbbf24',
    threePrimary: 0xf59e0b,
    threeSecondary: 0xd97706,
    threeAccent: 0xfbbf24,
  },
  purple: {
    name: 'Void Violet',
    primary: '#a855f7',
    secondary: '#7c3aed',
    accent: '#c084fc',
    threePrimary: 0xa855f7,
    threeSecondary: 0x7c3aed,
    threeAccent: 0xc084fc,
  },
  emerald: {
    name: 'Matrix Emerald',
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    threePrimary: 0x10b981,
    threeSecondary: 0x059669,
    threeAccent: 0x34d399,
  },
};
