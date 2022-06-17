//Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а ﻿цифры – на знак нижнего подчеркивания. 

const string = 'THISisstringwithNuMerICsymbols12334';

function rephraseString(str){
    let addArr = [];
    str = str.split('');
    str.forEach((strItem) => {
        if (!isNaN(strItem * 1)){
            addArr.push('_')
        } else if (strItem == strItem.toUpperCase()){
            addArr.push(strItem.toLowerCase())
        } else {
            addArr.push(strItem.toUpperCase())
        } 
    });
    return addArr.join('')
}
console.log(rephraseString(string));


