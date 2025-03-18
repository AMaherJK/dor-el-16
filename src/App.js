import './App.css';
import Item from './Item';
import { useState } from "react";
function App() {
  const [bracketLHS, setBracketLHS] = useState([
    ["a", "b", "c", "d", "e", "f", "g", "h"],
    [null, null, null, null],
    [null, null],
    [null]
  ]);

  const [bracketRHS, setBracketRHS] = useState([
    ["i", "j", "k", "l", "m", "n", "o", "p"],
    [null, null, null, null],
    [null, null],
    [null]
  ]);


  const handleSelect = (round, match, side, name) => {
    if (!name) return; // Ignore clicks on empty slots

    if (side === "LHS") {
      setBracketLHS(prevBracket => {
        const updatedBracket = prevBracket.map(row => [...row]); // Create a deep copy
        updatedBracket[round + 1][match] = name; // Move winner to next round
        return updatedBracket;
      });
    } else {
      setBracketRHS(prevBracket => {
        const updatedBracket = prevBracket.map(row => [...row]); // Create a deep copy
        updatedBracket[round + 1][match] = name; // Move winner to next round
        return updatedBracket;
      });
    }
  }; return (
    <div className="App">
      <div className='GameContainer'>
        <div className='BracketContainer'>
          <div className='RO16ContainerB'>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][0]} onClick={() => handleSelect(0, 0, "LHS", bracketLHS[0][0])} />
                <Item name={bracketLHS[0][1]} onClick={() => handleSelect(0, 0, "LHS", bracketLHS[0][1])} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][2]} onClick={() => handleSelect(0, 1, "LHS", bracketLHS[0][2])} />
                <Item name={bracketLHS[0][3]} onClick={() => handleSelect(0, 1, "LHS", bracketLHS[0][3])} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][4]} onClick={() => handleSelect(0, 2, "LHS", bracketLHS[0][4])} />
                <Item name={bracketLHS[0][5]} onClick={() => handleSelect(0, 2, "LHS", bracketLHS[0][5])} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][6]} onClick={() => handleSelect(0, 3, "LHS", bracketLHS[0][6])} />
                <Item name={bracketLHS[0][7]} onClick={() => handleSelect(0, 3, "LHS", bracketLHS[0][7])} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>

          </div>
          <div className='RO8ContainerB'>
            <div className='RO8Bracket'>
              <div className='RO8ContainerS'>
                <Item name={bracketLHS[1][0]} onClick={() => handleSelect(1, 0, "LHS", bracketLHS[1][0])} />
                <Item name={bracketLHS[1][1]} onClick={() => handleSelect(1, 0, "LHS", bracketLHS[1][1])} />
              </div>
              <img src={require('./assets/brackets/Ro8-L-N.png')} alt='' />
            </div>
            <div className='RO8Bracket'>
              <div className='RO8ContainerS'>
                <Item name={bracketLHS[1][2]} onClick={() => handleSelect(1, 1, "LHS", bracketLHS[1][2])} />
                <Item name={bracketLHS[1][3]} onClick={() => handleSelect(1, 1, "LHS", bracketLHS[1][3])} />
              </div>
              <img src={require('./assets/brackets/Ro8-L-N.png')} alt='' />
            </div>

          </div>
          <div className='RO4Bracket'>
            <div className='RO4ContainerB'>
              <Item name={bracketLHS[2][0]} onClick={() => handleSelect(2, 0, "LHS", bracketLHS[2][0])} />
              <Item name={bracketLHS[2][1]} onClick={() => handleSelect(2, 0, "LHS", bracketLHS[2][1])} />
            </div>
            <img src={require('./assets/brackets/ro4-L-N.png')} alt='' />
          </div>

          <Item name={bracketLHS[3][0]} onClick={() => handleSelect(3, 0, "LHS", bracketLHS[3][0])} />
          <Item name={bracketRHS[3][0]} onClick={() => handleSelect(3, 0, "RHS", bracketRHS[3][0])} />

          <div className='RO4Bracket'>
            <img src={require('./assets/brackets/ro4-R-N.png')} alt='' />
            <div className='RO4ContainerB'>
              <Item name={bracketRHS[2][0]} onClick={() => handleSelect(2, 0, "RHS", bracketRHS[2][0])}/>
              <Item name={bracketRHS[2][1]} onClick={() => handleSelect(2, 0, "RHS", bracketRHS[2][1])}/>
            </div>
          </div>
          <div className='RO8ContainerB'>
            <div className='RO8Bracket'>
              <img src={require('./assets/brackets/Ro8-R-N.png')} alt='' />
              <div className='RO8ContainerS'>
                <Item name={bracketRHS[1][0]} onClick={() => handleSelect(1, 0, "RHS", bracketRHS[1][0])} />
                <Item name={bracketRHS[1][1]} onClick={() => handleSelect(1, 0, "RHS", bracketRHS[1][1])} />
              </div>
            </div>
            <div className='RO8Bracket'>
              <img src={require('./assets/brackets/Ro8-R-N.png')} alt='' />
              <div className='RO8ContainerS'>
                <Item name={bracketRHS[1][2]} onClick={() => handleSelect(1,1, "RHS", bracketRHS[1][2])} />
                <Item name={bracketRHS[1][3]} onClick={() => handleSelect(1,1, "RHS", bracketRHS[1][3])} />
              </div>
            </div>

          </div>
          <div className='RO16ContainerB'>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][0]} onClick={() => handleSelect(0, 0, "RHS", bracketRHS[0][0])} />
                <Item name={bracketRHS[0][1]} onClick={() => handleSelect(0, 0, "RHS", bracketRHS[0][1])} />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][2]} onClick={() => handleSelect(0, 1, "RHS", bracketRHS[0][2])} />
                <Item name={bracketRHS[0][3]} onClick={() => handleSelect(0, 1, "RHS", bracketRHS[0][3])} />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][4]} onClick={() => handleSelect(0, 2, "RHS", bracketRHS[0][4])} />
                <Item name={bracketRHS[0][5]} onClick={() => handleSelect(0, 2, "RHS", bracketRHS[0][5])} />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][6]} onClick={() => handleSelect(0, 3, "RHS", bracketRHS[0][6])} />
                <Item name={bracketRHS[0][7]} onClick={() => handleSelect(0, 3, "RHS", bracketRHS[0][7])} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
