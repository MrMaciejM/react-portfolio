import "./Footer.css";

function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer>
      <p>© Maciej Matulewicz - {getYear()} </p>
    </footer>
  );
}

export default Footer;
