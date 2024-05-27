function powerTwo(y:number):boolean {
    if (y<=0) {
        return false
    }
    return(y&(y-1)) ===0
    
} 
console.log(powerTwo(32))
console.log(powerTwo(6))