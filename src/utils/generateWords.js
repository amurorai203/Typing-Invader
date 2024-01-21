import React, { useEffect, useState } from "react";
import wordsPickingAPI from './wordsPickingAPI';
let resultReturn = [];

const GenerateWords = async (numberToPick, conCatWith, wordLength) => {

    // const [resultReturn, setResultReturn] = useState([]);

    if (conCatWith == null){
        conCatWith = 1;
    }

    var query = "words=" + numberToPick 
    if (wordLength != null) {
        query = query + "&length=" + wordLength;
    }
    await wordsPickingAPI.search(query)
    .then((res) => {
        // console.log(res.data);
        if (conCatWith === 1 || conCatWith > (numberToPick / 2)){
            resultReturn = res.data;
        } else {
            // let noOfReturn = Math.floor(numberToPick / conCatWith);
            // if (numberToPick /conCatWith > noOfReturn){
            //     noOfReturn++;
            // }
            // console.log("In loop ", noOfReturn);
            // let j = 0;
            // for (let i=0;i<res.data.length; i++){
            //     j = i % noOfReturn;
            //     console.log(i, "", j, "", i % noOfReturn)
            //     if (resultReturn[j] == null){
            //         resultReturn[j] = "";
            //     }
            //     resultReturn[j] = resultReturn[j] + " " + res.data[i];
            let currentRow = 0;
            for (let i=0;i<res.data.length;i++){
                if (i % conCatWith == 0){
                    currentRow++;
                    resultReturn[currentRow] = ""
                }

                resultReturn[currentRow] = resultReturn[currentRow] + " " + res.data[i];
                
            }
            
        }
        // console.log("Inside generateWords ", resultReturn);
        // setResultReturn(resultReturn);
        localStorage.setItem("WordList", JSON.stringify(resultReturn) );
        return resultReturn;
    }
    )
    .catch((err) => console.log(err));

};
    
//generateWords(26, 4, 3);
// generateWords(13);

export default GenerateWords;