import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import * as utils from "../utils";
import {
  AppProvider,
  useNotificationContext,
  useThemeContext,
  useUserContext,
} from "@/app/context";
import {
  NotificationProvider,
  ThemeProvider,
  UserProvider,
} from "@/app/context/providers";
import { useProductsContext } from "@/pages/products/context/useProductsContext";
import { ProductsProvider } from "@/pages/products/context/ProductsProvider";
import { act, StrictMode } from "react";
import { ProductAddForm } from "@/pages/products/components";
import { createRoot } from "react-dom/client";
import { ProductsPage } from "@/pages";

const renderLogMock = vi.spyOn(utils, "renderLog");
const generateItemsSpy = vi.spyOn(utils, "generateItems");

describe("최적화된 App 컴포넌트 테스트", () => {
  beforeEach(() => {
    renderLogMock.mockClear();
    generateItemsSpy.mockClear();
    document.body.innerHTML = "";
  });

  it("초기 렌더링 시 모든 컴포넌트가 한 번씩 렌더링되어야 한다", () => {
    render(<App />);
    expect(renderLogMock).toHaveBeenCalledWith("Header rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ItemList rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(4);
  });

  it("테마 변경 시 Header, ItemList만 리렌더링되어야 한다", async () => {
    render(<App />);
    renderLogMock.mockClear();

    const themeButton = await screen.findByText(/다크 모드|라이트 모드/);
    await fireEvent.click(themeButton);

    expect(renderLogMock).toHaveBeenCalledWith("Header rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ItemList rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(2);
  });

  it("로그인/로그아웃 시 Header, ComplexForm, NotificationSystem만 리렌더링되어야 한다", async () => {
    render(<App />);
    renderLogMock.mockClear();

    const loginButton = await screen.findByText("로그인");
    await fireEvent.click(loginButton);

    // Header가 변경 되면 알림이 발생하고, 알림 정보를 CompleteForm과 NotificationSystem이 가져다 사용 중
    expect(renderLogMock).toHaveBeenCalledWith("Header rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(3);
    renderLogMock.mockClear();

    const logoutButton = await screen.findByText("로그아웃");
    await fireEvent.click(logoutButton);

    expect(renderLogMock).toHaveBeenCalledWith("Header rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(3);
  });

  it("아이템 검색 시 ItemList만 리렌더링되어야 한다", async () => {
    render(<App />);
    renderLogMock.mockClear();

    const searchInput = await screen.findByPlaceholderText("상품 검색...");
    await fireEvent.change(searchInput, { target: { value: "검색어" } });

    expect(renderLogMock).toHaveBeenCalledWith("ItemList rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(1);
  });

  it("폼 입력 시 ComplexForm만 리렌더링되어야 한다", async () => {
    render(<App />);
    renderLogMock.mockClear();

    const nameInput = await screen.findByPlaceholderText("이름");
    await fireEvent.change(nameInput, { target: { value: "홍길동" } });

    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(1);
  });

  it("알림 추가 및 닫기시 ComplexForm, NotificationSystem만 리렌더링되어야 한다", async () => {
    render(<App />);
    renderLogMock.mockClear();

    const submitButton = await screen.findByText("제출");
    await fireEvent.click(submitButton);

    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(2);
    renderLogMock.mockClear();

    // 알림 닫기 버튼 찾기 및 클릭
    const closeButton = await screen.findByText("닫기");
    await fireEvent.click(closeButton);

    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(2);
  });

  it("여러 작업을 연속으로 수행해도 각 컴포넌트는 필요한 경우에만 리렌더링되어야 한다", async () => {
    render(<App />);
    renderLogMock.mockClear();

    // 테마 변경
    const themeButton = await screen.findByText(/다크 모드|라이트 모드/);
    await fireEvent.click(themeButton);
    expect(renderLogMock).toHaveBeenCalledWith("Header rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ItemList rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(2);
    renderLogMock.mockClear();

    // 로그인
    const loginButton = await screen.findByText("로그인");
    await fireEvent.click(loginButton);
    expect(renderLogMock).toHaveBeenCalledWith("Header rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(3);
    renderLogMock.mockClear();

    // 알림 닫기 버튼 찾기 및 클릭
    await fireEvent.click(await screen.findByText("닫기"));
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(2);
    renderLogMock.mockClear();

    // 아이템 검색
    const searchInput = await screen.findByPlaceholderText("상품 검색...");
    await userEvent.type(searchInput, "검색어입력");
    expect(renderLogMock).toHaveBeenCalledWith("ItemList rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(5);
    renderLogMock.mockClear();

    // 폼 입력
    const nameInput = await screen.findByPlaceholderText("이름");
    await userEvent.type(nameInput, "홍길동");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(3);
    renderLogMock.mockClear();

    // 폼 제출
    const submitButton = await screen.findByText("제출");
    await fireEvent.click(submitButton);
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(2);
    renderLogMock.mockClear();

    // 알림 닫기 버튼 찾기 및 클릭
    await fireEvent.click(await screen.findByText("닫기"));
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(2);

    expect(generateItemsSpy).toHaveBeenCalledTimes(1);
  });
});

describe("Context API 테스트", () => {
  describe("NotificationContext API 테스트", () => {
    it("NotificationContext가 Provider 내부에 있는지 확인합니다.", () => {
      const { result } = renderHook(() => useNotificationContext(), {
        wrapper: NotificationProvider,
      });
      expect(result.current).toBeDefined();
    });

    it("NotificationContext가 Provider 내부에 없으면 에러가 발생합니다.", () => {
      try {
        renderHook(() => useNotificationContext());
      } catch (error) {
        expect((error as Error).message).toBe(
          "useNotificationContext는 NotificationProvider 내부에서 사용해야 합니다."
        );
      }
    });
  });

  describe("UserContext API 테스트", () => {
    it("UserContext가 Provider 내부에 있는지 확인합니다.", () => {
      const Provider = ({ children }: { children: React.ReactNode }) => {
        return (
          <NotificationProvider>
            <UserProvider>{children}</UserProvider>
          </NotificationProvider>
        );
      };

      const { result } = renderHook(() => useUserContext(), {
        wrapper: Provider,
      });
      expect(result.current).toBeDefined();
    });

    it("UserContext가 Provider 내부에 없으면 에러가 발생합니다.", () => {
      try {
        renderHook(() => useUserContext());
      } catch (error) {
        expect((error as Error).message).toBe(
          "useUserContext는 UserProvider 내부에서 사용해야 합니다."
        );
      }
    });
  });

  describe("ThemeContext API 테스트", () => {
    it("ThemeContext가 Provider 내부에 있는지 확인합니다.", () => {
      const { result } = renderHook(() => useThemeContext(), {
        wrapper: ThemeProvider,
      });
      expect(result.current).toBeDefined();
    });

    it("ThemeContext가 Provider 내부에 없으면 에러가 발생합니다.", () => {
      try {
        renderHook(() => useThemeContext());
      } catch (error) {
        expect((error as Error).message).toBe(
          "useThemeContext는 ThemeProvider 내부에서 사용해야 합니다."
        );
      }
    });

    it("toggleTheme이 잘 동작하는지 확인합니다.", () => {
      const { result } = renderHook(() => useThemeContext(), {
        wrapper: ThemeProvider,
      });
      expect(result.current.theme).toBe("light");
      act(() => {
        result.current.toggleTheme();
      });
      expect(result.current.theme).toBe("dark");
      act(() => {
        result.current.toggleTheme();
      });
      expect(result.current.theme).toBe("light");
    });
  });

  describe("ProductsContext API 테스트", () => {
    it("ProductsContext가 Provider 내부에 있는지 확인합니다.", () => {
      const { result } = renderHook(() => useProductsContext(), {
        wrapper: ProductsProvider,
      });
      expect(result.current).toBeDefined();
    });

    it("ProductsContext가 Provider 내부에 없으면 에러가 발생합니다.", () => {
      try {
        renderHook(() => useProductsContext());
      } catch (error) {
        expect((error as Error).message).toBe(
          "useProductsContext는 ProductsProvider 내부에서 사용해야 합니다."
        );
      }
    });
  });
});

describe("NotificationSystem 컴포넌트 테스트", () => {
  it("NotificationSystem 컴포넌트가 처음에는 자식이 없는 상태로 렌더링되어야 한다", () => {
    render(
      <NotificationProvider>
        <></>
      </NotificationProvider>
    );
    const container = screen.getByTestId("notification-system");
    expect(container).toBeTruthy();
    expect(container.children.length).toBe(0);
  });

  it("notification 추가 시 자식이 추가되어야 한다", async () => {
    const { result } = renderHook(() => useNotificationContext(), {
      wrapper: NotificationProvider,
    });
    act(() => {
      result.current.addNotification("알림 메시지", "success");
    });
    const notificationContainer = screen.getByTestId("notification-system");

    expect(notificationContainer.children.length).toBe(1);
    const data = result.current.notifications;
    expect(data[0].message).toBe("알림 메시지");
    expect(data[0].type).toBe("success");
    expect(data[0].id).toBeDefined();

    const notification = screen.getByText("알림 메시지");
    expect(notification).toBeDefined();
  });

  it("notification에 설정되지 않은 type이 들어올 경우 info를 기본으로 보여줍니다.", () => {
    const { result } = renderHook(() => useNotificationContext(), {
      wrapper: NotificationProvider,
    });
    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      result.current.addNotification("알림 메시지", "test" as any);
    });
    const notificationContainer = screen.getByTestId("notification-system");
    expect(notificationContainer.children.length).toBe(1);

    const addedNotification = screen.getByText("알림 메시지");
    expect(addedNotification).toBeDefined();
    expect(addedNotification.classList.contains("bg-blue-500")).toBe(true);
  });
});

describe("ProductAddForm 컴포넌트 테스트", () => {
  it("ProductAddForm 컴포넌트의 체크박스가 잘 동작하는지 확인합니다.", async () => {
    render(<ProductAddForm />, {
      wrapper: NotificationProvider,
    });

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBe(4);

    await userEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toHaveProperty("checked", true);

    await userEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toHaveProperty("checked", false);
  });

  it("ProductAddForm 컴포넌트의 Input이 잘 동작하는지 확인합니다.", async () => {
    render(<ProductAddForm />, {
      wrapper: NotificationProvider,
    });

    const nameInput = screen.getByRole("textbox", {
      name: "name",
    }) as HTMLInputElement;
    await userEvent.type(nameInput, "홍길동");
    expect(nameInput.value).toBe("홍길동");

    const emailInput = screen.getByRole("textbox", {
      name: "email",
    }) as HTMLInputElement;
    await userEvent.type(emailInput, "test@example.com");
    expect(emailInput.value).toBe("test@example.com");

    const ageInput = screen.getByRole("spinbutton", {
      name: "age",
    }) as HTMLInputElement;
    await userEvent.type(ageInput, "123");
    expect(parseInt(ageInput.value)).toBe(123);
    await userEvent.clear(ageInput);
    expect(ageInput.value).toBe("0");
    await userEvent.type(ageInput, "test");
    expect(parseInt(ageInput.value)).toBe(0);
  });

  it("ProductAddForm 컴포넌트에서 submit시 product가 잘 추가되는지 확인합니다", async () => {
    const { result } = renderHook(() => useProductsContext(), {
      wrapper: ProductsProvider,
    });
    act(() => {
      result.current.addProduct({
        id: 22313,
        name: "홍길동",
        category: "test",
        price: 1000,
      });
    });
    expect(result.current.products.length).toBe(100001);
    const addedProduct =
      result.current.products[result.current.products.length - 1];
    expect(addedProduct?.name).toBe("홍길동");
    expect(addedProduct?.category).toBe("test");
    expect(addedProduct?.price).toBe(1000);
    expect(addedProduct?.id).toBe(22313);
  });
});
