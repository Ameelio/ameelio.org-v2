import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { AppWrapper } from "context/state";
import { PetitionModal } from "components/Modals";

function Application({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <PetitionModal />
      <Component {...pageProps} />
    </AppWrapper>
  );
}
export default Application;
