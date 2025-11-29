export const validateString = (value: unknown, maxLength: number) => {
  return !(!value || typeof value !== "string" || value.length > maxLength);
};

export const validateEmail = (email: unknown): boolean => {
  if (!validateString(email, 500)) {
    return false;
  }
  // RFC 5322 compliant email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email as string);
};

export const sanitizeInput = (input: string): string => {
  // Remove null bytes and control characters except newlines and tabs
  return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};
