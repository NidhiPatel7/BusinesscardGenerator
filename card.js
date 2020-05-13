function makeChang() 
{

    var sTarget = '#'+this.id + 'Output';

    var oTarget = document.querySelector(sTarget);
    oTarget.innerHTML = this.value;
}

//===main program
var oForm = document.querySelector('#form');
var aTextBox = oForm.children;
for (var i = 0; i < aTextBox.length; i++) 
{
    
    //var oTextInput = aTextBox[i].value;
    aTextBox[i].addEventListener('blur',makeChang);
}