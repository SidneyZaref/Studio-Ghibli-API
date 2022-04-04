
let data;
accessData();

function accessData()
{
    const request = new XMLHttpRequest();

    request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

    request.onload = function() {
        data = JSON.parse(this.response); //this refers to the XmlHttpRequest

        if(request.status == 200) // this is requesting access to the port with the link on it and then once it is open you can do stuff on it
        {
            //if we are inside this if statement we successfuly got our information back
            console.log("Response OK!");
            //console.log(data[4].description);

            
            //prints all titles and descriptions to the console
            data.forEach(
                movie =>
                {
                    console.log(`Movie: ${movie.title}, Desc: ${movie.description}`);
                }
            );
        }
        else
        {
            console.log(`Error occured: status: ${request.status}`);
        }
    };

    request.send(); //what acually transmits this "stuff" across the network
    console.log("Hello There!");
}








// let student = {
//     "username" : "Jane Smith", 
//     "age" : 20, 
//     "GPA" : 3.34, 
//     "onProbation" : false, 
//     "schedule" : [
//         {
// //could put array list here
//             "name" : "IST 140", 
//             "startTime" : "10 AM"
//         }, 
//         {
//             "name" : "IST 242", 
//             "startTime" : "11 AM"
//         }, 
//             "No class at this time", 
//             false
        
//     ]
// };






// let names = ['Fred', 'Pete', 'Janet', 'Bob'];

// // for(let i = 0; i < names.length; i++)
// // {
// //     console.log(`Hi there, ${names[i]}`);
// // }

// names.forEach( name =>
//     {
//         console.log(`Hi there, ${name}`);
//     }

// )





console.log('Hello from script.js');
populateCarList();

function getItemSelected()
{
    let selectedItem = document.querySelector("#carList").selectedIndex;
    console.log(selectedItem);
}


function populateCarList()
{
    let car1option = document.createElement("option");
    let car1text = document.createTextNode("Honda");
    car1option.appendChild(car1text);
    document.querySelector("#carList").appendChild(car1option);

    let car2option = document.createElement("option");
    let car2text = document.createTextNode("Ford");
    car2option.appendChild(car2text);
    document.querySelector("#carList").appendChild(car2option);
}

//method to say everytime you clikc the button it adds "Say Hello"
function addGreeting()
{
    let newElt = document.createElement("p");
    let textNode = document.createTextNode("Hello there!");
    newElt.appendChild(textNode);

    document.querySelector("#main").appendChild(newElt);
}

// //clear method
// function clearGreetings()
// {
//     document.querySelector("#main").innerHTML = "";
// }

// function testForPickles()
// {
//     let hasPickles = document.querySelector("#pickles").checked;

//     if(hasPickles)
//     {
//         console.log("Yup -- pickles");
//     }else
//     {
//         console.log("Sorry -- no pickles!");
//     }
// }

// function sayHello()
// {
//     console.log('Hello from my sayHello() method.');

//     let outputfield = document.querySelector("#outputfield");
//     let name = document.querySelector("#nameBox").value;

//     //let outputaddress = document.querySelector("#nameBox");
//     //let address = document.querySelector("#addressBox").value;

//     //let outputphone = document.querySelector("#phoneNumber");
//     //let phonenumber = document.querySelector("#phoneNumber").value;

//     //outputfield.innerHTML = "Hello there, " + name + " !";

//     outputfield.innerHTML = `Hello there, ${name}!`;
//     //outputaddress.innerHTML = `Address, ${address}`;
//    // outputphone.innerHTML = `Phone Number, ${phonenumber}`;
    
//}