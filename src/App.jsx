import { ConfigProvider } from "./context/config";
import { MainRoutes } from "./routes/mainRoutes";
import { GlobalStyle } from "./styles/globalStyle";
import { ResetCSS } from "./styles/resetCSS";


function App() {
  return (
    <ConfigProvider>
      <ResetCSS />
      <GlobalStyle />
      <MainRoutes/>
    </ConfigProvider>
  );
}

export default App;
