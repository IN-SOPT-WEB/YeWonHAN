import { useState } from "react";
import Search from "../components/Search";
import User from "../components/User";
import HistoryBlock from "../components/HistoryBlock";

export default function App() {
  const [searchUserID, setSearchUserId] = useState("");
  const [submit, setSubmit] = useState(false);

  const onChange = (e) => {
    setSearchUserId(e.target.value);
    setSubmit(false);
  };

  const onSubmit = () => {
    setSubmit(true);
    const pageTitle = "userId";
    window.history.pushState("", pageTitle, `/${searchUserID}`);
  };

  const onReset = () => {
    window.history.pushState("", "", `/`);
    // input창도 초기화
    setSearchUserId("");
    setSubmit(false);
  };

  return (
    <div className="App">
      <Search onChange={onChange} onClick={onSubmit} value={searchUserID} />
      {submit && <HistoryBlock userId={searchUserID} onClick={onSubmit} />}
      {submit && <User username={searchUserID} onReset={onReset} />}
    </div>
  );
}
