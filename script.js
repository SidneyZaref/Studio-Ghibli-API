let data;
let selectedHoliday;
accessData();

let data1;
let selectedCovid;
accessCovid();






function accessData()
{
    const request = new XMLHttpRequest();

    request.open("GET", "https://date.nager.at/api/v3/PublicHolidays/2020/US", true);

    request.onload = function() {
        data = JSON.parse(this.response);

        if(request.status == 200)
        {
            console.log("Response OK!");

            data.forEach(
                holiday =>
                {
                    console.log(`Holiday: ${holiday.localName}`);
                    let option = document.createElement("option");
                    let text = document.createTextNode(holiday.localName);
                    option.appendChild(text);
                    document.querySelector("#holidayList").appendChild(option);
                }
            );
        }
        else{
            console.log(`Error occured: status: ${request.status}`);
        }

    };
    request.send();
}






function getHolidaySelected()
{
    let selectedHoliday = document.querySelector("#holidayList").selectedIndex;
    
        data.forEach(
            holiday =>
            {
            data[selectedHoliday].date
            }
        );
}






function accessCovid()
{
    const request = new XMLHttpRequest();

    request.open("GET", "https://api.covidtracking.com/v2/us/daily.json", true);

    request.onload = function() {   
        data1 = JSON.parse(this.response);

        if(request.status == 200)
        {
            console.log("Response OK!");

            data1.meta.field_definitions.forEach(
                covidRecord =>
                {
                    console.log(`Covid: ${covidRecord.name}`);
                    let option1 = document.createElement("option");
                    let text1 = document.createTextNode(covidRecord.name);
                    option1.appendChild(text1);
                    document.querySelector("#covidList").appendChild(option1);
                    console.log(covidRecord.name);
                }
            );
        }
        else{
            console.log(`Error occured: status: ${request.status}`);
        }
    };
    request.send();
}





function getCovidSelected()
{
    
    let selectedCovid = document.querySelector("#covidList").selectedIndex;
    
        data1.meta.field_definitions.forEach(
            covid =>
            {

            data1.meta.field_definitions[selectedCovid].name

            }
        );
}


function enterButton(){

    let selectedCovid = document.querySelector("#covidList").selectedIndex;

    if(selectedCovid)
    {
        console.log("Number of people: " + selectedCovid);
    }
    else
    {
        console.log("no data was found!");
    }
}