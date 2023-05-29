import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>© 2023 Coffee Stores</p>
      </footer>
    </div>
  );
}

export default MyApp;
