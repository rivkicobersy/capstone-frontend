import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Login />
      <LogoutLink />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
