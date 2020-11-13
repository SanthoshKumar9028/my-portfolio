import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ header, footer, Children }) {
  return (
    <div>
      {header && <Header />}
      {Children}
      {footer && <Footer />}
    </div>
  );
}
