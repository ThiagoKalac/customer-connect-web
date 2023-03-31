import { ClientProvider } from "./context/clientContext";
import { ConfigProvider } from "./context/configContext";
import { ContactProvider } from "./context/contactContext";
import { MainRoutes } from "./routes/mainRoutes";
import { GlobalStyle } from "./styles/globalStyle";
import { ResetCSS } from "./styles/resetCSS";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ConfigProvider>
      <ClientProvider>
        <ContactProvider>
          <ResetCSS />
          <GlobalStyle />
          <MainRoutes />
          <ToastContainer />
        </ContactProvider>
      </ClientProvider>
    </ConfigProvider>
  );
}

export default App;
