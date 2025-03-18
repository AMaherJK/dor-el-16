import './App.css';

function Item({ name, onClick }) {
    return (
        <div className='Item' onClick={onClick} >
            {name}
        </div>
    );
}

export default Item;
