import ParticleBackground from "./ParticleBackground";

export default function AmbientField() {
  return (
    <div className="ambient-field fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="ambient-backdrop absolute inset-0" />
      <ParticleBackground />
    </div>
  );
}
