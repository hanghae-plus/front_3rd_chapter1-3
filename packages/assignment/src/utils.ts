/**
 * @function renderLog
 * @description 주어진 메시지를 콘솔에 로그로 출력
 * @param {string} message 출력할 메시지
 */

export function renderLog(message: string) {
  console.log(message);
}

/**
 * @function generateItems
 * @description 대규모 데이터를 생성하는 함수
 * @param count - 생성할 아이템 수
 * @returns 생성된 아이템 배열
 */

export const generateItems = (count: number) => {
  const categories = ['전자기기', '의류', '도서', '식품'];
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    name: `상품 ${index}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    price: Math.floor(Math.random() * 100000) + 1000
  }));
};
