import { createContext } from 'react';
import { NotificationContextType } from '../types';

/**
 * @description 알림 시스템을 위한 컨텍스트입니다. 알림을 추가하거나 삭제하는 기능을 제공합니다.
 * @default undefined - 기본값으로는 정의되지 않았으며, 반드시 Provider로 감싸서 사용해야 합니다.
 */
export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);
