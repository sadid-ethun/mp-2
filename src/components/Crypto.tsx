import styled from "styled-components";
import { Coin } from "../interfaces/Coin.ts";

const AllCoinsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
`;

const SingleCoinDiv = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px black solid;
    border-radius: 20px;
    background-color: dimgray;
    text-align: center;
    color: white;
`;

export default function Crypto(props: { data: Coin[] }) {
    return (
        <AllCoinsDiv >
            {
                props.data.map((coin: Coin) =>
                    <SingleCoinDiv key={coin.id}>
                        <h1>{coin.name} <span>({coin.symbol})</span></h1>
                        <h2>Price: ${coin.price_usd}</h2>
                        <h2>Market Cap: ${coin.market_cap_usd}</h2>
                    </SingleCoinDiv>
                )
            }
        </AllCoinsDiv>
    );
}
