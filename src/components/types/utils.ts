export const generateTransactionId = (): string => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

export const getCurrentDateTime = () => {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const time = now.toTimeString().split(" ")[0].substring(0, 8);
  return { date, time };
};

export const generateFileName = (): string => {
  const { date, time } = getCurrentDateTime();
  const formattedDate = date.replace(/-/g, "");
  const formattedTime = time.replace(/:/g, "");
  const transactionId = generateTransactionId();
  return `comprovativo_${formattedDate}_${formattedTime}_${transactionId}_signed.pdf`;
};

export const formatDateTimeForSignature = (date: string, time: string): string => {
  return `${date.replace(/-/g, ".")}${time.replace(/:/g, "")}`;
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  return phone;
};

export const formatAmount = (value: string): string => {
  const num = parseFloat(value);
  if (isNaN(num)) return "0,00 Kz";
  return (
    num
      .toLocaleString("pt-PT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(/\./g, ",") + " Kz"
  );
};

export const generateAccountInfo = (): string => {
  return `Conta: 00${Math.floor(Math.random() * 90 + 10)}0000${Math.floor(
    Math.random() * 9000000000 + 1000000000
  )} | ${Math.floor(Math.random() * 900000 + 100000)}******${Math.floor(
    Math.random() * 9000 + 1000
  )}`;
};
