import { Route, BrowserRouter, Link } from "react-router-dom";
import ReceptionApp from "./ReceptionApp";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/reception">Reception</Link>
      </nav>
      <Route path="/">
        <h1>Welcome to Hopin</h1>
      </Route>
      <ReceptionApp />
    </BrowserRouter>
  );
}