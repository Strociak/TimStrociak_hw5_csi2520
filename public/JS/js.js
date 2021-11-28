
  function onButtonClick(){
    document.getElementById('textInput').className="show";
    document.getElementById('buttonInput').className="show";
  }


  var titles = [];
  var titleInput = document.getElementById("textInput");
  var messageBox = document.getElementById("comDisplay");
 

  function insert () {
  
  titles.push(titleInput.value);
  clearAndShow();
  }
  function clearAndShow ()
  {

  titleInput.value ="";
 
  
  messageBox.innerHTML = "Anonymous: ";
  
  messageBox.innerHTML += " " + titles.join("<br/>Anonymous:  ") + "<br/>";

  }





  function onButtonClick2(){
    document.getElementById('textInput2').className="show";
    document.getElementById('buttonInput2').className="show";
  }


  var titles2 = [];
  var titleInput2 = document.getElementById("textInput2");
  var messageBox2 = document.getElementById("comDisplay2");


  function insert2 () {
  
    titles2.push(titleInput2.value);
    clearAndShow2();
    }

  function clearAndShow2 ()
  {

  titleInput2.value ="";
 
  
  messageBox2.innerHTML = "Anonymous Reply: ";
  
  messageBox2.innerHTML += " " + titles2.join("<br/>Anonymous Reply:  ") + "<br/>";

  }







