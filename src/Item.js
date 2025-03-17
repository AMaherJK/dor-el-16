import './App.css';

function Item(props) {
    return (
        <div className='Item'>
            {props.name}
        </div>
    );
}

export default Item;