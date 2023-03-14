import { useEffect } from "react";

const Header = ({ handleNewGame, wins }) => {

    useEffect(() => (document.title = `${wins} wins`), [wins]);

    return (
        <header className="header">
            <h4>{wins} wins</h4>
            <h4>Memory Game</h4>
            <button onClick={handleNewGame}>New Game</button>
        </header> 
    )
}

export default Header;