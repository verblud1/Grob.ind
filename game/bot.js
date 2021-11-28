function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function bot(){
    arr = [cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8];
    shuffle(arr)

    if (arr[0].style.background !='red' && arr[0].style.background !='green'){
            arr[0].style.background='green';
            checkWin()
    }
    else{
        bot()
    }
}