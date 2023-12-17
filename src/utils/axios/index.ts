import { isAxiosError } from "axios";

function dispatchAxiosError(error: unknown): string {
  const defaultMessage =
    "Sorry, something went wrong. We are not able to complete your request. Please try again.";

  if (isAxiosError(error)) {
    const message = error?.response?.data?.Message;
    return message ?? defaultMessage;
  }

  return defaultMessage;
}

export { dispatchAxiosError };
