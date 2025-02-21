import Crypto from "./components/Crypto.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Coin } from "./interfaces/Coin.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
`;

export default function App() {

  const [data, setData] = useState<Coin[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.coinlore.net/api/tickers/");
      const { data }: { data: Coin[] } = await rawData.json();
      setData(data);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [data.length]);

  return (
    <ParentDiv>
      <Crypto data={data} />
    </ParentDiv>
  )
}
