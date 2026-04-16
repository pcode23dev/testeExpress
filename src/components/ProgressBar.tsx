interface ProgressBarProps {
  step: number;
  showPreview: boolean;
}

export default function ProgressBar({ step, showPreview }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div className={`step ${step >= 1 ? "active" : ""}`}>1. Tipo</div>
      <div className={`step ${step >= 2 ? "active" : ""}`}>2. Dados</div>
      <div className={`step ${showPreview ? "active" : ""}`}>3. Exportar</div>
    </div>
  );
}
