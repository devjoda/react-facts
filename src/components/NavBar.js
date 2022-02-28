import reactLogoSmall from "../images/react-logo-small.svg";

export default function NavBar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={reactLogoSmall} alt="React logo" />
      <h3 className="nav--title">ReactFacts</h3>
      <h4 className="nav--blurp">React Course - Project 1</h4>
    </nav>
  );
}
