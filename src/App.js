import './App.css';
import Item from './Item';
import InputModal from './InputModal';
import WinnerModal from './WinnerModal';
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

  const handleSelect = (round, match, side, name) => {
    if (!name) return; // Ignore clicks on empty slots
    else {
      if (round <= 2) {
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
      }
      else {
        setWinner(name);
        setTimeout(() => {
          setIsModalOpen(true);
        }, 600); // reopen modal with time delay     
       }
    }
  };


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
    closeModal() // Close modal
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
      LHS: shuffledTeams.slice(0, 8),
      RHS: shuffledTeams.slice(8, 16),
    });
  };

  const closeModal=()=>{
    setIsModalOpen(false)
  }

  const [winners, setWinners] = useState([]); // Store selected winners dynamically
  const [losers, setLosers] = useState([]);   // Track all losers dynamically
  const [winner, setWinner] = useState(null);  // Keeps track of the final winner.

  const handleSelectWinner = (team, opponent) => {
    if (team && opponent) {
      setWinners((prevWinners) => [...prevWinners, team]);  // Add new winner
      setLosers((prevLosers) => {
        const updatedLosers = prevLosers.filter((loser) => loser !== team);  // Remove current winner from losers if it exists
        return [...updatedLosers, opponent];  // Add the new loser
      });
      console.log(winners)
    }
  };


  return (
    <div className="App">
      {isModalOpen && (
        <div className="Modal">
          {!winner ?
            <InputModal userInputs={userInputs} handleInputChange={handleInputChange} shuffleTeams={shuffleTeams} startTournament={startTournament} />
            : <WinnerModal winner={winner} onClick={closeModal}/>}
        </div>
      )}

      <div className='GameContainer'>
        <div className='BracketContainer'>
          <div className='RO16ContainerB'>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][0]} isLoser={losers.includes(bracketLHS[0][0])} onClick={() => { handleSelect(0, 0, "LHS", bracketLHS[0][0]); handleSelectWinner(bracketLHS[0][0], bracketLHS[0][1]) }} />
                <Item name={bracketLHS[0][1]} isLoser={losers.includes(bracketLHS[0][1])} onClick={() => { handleSelect(0, 0, "LHS", bracketLHS[0][1]); handleSelectWinner(bracketLHS[0][1], bracketLHS[0][0]) }} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][2]} isLoser={losers.includes(bracketLHS[0][2])} onClick={() => { handleSelect(0, 1, "LHS", bracketLHS[0][2]); handleSelectWinner(bracketLHS[0][2], bracketLHS[0][3]) }} />
                <Item name={bracketLHS[0][3]} isLoser={losers.includes(bracketLHS[0][3])} onClick={() => { handleSelect(0, 1, "LHS", bracketLHS[0][3]); handleSelectWinner(bracketLHS[0][3], bracketLHS[0][2]) }} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][4]} isLoser={losers.includes(bracketLHS[0][4])} onClick={() => { handleSelect(0, 2, "LHS", bracketLHS[0][4]); handleSelectWinner(bracketLHS[0][4], bracketLHS[0][5]) }} />
                <Item name={bracketLHS[0][5]} isLoser={losers.includes(bracketLHS[0][5])} onClick={() => { handleSelect(0, 2, "LHS", bracketLHS[0][5]); handleSelectWinner(bracketLHS[0][5], bracketLHS[0][4]) }} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>
            <div className='Ro16Bracket'>
              <div className='RO16ContainerS'>
                <Item name={bracketLHS[0][6]} isLoser={losers.includes(bracketLHS[0][6])} onClick={() => { handleSelect(0, 3, "LHS", bracketLHS[0][6]); handleSelectWinner(bracketLHS[0][6], bracketLHS[0][7]) }} />
                <Item name={bracketLHS[0][7]} isLoser={losers.includes(bracketLHS[0][7])} onClick={() => { handleSelect(0, 3, "LHS", bracketLHS[0][7]); handleSelectWinner(bracketLHS[0][7], bracketLHS[0][6]) }} />
              </div>
              <img src={require('./assets/brackets/ro16-L-N.png')} alt='' />
            </div>

          </div>
          <div className='RO8ContainerB'>
            <div className='RO8Bracket'>
              <div className='RO8ContainerS'>
                <Item name={bracketLHS[1][0]} isLoser={losers.includes(bracketLHS[1][0])} onClick={() => { handleSelect(1, 0, "LHS", bracketLHS[1][0]); handleSelectWinner(bracketLHS[1][0], bracketLHS[1][1]) }} />
                <Item name={bracketLHS[1][1]} isLoser={losers.includes(bracketLHS[1][1])} onClick={() => { handleSelect(1, 0, "LHS", bracketLHS[1][1]); handleSelectWinner(bracketLHS[1][1], bracketLHS[1][0]) }} />
              </div>
              <img src={require('./assets/brackets/Ro8-L-N.png')} alt='' />
            </div>
            <div className='RO8Bracket'>
              <div className='RO8ContainerS'>
                <Item name={bracketLHS[1][2]} isLoser={losers.includes(bracketLHS[1][2])} onClick={() => { handleSelect(1, 1, "LHS", bracketLHS[1][2]); handleSelectWinner(bracketLHS[1][2], bracketLHS[1][3]) }} />
                <Item name={bracketLHS[1][3]} isLoser={losers.includes(bracketLHS[1][3])} onClick={() => { handleSelect(1, 1, "LHS", bracketLHS[1][3]); handleSelectWinner(bracketLHS[1][3], bracketLHS[1][2]) }} />
              </div>
              <img src={require('./assets/brackets/Ro8-L-N.png')} alt='' />
            </div>

          </div>
          <div className='RO4Bracket'>
            <div className='RO4ContainerB'>
              <Item name={bracketLHS[2][0]} isLoser={losers.includes(bracketLHS[2][0])} onClick={() => { handleSelect(2, 0, "LHS", bracketLHS[2][0]); handleSelectWinner(bracketLHS[2][0], bracketLHS[2][1]) }} />
              <Item name={bracketLHS[2][1]} isLoser={losers.includes(bracketLHS[2][1])} onClick={() => { handleSelect(2, 0, "LHS", bracketLHS[2][1]); handleSelectWinner(bracketLHS[2][1], bracketLHS[2][0]) }} />
            </div>
            <img src={require('./assets/brackets/ro4-L-N.png')} alt='' />
          </div>

          <div className='finalContainer'>
            <Item name={winner} isLoser={false} />
            <div className='finalBracket'>
              <Item name={bracketLHS[3][0]} isLoser={losers.includes(bracketLHS[3][0])} onClick={() => { handleSelect(3, 0, "LHS", bracketLHS[3][0]); handleSelectWinner(bracketLHS[3][0], bracketRHS[3][0]) }} />
              <img src={require('./assets/brackets/final-N.png')} alt='' />
              <Item name={bracketRHS[3][0]} isLoser={losers.includes(bracketRHS[3][0])} onClick={() => { handleSelect(3, 0, "RHS", bracketRHS[3][0]); handleSelectWinner(bracketRHS[3][0], bracketLHS[3][0]) }} />
            </div>
          </div>

          <div className='RO4Bracket'>
            <img src={require('./assets/brackets/ro4-R-N.png')} alt='' />
            <div className='RO4ContainerB'>
              <Item name={bracketRHS[2][0]} isLoser={losers.includes(bracketRHS[2][0])} onClick={() => { handleSelect(2, 0, "RHS", bracketRHS[2][0]); handleSelectWinner(bracketRHS[2][0], bracketRHS[2][1]) }} />
              <Item name={bracketRHS[2][1]} isLoser={losers.includes(bracketRHS[2][1])} onClick={() => { handleSelect(2, 0, "RHS", bracketRHS[2][1]); handleSelectWinner(bracketRHS[2][1], bracketRHS[2][0]) }} />
            </div>
          </div>
          <div className='RO8ContainerB'>
            <div className='RO8Bracket'>
              <img src={require('./assets/brackets/Ro8-R-N.png')} alt='' />
              <div className='RO8ContainerS'>
                <Item name={bracketRHS[1][0]} isLoser={losers.includes(bracketRHS[1][0])} onClick={() => { handleSelect(1, 0, "RHS", bracketRHS[1][0]); handleSelectWinner(bracketRHS[1][0], bracketRHS[1][1]) }} />
                <Item name={bracketRHS[1][1]} isLoser={losers.includes(bracketRHS[1][1])} onClick={() => { handleSelect(1, 0, "RHS", bracketRHS[1][1]); handleSelectWinner(bracketRHS[1][1], bracketRHS[1][0]) }} />
              </div>
            </div>
            <div className='RO8Bracket'>
              <img src={require('./assets/brackets/Ro8-R-N.png')} alt='' />
              <div className='RO8ContainerS'>
                <Item name={bracketRHS[1][2]} isLoser={losers.includes(bracketRHS[1][2])} onClick={() => { handleSelect(1, 1, "RHS", bracketRHS[1][2]); handleSelectWinner(bracketRHS[1][2], bracketRHS[1][3]) }} />
                <Item name={bracketRHS[1][3]} isLoser={losers.includes(bracketRHS[1][3])} onClick={() => { handleSelect(1, 1, "RHS", bracketRHS[1][3]); handleSelectWinner(bracketRHS[1][3], bracketRHS[1][2]) }} />
              </div>
            </div>

          </div>
          <div className='RO16ContainerB'>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][0]} isLoser={losers.includes(bracketRHS[0][0])} onClick={() => { handleSelect(0, 0, "RHS", bracketRHS[0][0]); handleSelectWinner(bracketRHS[0][0], bracketRHS[0][1]) }} />
                <Item name={bracketRHS[0][1]} isLoser={losers.includes(bracketRHS[0][1])} onClick={() => { handleSelect(0, 0, "RHS", bracketRHS[0][1]); handleSelectWinner(bracketRHS[0][1], bracketRHS[0][0]) }} />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][2]} isLoser={losers.includes(bracketRHS[0][2])} onClick={() => { handleSelect(0, 1, "RHS", bracketRHS[0][2]); handleSelectWinner(bracketRHS[0][2], bracketRHS[0][3]) }} />
                <Item name={bracketRHS[0][3]} isLoser={losers.includes(bracketRHS[0][3])} onClick={() => { handleSelect(0, 1, "RHS", bracketRHS[0][3]); handleSelectWinner(bracketRHS[0][3], bracketRHS[0][2]) }} />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][4]} isLoser={losers.includes(bracketRHS[0][4])} onClick={() => { handleSelect(0, 2, "RHS", bracketRHS[0][4]); handleSelectWinner(bracketRHS[0][4], bracketRHS[0][5]) }} />
                <Item name={bracketRHS[0][5]} isLoser={losers.includes(bracketRHS[0][5])} onClick={() => { handleSelect(0, 2, "RHS", bracketRHS[0][5]); handleSelectWinner(bracketRHS[0][5], bracketRHS[0][4]) }} />
              </div>
            </div>
            <div className='Ro16Bracket'>
              <img src={require('./assets/brackets/ro16-R-N.png')} alt='' />
              <div className='RO16ContainerS'>
                <Item name={bracketRHS[0][6]} isLoser={losers.includes(bracketRHS[0][6])} onClick={() => { handleSelect(0, 3, "RHS", bracketRHS[0][6]); handleSelectWinner(bracketRHS[0][6], bracketRHS[0][7]) }} />
                <Item name={bracketRHS[0][7]} isLoser={losers.includes(bracketRHS[0][7])} onClick={() => { handleSelect(0, 3, "RHS", bracketRHS[0][7]); handleSelectWinner(bracketRHS[0][7], bracketRHS[0][6]) }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
