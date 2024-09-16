import CompiledApp from "./components/compiled/App";
import CompiledIndex from "./components/compiled/Index";
import CompiledAbout from "./components/compiled/About";
import CompiledFeedback from "./components/compiled/Feedback";
import CompiledForm from "./components/compiled/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompiledHackerBoard from "./components/compiled/HackerBoard";
import CompiledLogin from "./components/compiled/Login";
import CompiledInstruction from "./components/compiled/Instruction";
import CompiledRegister from "./components/compiled/Register";
import CompiledMachine from "./components/compiled/Machine";
import CompiledQuest from "./components/compiled/Quest";
import Compiled404 from "./components/compiled/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Routes>
          <Route path="/">
            <Route index element={<CompiledIndex />} />
            <Route path="app">
              <Route path="list" element={<CompiledApp />} />
              <Route path="form" element={<CompiledForm />} />
              <Route path="machine/:id" element={<CompiledMachine />} />
              <Route path="quest" element={<CompiledQuest />} />
              <Route path="hackerboard" element={<CompiledHackerBoard />} />
            </Route>
            <Route path="authentication">
              <Route path="login" element={<CompiledLogin />} />
              <Route path="register" element={<CompiledRegister />} />
            </Route>
            <Route path="information">
              <Route path="about" element={<CompiledAbout />} />
              <Route path="instruction" element={<CompiledInstruction />} />
              <Route path="feedback" element={<CompiledFeedback />} />
            </Route>
            <Route path="*" element={<Compiled404 />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
