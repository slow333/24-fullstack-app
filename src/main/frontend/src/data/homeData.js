const homeData = [
  {
    id: 1,
    content: "vite",
    isSelected: false,
  },
  {
    id: 2,
    content: "react-router-dom",
    isSelected: false,
  },
  {
    id: 3,
    content: "styled components",
    isSelected: false,
  },
  {
    id: 4,
    content: "react async function",
    isSelected :false,
  },
  {
    id: 5,
    content: "tailwind와 styled-components를 동시에 사용",
    isSelected: true,
  },

];

export default function getHome() {
  return homeData;
}