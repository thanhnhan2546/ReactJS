import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { RQSuperHeroes } from "./components/RQSuperHeroes";
import { SuperHeroes } from "./components/SuperHeroes";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heroes" element={<SuperHeroes />}></Route>
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHeroes />}
            ></Route>
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />}></Route>

            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
