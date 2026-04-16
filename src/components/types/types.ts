export type TransferType = "bank" | "phone" | null;
export type BankId = "ATLANTICO" | "BAI" | "BFA" | "BIC" | "BPC" | "STANDARD";

export interface Bank {
  id: BankId;
  name: string;
  color: string;
  fullName: string;
  slogan: string;
}

export interface FormData {
  transferType: TransferType;
  selectedBank: BankId | null;
  accountNumber: string;
  phoneNumber: string;
  amount: string;
}

export const banks: Bank[] = [
  {
    id: "ATLANTICO",
    name: "ATLANTICO",
    color: "#0099CC",
    fullName: "Banco Millennium Atlântico",
    slogan: "Tenha a conta activa. Actualize os dados",
  },
  {
    id: "BAI",
    name: "BAI",
    color: "#C41E3A",
    fullName: "Banco Angolano de Investimentos",
    slogan: "Fique em casa. Use o BAIDIRECTO\nBAI. Confiança no Futuro.",
  },
  {
    id: "BFA",
    name: "BFA",
    color: "#FF6600",
    fullName: "Banco Fomento Angola",
    slogan: "O seu banco, sempre consigo",
  },
  {
    id: "BIC",
    name: "BIC",
    color: "#228B22",
    fullName: "Banco BIC",
    slogan: "Simplificamos a sua vida",
  },
  {
    id: "BPC",
    name: "BPC",
    color: "#8B0000",
    fullName: "Banco de Poupança e Crédito",
    slogan: "O banco do povo angolano",
  },
  {
    id: "STANDARD",
    name: "Standard Bank",
    color: "#0066CC",
    fullName: "Standard Bank",
    slogan: "Possibilitamos o seu sucesso",
  },
];
