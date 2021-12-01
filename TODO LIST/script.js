let ultasks= $('#ultasks')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inputnewtask=$('#inputnewvehicle')
let btnCleanup= $('#btnCleanup')



btnAdd.click(() => {
    let listitem= $('<li>',{
        'class': 'list-group-item',
        text: inputnewtask.val()
    })
  listitem.click(()=>{
    listitem.toggleClass('done')
   })
    ultasks.append(listitem)
    inputnewtask.val("")
})

function cleardone(){
  $('#ultasks .done').appendTo(ultasks);
}

btnClear.click(() => inputnewtask.val(""))
btnCleanup.click(cleardone)

