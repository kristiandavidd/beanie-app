import "@/styles/globals.css";
import { Marcellus, Poppins } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${marcellus.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
