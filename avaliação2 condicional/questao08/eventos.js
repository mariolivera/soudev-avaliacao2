let a = 12
let b = 114
let c = 89
    
    if(a>=b && a>=c && b>=c){
        console.log('A ordem é', a,b,c);
    }else if(a>=b && a>=c && c>=b){
        console.log('A ordem é',a,c,b);
    }else if(b>=a && b>=c && a>=c){
        console.log('A ordem é',b,a,c);
    }else if(b>=a && b>=c && c>=a){
        console.log('A ordem é',b,c,a);
    }else if(c>=a && c>=b && a>=b){
        console.log('A ordem é',c,a,b);
    }else if(c>=a && c>=b && b>=a){
        console.log('A ordem é',c,b,a)
    }