import './App.css';
import Item from './Item';
function WinnerModal({winner, onClick}) {
    return (
        <div className="ModalContent" onClick={onClick}>
            <h1>THE WINNER</h1>
            <Item name={winner}/>
        </div>);
}

export default WinnerModal;
