import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 720px;
  padding: 0.5rem 1rem;
`;

export const Footer = styled.footer`
  padding: 0.5rem 1rem;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
`;
