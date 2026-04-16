import { Building2, Smartphone } from "lucide-react";
import type { TransferType } from "./types/types";

interface Step1Props {
  transferType: TransferType;
  onSelect: (type: "bank" | "phone") => void;
}

export default function Step1({ transferType, onSelect }: Step1Props) {
  return (
    <div className="step-container">
      <h2>Escolha o tipo de transferência</h2>
      <div className="options-grid">
        <button
          className={`option-card ${transferType === "bank" ? "selected" : ""}`}
          onClick={() => onSelect("bank")}
        >
          <Building2 size={48} />
          <span>Transferência Bancária</span>
          <p>Informe número da conta e valor</p>
        </button>
        <button
          className={`option-card ${transferType === "phone" ? "selected" : ""}`}
          onClick={() => onSelect("phone")}
        >
          <Smartphone size={48} />
          <span>Transferência por Telefone</span>
          <p>Informe número de telefone e valor</p>
        </button>
      </div>
    </div>
  );
}
