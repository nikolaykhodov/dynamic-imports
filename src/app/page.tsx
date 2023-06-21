"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    (async () => {
      const [dynamic1, dynamic2] = await Promise.all([
        import(/* webpackChunkName: "dynamic1" */ "./dynamic1"),
        import(/* webpackChunkName: "dynamic2" */ "./dynamic2"),
      ]);

      console.log(JSON.stringify({ dynamic1, dynamic2 }, null, 4));
    })();
  }, [counter]);

  return (
    <>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Re-render (triggers loading dynamic imports)
      </button>
    </>
  );
}
