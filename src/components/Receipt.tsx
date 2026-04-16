import { forwardRef } from "react";
import type { Bank, TransferType } from "./types/types";
import {
  formatDateTimeForSignature,
  formatPhoneNumber,
  formatAmount,
  generateAccountInfo,
} from "./types/utils";

interface ReceiptProps {
  bank: Bank | undefined;
  transferType: TransferType;
  accountNumber: string;
  phoneNumber: string;
  amount: string;
  date: string;
  time: string;
  transactionId: string;
  selectedBank: string | null;
}

const Receipt = forwardRef<HTMLDivElement, ReceiptProps>(
  (
    {
      bank,
      transferType,
      accountNumber,
      phoneNumber,
      amount,
      date,
      time,
      transactionId,
      selectedBank,
    },
    ref
  ) => {
    const accountInfo = generateAccountInfo();

    return (
      <div ref={ref} className="receipt-container">
        {/* Header com assinatura digital */}
        <div className="receipt-header-pdf">
          <div className="digital-signature">
            Digitally signed by
            <br />
            noreply@mcxexpress.co.ao
            <br />
            Date: {formatDateTimeForSignature(date, time)} WAT
          </div>
          <div className="bank-logo-area">
            {selectedBank === "BAI" && (
              <div className="bai-logo">
                <span className="globe">🌍</span>
                <span className="bai-text">BAI</span>
              </div>
            )}
            {selectedBank === "ATLANTICO" && (
              <div className="atlantico-logo">
                <span className="symbol">⬡</span>
                <div className="atlantico-text">
                  <span>ATLANTICO</span>
                  <small>BANCO MILLENNIUM ATLÂNTICO</small>
                </div>
              </div>
            )}
            {!["BAI", "ATLANTICO"].includes(selectedBank || "") && (
              <div className="generic-logo" style={{ color: bank?.color }}>
                {bank?.name}
              </div>
            )}
          </div>
        </div>

        <h1 className="receipt-title">Comprovativo Digital</h1>
        <div className="separator-line"></div>
        <p className="receipt-subtitle">
          Detalhe da operação realizada através do canal MULTICAIXA Express.
        </p>

        <div className="data-table">
          {[
            { label: "Data - Hora", value: `${date} ${time}` },
            { label: "Operação", value: "Transferência Express" },
            {
              label: "Nº de Telemóvel Destinatário",
              value: formatPhoneNumber(
                transferType === "bank" ? accountNumber : phoneNumber
              ),
            },
            { label: "Montante", value: formatAmount(amount) },
            { label: "Comissão", value: "-" },
            { label: "Imposto", value: "-" },
            { label: "Total", value: formatAmount(amount) },
            { label: "Transacção", value: transactionId },
            { label: "Mensagem", value: "-" },
          ].map(({ label, value }) => (
            <div className="data-row" key={label}>
              <span className="label">{label}</span>
              <span className="value">{value}</span>
            </div>
          ))}
        </div>

        <div className="spacer"></div>

        <div className="bank-slogan">
          {bank?.slogan.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="receipt-footer-pdf">
          <p className="support-text">
            Caso necessite de obter alguma informação, contacte por favor a
            nossa linha de apoio MULTICAIXA (24h):
            <br />
            (+244) 222 641 840 | 923 168 840
          </p>
          <div className="footer-line"></div>
          <p className="account-info">{accountInfo}</p>
        </div>
      </div>
    );
  }
);

Receipt.displayName = "Receipt";
export default Receipt;
