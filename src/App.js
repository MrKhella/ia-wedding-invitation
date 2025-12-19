import { useState } from "react";
import "./App.css";
import Cover from "./components/Cover";
import Invite from "./components/Invite";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      {!open && <Cover openInvite={() => setOpen(true)} />}
      {open && <Invite />}
    </div>
  );
}
