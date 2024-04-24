function num(e){
    document.getElementById('inp').value+=e
}
function clr(){
    document.getElementById('inp').value=" "
}
function cal(){
    var getvalue = document.getElementById('inp')
    getvalue.value=eval(getvalue.value)
}