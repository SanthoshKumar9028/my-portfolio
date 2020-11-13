import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ header, footer, children }) {
  return (
    <div>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </div>
  );
}
