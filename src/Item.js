import './App.css';

function Item({ name, onClick, isLoser}) {
    return (
        <div className={`Item ${isLoser ? "loser" : ""}`} onClick={onClick} >
            {name}
        </div>
    );
}

export default Item;
