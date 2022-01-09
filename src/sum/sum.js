function sumReducer(carry, item) {return carry + item}

function sum(...args) {
    if(args.length > 1 && !this.nestedCall) {
        return args.reduce(sumReducer)
    }
    this.nestedCall = true;
    return function(...args2) {
        // Stop carying if not arguments passed
        if(args2.length) {
            return sum.apply(this, [...args, ...args2])
        } else {
            return args.reduce(sumReducer)
        }
    }
}


module.exports  = {
    sum
}