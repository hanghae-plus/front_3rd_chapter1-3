/**
 * @type ThemeType
 * @description 사용 가능한 테마 옵션을 정의하는 타입
 * 'light' - 밝은 테마
 * 'dark' - 어두운 테마
 */

export type ThemeType = 'light' | 'dark';

/**
 * @type UserType
 * @description 사용자 정보를 나타내는 인터페이스
 * @property {number} id - 사용자의 고유 식별자
 * @property {string} name - 사용자의 이름
 * @property {string} email - 사용자의 이메일 주소
 */

export interface UserType {
  id: number;
  name: string;
  email: string;
}

/**
 * @type NotificationType 
 * @description 알림 메시지의 정보를 나타내는 인터페이스
 * @property {number} id - 알림의 고유 식별자
 * @property {string} message - 알림 메시지 내용
 * @property {'info' | 'success' | 'warning' | 'error'} type - 알림의 유형
 */

export interface NotificationType {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

/**
 * @type ThemeContextType
 * @description 테마 관련 컨텍스트 데이터와 함수를 포함하는 인터페이스
 * @property {ThemeType} theme - 현재 활성화된 테마
 * @property {() => void} toggleTheme - 테마를 토글하는 함수
 */

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

/**
 * @type UserContextType
 * @description 사용자 관련 컨텍스트 데이터와 함수를 포함하는 인터페이스입니다.
 * @property {UserType | null} user - 현재 로그인한 사용자 정보, 로그인하지 않은 상태면 null
 * @property {(email: string, password?: string) => void} login - 로그인 함수, 이메일과 선택적으로 비밀번호를 받음
 * @property {() => void} logout - 로그아웃 함수
 */
export interface UserContextType {
  user: UserType | null;
  login: (email: string, password?: string) => void;
  logout: () => void;
}

/**
 * @type NotificationContextType
 * @description 알림 관련 컨텍스트 데이터와 함수를 포함하는 인터페이스
 * @property {NotificationType[]} notifications - 현재 등록된 알림 목록
 * @property {(message: string, type: NotificationType['type']) => void} addNotification - 알림을 추가하는 함수
 * @property {(id: number) => void} removeNotification - 주어진 ID를 가진 알림을 제거하는 함수
 */
export interface NotificationContextType {
  notifications: NotificationType[];
  addNotification: (message: string, type: NotificationType['type']) => void;
  removeNotification: (id: number) => void;
}

/**
 * @type UserContextType
 * @description 상품의 정보를 나타내는 인터페이스
 * @property {number} id - 상품의 고유 식별자
 * @property {string} name - 상품의 이름
 * @property {string} category - 상품의 카테고리
 * @property {number} price - 상품의 가격
 */
export interface ItemType {
  id: number;
  name: string;
  category: string;
  price: number;
}