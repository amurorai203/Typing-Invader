import wordsPickingAPI from './wordsPickingAPI';


function generateWords(numberToPick, conCatWith, wordLength) {
    var resultReturn = [];
    if (conCatWith == null){
        conCatWith = 1;
    }

    var query = "words=" + numberToPick 
    if (wordLength != null) {
        query = query + "&length=" + wordLength;
    }
    wordsPickingAPI.search(query)
    .then((res) => {
        console.log(res.data);
        if (conCatWith === 1 || conCatWith > (numberToPick / 2)){
            resultReturn = res.data;
        } else {

            let currentRow = 0;
            for (let i=0;i<res.data.length;i++){
                if (i % conCatWith == 0){
                    currentRow++;
                    resultReturn[currentRow] = ""
                }

                resultReturn[currentRow] = resultReturn[currentRow] + " " + res.data[i];
                
            }            
        }
        console.log(resultReturn);
    }
    )
    .catch((err) => console.log(err));

};
    
// generateWords(28, 4, 3);
// generateWords(28);
