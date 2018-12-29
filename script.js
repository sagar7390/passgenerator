var pass="qwertyuiopasdfghjklzxcvbnm,./1234567890";
var temppas="";
var i;
function find(ppplength)
{
    temppas="";
    for(i=0;i<ppplength;i++){
        temppas+=pass.charAt(Math.floor(Math.random()*pass.length));
}
    return temppas;
}
function generatepass(newlength)
{
    document.passwordgen.outputbox.value=find(newlength);
}