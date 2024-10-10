/**
 * @description 메시지를 콘솔에 출력하는 함수입니다.
 * @param message - 출력할 메시지
 */
export const renderLog = (message: string): void => console.log(message);

/**
 * @description 대규모 데이터를 생성하는 함수입니다.
 * @param count - 생성할 아이템 수
 * @returns 생성된 아이템 배열
 */
export const generateItems = (count: number) => {
  const categories = ["전자기기", "의류", "도서", "식품"];
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    name: `상품 ${index}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    price: Math.floor(Math.random() * 100000) + 1000,
  }));
};