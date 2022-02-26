
const history_api = 'https://api.spacexdata.com/latest/history';
const payload_api = 'https://api.spacexdata.com/latest/payloads';

var hist = document.getElementById('history');
var payload = document.getElementById('payload');

async function getHistoryApi(url) {
    console.log("Calling fetch");
    const response = await fetch(url,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
    });
    console.log("Conv to json");
    var data = await response.json();
    // Storing data in form of JSON
    // var data;
    // if(response.ok){
    //     data = await response.json();
    // }
    // else{
    //     console.log("Response Failed")
    // }
    console.log(data);
    console.log("data is as above");
    showHistory(data);
};


async function getPayloadApi(url) {
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    // if(response.ok){
    //    // var data = await response.json();
    // }
    // else{
    //     console.log("Response Failed")
    // }
    console.log(data);
    showPayload(data);
};


hist.addEventListener("click", function(){
    console.log("Show history");
    getHistoryApi(history_api)

});

payload.addEventListener("click", function(){
    console.log("Show Payload");
    getPayloadApi(payload_api)
});


function showHistory(data) {
    let tab = 
        `<tr>
          <th>ID</th>
          <th>Title</th>
          <th>Date</th>
          <th>Event Date Unix</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.id} </td>
    <td>${r.title}</td>
    <td>${r.event_date_utc}</td> 
    <td>${r.event_date_unix}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("table").innerHTML = tab;
};


function showPayload(data) {
    let tab = 
        `<tr>
          <th>ID</th>
          <th>Reused</th>
          <th>Customer</th>
          <th>Nationality</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.payload_id} </td>
    <td>${r.reused}</td>
    <td>${r.customer}</td> 
    <td>${r.nationality}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("table").innerHTML = tab;
};