const a = [4,3,1,2,3,1,5,1,6,3,4,3]

function count_duplicate(a){
    let counts = {}
    for(let i =0; i < a.length; i++){ 
        if (counts[a[i]]){
            counts[a[i]] += 1
        } else {
            counts[a[i]] = 1
        }
    }
    for (let prop in counts){
        if (counts[prop] < 2){
            delete counts[prop]
        }
    }
    console.log(counts)

}

count_duplicate(a)

