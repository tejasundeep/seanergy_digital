import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";
import { ThemeProvider } from "@/components/themeSwitcher";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
