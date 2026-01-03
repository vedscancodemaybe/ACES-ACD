import QRCode from "qrcode";

export const generateQR = async (ticketId) => {
  return await QRCode.toDataURL(ticketId);
};
