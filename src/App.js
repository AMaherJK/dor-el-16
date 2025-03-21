import './App.css';
import Item from './Item';
import { useState } from "react";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open

  const [bracketLHS, setBracketLHS] = useState([
    ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7", "Team 8"],
    [null, null, null, null],
    [null, null],
    [null]
  ]);

  const [bracketRHS, setBracketRHS] = useState([
    ["Team 9", "Team 10", "Team 11", "Team 12", "Team 13", "Team 14", "Team 15", "Team 16"],
    [null, null, null, null],
    [null, null],
    [null]
  ]);

  const [userInputs, setUserInputs] = useState({
    LHS: Array(8).fill(null).map((_, i) => `Team ${i + 1}`), // "Team 1" to "Team 8"
    RHS: Array(8).fill(null).map((_, i) => `Team ${i + 9}`), // "Team 9" to "Team 16"
  });

  const handleInputChange = (side, index, value) => {
    setUserInputs((prev) => ({
      ...prev,
      [side]: prev[side].map((item, i) => (i === index ? value : item)),
    }));
  };
  const startTournament = () => {
    setBracketLHS((prev) => {
      let newBracket = [...prev];
      newBracket[0] = [...userInputs.LHS]; // Set Round of 16 with user input
      return newBracket;
    });

    setBracketRHS((prev) => {
      let newBracket = [...prev];
      newBracket[0] = [...userInputs.RHS]; // Set Round of 16 with user input
      return newBracket;
    });

    setIsModalOpen(false); // Close modal
  };
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
  }; 

const shuffleTeams = () => {
  const allTeams = [...userInputs.LHS, ...userInputs.RHS]; // Merge both sides
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledTeams = shuffleArray(allTeams); // Shuffle all 16 teams
  setUserInputs({
    LHS: shuffledTeams.slice(0, 8), // First 8 go to LHS
    RHS: shuffledTeams.slice(8, 16), // Last 8 go to RHS
  });
};
  
  return (
    <div className="App">
      {isModalOpen && (
        <div className="Modal">
          <div className="ModalContent">
            <h1>Enter Contestants</h1>
            <div className="InputContainer">
              <div className="LHSInputs">
                <h3>Left Bracket</h3>
                {userInputs.LHS.map((name, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Player ${i + 1}`}
                    value={name}
                    onChange={(e) => handleInputChange("LHS", i, e.target.value)}
                  />
                ))}
              </div>
              <div className="RHSInputs">
                <h3>Right Bracket</h3>
                {userInputs.RHS.map((name, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Player ${i + 9}`}
                    value={name}
                    onChange={(e) => handleInputChange("RHS", i, e.target.value)}
                  />
                ))}
              </div>
            </div>
            <div className="ButtonContainer">
            <button className="btn" onClick={startTournament}>🚀 Start Tournament</button>
              <button className="btn" onClick={shuffleTeams}>🔀 Shuffle</button>
            </div>
          </div>
        </div>
      )}

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
              <Item name={bracketRHS[2][0]} onClick={() => handleSelect(2, 0, "RHS", bracketRHS[2][0])} />
              <Item name={bracketRHS[2][1]} onClick={() => handleSelect(2, 0, "RHS", bracketRHS[2][1])} />
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
                <Item name={bracketRHS[1][2]} onClick={() => handleSelect(1, 1, "RHS", bracketRHS[1][2])} />
                <Item name={bracketRHS[1][3]} onClick={() => handleSelect(1, 1, "RHS", bracketRHS[1][3])} />
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
