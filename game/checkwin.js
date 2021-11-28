var line1=[cell1,cell2,cell5,cell6]
var line2=[cell3,cell4,cell7,cell8]

function clear(){
    for(i=0;i<line1.length,line2.length;i++){
        line1[i].style.background='';
        line2[i].style.background='';
    }
}

function checkWin(){
    
    if(cell1.style.background=='red' && cell2.style.background=='red' && cell5.style.background=='red' && cell6.style.background=='red'){
        alert('ТЫ ПОБЕДИЛ! (ПЕРВОЙ СТРОКОЙ)');
        clear()
    }

    if(cell3.style.background=='red' && cell4.style.background=='red' && cell7.style.background=='red' && cell8.style.background=='red'){
        alert('ТЫ ПОБЕДИЛ! (ВТОРОЙ СТРОКОЙ)');
        clear()   
    }
    if(cell3.style.background !='' && cell4.style.background !='' && cell7.style.background !='' && cell8.style.background !=''
    && cell1.style.background !='' && cell2.style.background !='' && cell5.style.background !='' && cell6.style.background !=''){
        alert('НИЧЬЯ')
        clear()
    }
}