/** @format */

import { ThemeProvider } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GlobalStyles } from "styles/globalStyles";
import { theme } from "styles/theme";
import UserWeb3Provider from "hooks/web3/userWeb3Provider";
import "../styles/timeline-loadmore.css";
import { CookiesProvider } from "react-cookie";
import "../styles/css/timeline.min.css";
import FrameProvider from "hooks/FrameProvider/components/FrameProvider";
import { PortalProvider } from "hooks/PortalProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <PortalProvider>
            <FrameProvider>
              <GlobalStyles />
              <Component {...pageProps} />
            </FrameProvider>
          </PortalProvider>
        </ThemeProvider>
      </CookiesProvider>
    </>
  );
}
