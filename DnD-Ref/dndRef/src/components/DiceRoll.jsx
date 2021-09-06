// Roll an individual dice, pass the dice size.

export default function DiceRoll(size,times){
    let rollTotal = 0;
    for (let i = 0; i < times; i++){
        rollTotal += (Math.ceil(Math.random() * size));
    }
    return  rollTotal;
};