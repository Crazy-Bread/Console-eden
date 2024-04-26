function chan(obj){
    var r1 = Number(obj.a1.value) 
    var r2 = Number(obj.a2.value)
        
    if ((4 > r1 > 0) || (4 > r2 > 0) || (r1 != r2)){
        const z = document.images[r1].src
        document.images[r1].src = document.images[r2].src
        document.images[r2].src = z
    }

}
               