import './App.css';
import Item from './Item';
function WinnerModal({className, winner, onClick}) {
    return (
        <div className={className} onClick={onClick}>
            <h1>THE WINNER</h1>
            <Item name={winner}/>
        </div>);
}

export default WinnerModal;
