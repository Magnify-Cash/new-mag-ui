import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router";
import "../globals.css"; // Assuming you've moved your css file here

const BaiJamjuree = ({ children }) => (
  <div className="font-sans">{children}</div>
);

function Layout({ children }) {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Modern Dashboard</title>
        <meta
          name="description"
          content="A beautiful and functional dashboard interface"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          @font-face {
            font-family: 'Bai Jamjuree';
            font-style: normal;
            font-weight: 400;
            src: url('/path/to/bai-jamjuree-font.woff2') format('woff2');
          }
          html {
            --font-bai-jamjuree: 'Bai Jamjuree', sans-serif;
          }
          body {
            font-family: var(--font-bai-jamjuree), sans-serif;
          }
        `}</style>
      </Helmet>
      <BaiJamjuree>{children}</BaiJamjuree>
    </BrowserRouter>
  );
}

export default Layout;
