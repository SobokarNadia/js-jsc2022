let userCard = (num) => {
    let card = {
        balance: 100,
        transitionLimit: 100,
        historyLogs: [],
        key: num,
    };
    let date = new Date();
    return{
        getCardOptions : function (){
            return {...card};
        },
        putCredits: function (amount){
            card.balance += amount;
            card.historyLogs.push({operationType: 'Recieved credits', credits: amount, operationTime: `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}, ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`})

            return {...card}
        },

        takeCredits: function (num){

            if (card.balance - num < 0 && num > card.transitionLimit){
                throw new Error('Its too much money');
            }else{
                card.balance -= num;
                card.historyLogs.push({operationType: 'Take credits', credits: num, operationTime: `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}, ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`});
            }
            return {...card};
        },
        setTransitionLimit: function (limit){
            card.transitionLimit = limit;
            card.historyLogs.push({operationType: 'Change transition limit', credits: limit, operationTime: `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}, ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`    })
            return {...card};
        },
        transferCredits: function (credits, card){
            let newAmount = credits * 0.5;
            if (card.balance - newAmount < 0 && newAmount > card.transitionLimit){
                throw new Error('Its too much money');
            }else{
                card.balance -= newAmount;
            }
            return {...card};
        }
    }
}
let card1 = userCard(3);
console.log(card1.getCardOptions());
console.log(card1.takeCredits(20));
console.log(card1.putCredits(20));

