import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

const appRouter = createBrowserRouter([{}]);

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Hero />
        </BrowserRouter>
    );
}

export default App;
