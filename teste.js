function calculo(vi, vf, dg){
    const arr = []
    let x = 0
 
    if(vi >= 0 && vf > vi){
        for(x = vi; x <= vf; x++){
            arr.push(x)
        } 
        index = arr.indexOf(dg)
        if(index !== -1){
            console.log(index)
        }else{
            for(let i = 0; i<arr.length;i++){
                x = arr[i]
                for(let num = 0; i<x.length;i++){
                    if(x[num] == dg){
                        console.log(dg)
                    }
                }
            } 
        }
    }
}

calculo(99, 100, 9)
calculo(0, 18, 9)
calculo(1, 100, 5)