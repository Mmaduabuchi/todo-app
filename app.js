//target the submit btn
var submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function(){
    //get the user input value
    var userInput = document.getElementById("userInput").value;
    //clear the text box
    document.getElementById("userInput").value = "";
    //check if data exists
    if (localStorage.getItem("data") !== null) {
        var getData = localStorage.getItem("data");
        var DataAsArray = JSON.parse(getData);
        DataAsArray.push(userInput);
        var DataAsString = JSON.stringify(DataAsArray);
        localStorage.setItem("data", DataAsString);
    }else{
        var arrayToStoreData = [];
        arrayToStoreData.push(userInput);
        var data = JSON.stringify(arrayToStoreData)
        localStorage.setItem("data", data)
    }
    location.reload();
});
var fetchData = localStorage.getItem("data");
var rawData = JSON.parse(fetchData);
//console.log(rawData);
rawData.forEach( (data) => {
    var CreateNewElement = document.createElement("h3");
    var createElementContent = document.createTextNode(data);
    CreateNewElement.appendChild(createElementContent);
    //target where to display user data
    var DisplayUserData = document.querySelector(".userData");
    DisplayUserData.appendChild(CreateNewElement);
});