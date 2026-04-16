import { useRef } from "react";
import { FileText } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Receipt from "./Receipt";
import type { BankId, TransferType } from "./types";

import {banks } from "./types";
import { getCurrentDateTime, generateTransactionId, generateFileName } from "./utils";

interface PreviewModalProps {
  transferType: TransferType;
  selectedBank: BankId | null;
  destinatario: string;
  iban: string;
  phoneNumber: string;
  amount: string;
  onEdit: () => void;
}

export default function PreviewModal({
  transferType,
  selectedBank,
  destinatario,
  iban,
  phoneNumber,
  amount,
  onEdit,
}: PreviewModalProps) {
  const receiptRef = useRef<HTMLDivElement>(null);
  const { date, time } = getCurrentDateTime();
  const bank = banks.find((b) => b.id === selectedBank);
  const transactionId = generateTransactionId();

  const handleExportPDF = async () => {
    if (!receiptRef.current) return;
    const canvas = await html2canvas(receiptRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
      logging: false,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(generateFileName());
  };

  return (
    <div className="preview-overlay">
      <div className="preview-modal">
        <h2>Pré-visualização do Comprovativo</h2>

        <Receipt
          ref={receiptRef}
          bank={bank}
          transferType={transferType}
          destinatario={destinatario}
          iban={iban}
          phoneNumber={phoneNumber}
          amount={amount}
          date={date}
          time={time}
          transactionId={transactionId}
          selectedBank={selectedBank}
        />

        <div className="button-group">
          <button className="btn-secondary" onClick={onEdit}>Editar</button>
          <button className="btn-primary" onClick={handleExportPDF}>
            <FileText size={20} /> Exportar PDF
          </button>
        </div>
      </div>
    </div>
  );
}
