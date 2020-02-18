/*var items = [];

function makeList() {
    items = document.getElementById("exampleFormControlTextarea1");
    items.forEach(function(item){
        alert(items);
    })
    return items;
}*/
/*var items = [];
function makeList(){
    var newitems = document.getElementById('exampleFormControlTextarea1');
    items.push(newitems.value);
    alert(items);
}*/
function grocery() {
    var list = document.getElementById('exampleFormControlTextarea1').value;
    var items = list.split(",").sort();
    document.getElementById("list").innerHTML = ('<li>'+items.join('</li><li>')+'</li>');
}