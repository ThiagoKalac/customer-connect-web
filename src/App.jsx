// import { ClientProvider } from "./context/clientContext";
import { ConfigProvider } from "./context/configContext";
import { MainRoutes } from "./routes/mainRoutes";
import { GlobalStyle } from "./styles/globalStyle";
import { ResetCSS } from "./styles/resetCSS";


function App() {
  return (
    <ConfigProvider>
      {/* <ClientProvider> */}
        <ResetCSS />
        <GlobalStyle />
        <MainRoutes/>
      {/* </ClientProvider> */}
    </ConfigProvider>
  );
}

export default App;
