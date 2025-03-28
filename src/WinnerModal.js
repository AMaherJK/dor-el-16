import './App.css';
import Item from './Item';
function WinnerModal({className, winner, onClick,startTournament,closeModal}) {
    return (
        <div className={className} onClick={onClick}>
            <div className='winnerModalGap'>
            <h1>THE WINNER</h1>
            <div className="WinnerItem">
            <Item name={winner}/></div>
            <div className="ButtonContainer">
                <button className="btn" onClick={startTournament}>🔁 Start New Tournament</button>
                <button className="btn" onClick={closeModal}> 🇽 Close</button>
            </div>
            </div>
        </div>);
}

export default WinnerModal;
