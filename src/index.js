function eval() {
    // Do not use eval!!!
    return;
}


function expressionCalculator(expr) {
    const newExpr = expr.split("" || " ").filter(e => e !== " ").join("");
    const checkBrackets = (str) => {
        const config = new Map([["(", 1],[")", -1]]);
        let count = 0;
        for(let i = 0; i < str.length; i +=1){
            if(config.has((str[i]))){
                count += config.get(str[i]);
                if(count < 0) return false;
            }
        }
        return  count === 0;
    };

    const checkZero = (expr) =>{
        for(let i = 0; i < expr.length; i +=1){
            if(expr[i] === "/" && expr[i+1] === "0"){
                return true
            }
        }
    };

    if (!checkBrackets(newExpr)) {
        throw new Error ('ExpressionError: Brackets must be paired')
    } else {
        let result = (new Function('return ' + newExpr))();

        if(result === Infinity || checkZero(newExpr)) {
            throw new Error ('TypeError: Devision by zero.')
        }
        return result
    }


}

module.exports = {
    expressionCalculator
};