import React, {useState} from 'react';
import './App.css';

function Display(props) {
    return (
        <div>Reward Points: {props.message}</div>
    );
}

function App() {
    const [amount,setAmount] = useState(0);
    const [rewardPoints,setRewardPoints] = useState(0);
    const onReset = () => {
        setAmount(0);
        setRewardPoints(0);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setRewardPoints(0);
        // debugger;
        if (amount>=100){
            setRewardPoints((x) => x = ((amount-100) * 2) + 50);
        }
        if (amount>50 && amount <= 100){
            let points = rewardPoints + (amount - 50)
            setRewardPoints(points);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount Spent: &nbsp;
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
                &nbsp;&nbsp;
                <button type="button" onClick={onReset} className="btn">Reset</button>
            </form>
            <br />
            <br />
            <Display message={rewardPoints}/>
        </div>
    );
}

export default App;
