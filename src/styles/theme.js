import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "#1157E4", // 프라이머리 컬러
    primaryhover: "#0e4ccf", // 프라이머리 호버 컬러
    background: "#121212", // 다크 모드 배경
    text: "#FFFFFF", // 기본 텍스트 색상
    muted: "#888888", // 비활성화 상태 색상
    border: "#333333", // 경계선 색상
  },
  typography: {
    fontFamily: "'Pretendard', sans-serif",
    heading: "2rem", // 큰 제목
    subheading: "1.5rem",
    body: "1.1rem", // 기본 텍스트 크기
    small: "1rem",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
  },
  borderRadius: "8px",
};

// 글로벌 스타일
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.typography.fontFamily};
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    transition: all 0.3s ease-in-out;
    padding: ${theme.spacing.large};
  }
`;

export default theme;
