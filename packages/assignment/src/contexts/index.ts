import { NotificationContext } from "./NotificationContext";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

export const Contexts = {
  Theme: ThemeContext,
  Notification: NotificationContext,
  User: UserContext,
} as const;
