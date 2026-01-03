export const generateTicketId = () => {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ACD26-${random}`;
  };
  