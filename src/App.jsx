import { ClientProvider } from "./context/clientContext"
import { ConfigProvider } from "./context/configContext";
import { MainRoutes } from "./routes/mainRoutes";
import { GlobalStyle } from "./styles/globalStyle";
import { ResetCSS } from "./styles/resetCSS";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ConfigProvider>
      <ClientProvider>
        <ResetCSS />
        <GlobalStyle />
        <MainRoutes />
        <ToastContainer/>
      </ClientProvider>
    </ConfigProvider>
  );
}

export default App;
