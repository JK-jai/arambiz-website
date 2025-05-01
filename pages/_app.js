import "../styles/globals.css"; // ✅ correct

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
