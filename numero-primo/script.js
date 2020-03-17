let fatorial = 1;
let n = 5;
function calcFatorial(n){
    
    for(let i = 1; i <= n; i++){
        fatorial = fatorial * i;
    }
    
    return fatorial;   
}
