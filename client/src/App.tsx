import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState<any>([]);

  useEffect(() => {
    fetch(" https://localhost:5001/api/activities")
      .then((x) => x.json())
      .then((data) => setState(data));
  }, []);

  return (
    <>
    <h1>Allah hu Akbar</h1>
      {state.map((item: any) => {
        return <h3 key={item.id}>{item.title}</h3>;
      })}
    </>
  );
}

export default App;
