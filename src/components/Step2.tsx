import { ArrowRight, Check } from "lucide-react";
import type { TransferType, BankId } from "./types/types";
import { banks } from "./types/types";

interface Step2Props {
  transferType: TransferType;
  selectedBank: BankId | null;
  accountNumber: string;
  phoneNumber: string;
  amount: string;
  onBankSelect: (bank: BankId) => void;
  onAccountNumberChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onAmountChange: (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function Step2({
  transferType,
  selectedBank,
  accountNumber,
  phoneNumber,
  amount,
  onBankSelect,
  onAccountNumberChange,
  onPhoneNumberChange,
  onAmountChange,
  onBack,
  onContinue,
}: Step2Props) {
  const isValid =
    !!selectedBank &&
    !!amount &&
    (transferType === "bank" ? !!accountNumber : !!phoneNumber);

  return (
    <div className="step-container">
      <h2>
        {transferType === "bank"
          ? "Dados da Transferência Bancária"
          : "Dados da Transferência por Telefone"}
      </h2>

      <div className="form-group">
        <label>Selecione o Banco</label>
        <div className="banks-grid">
          {banks.map((bank) => (
            <button
              key={bank.id}
              className={`bank-card ${selectedBank === bank.id ? "selected" : ""}`}
              onClick={() => onBankSelect(bank.id)}
              style={{
                borderColor: selectedBank === bank.id ? bank.color : "#e0e0e0",
              }}
            >
              <div
                className="bank-logo"
                style={{ backgroundColor: bank.color }}
              >
                {bank.id[0]}
              </div>
              <span>{bank.name}</span>
              {selectedBank === bank.id && (
                <Check className="check-icon" size={20} />
              )}
            </button>
          ))}
        </div>
      </div>

      {transferType === "bank" ? (
        <div className="form-group">
          <label>Número da Conta Bancária</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => onAccountNumberChange(e.target.value)}
            placeholder="Ex: 005500009717234910187"
            className="input-field"
          />
        </div>
      ) : (
        <div className="form-group">
          <label>Número de Telefone</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => onPhoneNumberChange(e.target.value)}
            placeholder="Ex: 927628298"
            className="input-field"
          />
        </div>
      )}

      <div className="form-group">
        <label>Valor (Kz)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder="Ex: 1000.00"
          className="input-field"
        />
      </div>

      <div className="button-group">
        <button className="btn-secondary" onClick={onBack}>
          Voltar
        </button>
        <button
          className="btn-primary"
          onClick={onContinue}
          disabled={!isValid}
        >
          Continuar <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
