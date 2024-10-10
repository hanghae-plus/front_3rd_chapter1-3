/**
 * ! Union Types
 */
export const NotificationType_e = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
} as const;
export type NotificationType_e =
  (typeof NotificationType_e)[keyof typeof NotificationType_e];

/**
 * ! interface
 */
export interface Notification {
  id: number;
  message: string;
  type: NotificationType_e;
}
