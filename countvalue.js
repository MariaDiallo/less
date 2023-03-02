function Countvalue(table){
    var sum=0;
    for(let i=0; i<table.length; i++){
        if (table[i]==true) {
            sum=sum+1;
        }
    }
    return sum;
}