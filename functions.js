// Creating names array
        function addAnimalName(){
        var y = document.getElementById("animalsInput");
        if (y.value == "") {
          document.getElementById("response").innerHTML = "Please enter the name."
        }

        else if (chekingNames(y.value, animals)) {
          document.getElementById("response").innerHTML = "This name already exists. Please enter another name.";
        }

        else 
          { animals.push(y.value);
          
          document.getElementById("response").innerHTML = 'Added the name  "' + y.value + '".';
          document.getElementById("checker").innerHTML ="Animals entered are: " + animals + ".";}
        }

// Cheking enter for repeatance
function chekingNames(name, arr)
      {   var answ = false;
            for (i = 0; i < arr.length; i++) 
            { 
            if (name == arr[i]) {answ = true; break}
            else {answ = false}
            }
          return answ;
      }

// Cleaning all names data function
function cleanAnimalTitles(argum)
        {argum.pop();
        document.getElementById("response").innerHTML = "Well done.";
        document.getElementById("checker").innerHTML ="Animals entered are: " + argum + ".";}

// Cleaning input form function
function cleanAnimalTitleForm() {
        var y = document.getElementById("animalsInput");
            y.value = "";}

// Array checker - for repeated elements
  function arrayChecker(arr)
  {
    var newArr = ["start"];
    for (var i = 0; i < arr.length; i++)
    { if (notIncluded(arr[i], newArr)) {newArr.push(arr[i])}}

    function notIncluded(element, arr1) 
    { var answer;
      for (var k = 0; k < arr1.length; k++)
          {if (element !== arr1[k]) 
            {answer = true}
          else {answer = false; break}  
      }
    return answer;
    }
  newArr.shift();
    return newArr;
    }
// end of arrayChecker






