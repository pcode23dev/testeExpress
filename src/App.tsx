import { useState } from "react";
import type { BankId, TransferType } from "./components/types/types";
import ProgressBar from "./components/ProgressBar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import PreviewModal from "./components/PreviewModal";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [transferType, setTransferType] = useState<TransferType>(null);
  const [selectedBank, setSelectedBank] = useState<BankId | null>(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleTypeSelect = (type: "bank" | "phone") => {
    setTransferType(type);
    setStep(2);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>💳 Gerador de Comprovativos</h1>
        <p>Sistema de transferências MULTICAIXA</p>
      </header>

      <main className="app-main">
        <ProgressBar step={step} showPreview={showPreview} />

        {step === 1 && (
          <Step1 transferType={transferType} onSelect={handleTypeSelect} />
        )}

        {step === 2 && (
          <Step2
            transferType={transferType}
            selectedBank={selectedBank}
            accountNumber={accountNumber}
            phoneNumber={phoneNumber}
            amount={amount}
            onBankSelect={setSelectedBank}
            onAccountNumberChange={setAccountNumber}
            onPhoneNumberChange={setPhoneNumber}
            onAmountChange={setAmount}
            onBack={() => setStep(1)}
            onContinue={() => setShowPreview(true)}
          />
        )}

        {showPreview && (
          <PreviewModal
            transferType={transferType}
            selectedBank={selectedBank}
            accountNumber={accountNumber}
            phoneNumber={phoneNumber}
            amount={amount}
            onEdit={() => setShowPreview(false)}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>© 2026 - Sistema de Transferências Angolanas</p>
      </footer>
    </div>
  );
}

export default App;
