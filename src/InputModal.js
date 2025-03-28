import './App.css';
function InputModal({ className, userInputs, handleInputChange, shuffleTeams, startTournament, onClick }) {

    return (
        <div className={className} onClick={onClick}>
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
        </div>);
}

export default InputModal;
