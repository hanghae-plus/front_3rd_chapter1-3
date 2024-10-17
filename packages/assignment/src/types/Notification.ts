/**
 * @description 알림 정보를 나타내는 인터페이스
 */
export interface Notification {
  id: number;    
  message: string;
  type: "info" | "success" | "warning" | "error";
}
