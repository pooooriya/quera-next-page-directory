"use client";
import { Container } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps extends React.PropsWithChildren {}
const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
