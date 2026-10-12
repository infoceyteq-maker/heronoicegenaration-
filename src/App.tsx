import HeroScene from './components/three/HeroScene';
import MainUI from './components/sections/MainUI';

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      {/* 3D Scene */}
      <HeroScene />

      {/* UI Overlay */}
      <MainUI />
    </main>
  );
}