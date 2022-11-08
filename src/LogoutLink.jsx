import axios from "axios";

export function LogoutLink(props) {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className={props.className} href="/" onClick={handleClick}>
      Logout
    </a>
  );
}
