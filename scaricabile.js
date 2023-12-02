// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// Declaration and empty assignment of the final object where the results will be inserted

const finalObject = {
  result: [], // insertions that match the required job position and geographic location.
  count: 0, // number of insertions found
}

// Creation of a function that searches by title and location in the array of objects "jobs" 
// and inserts the result into the final object.
// Use of '.toLowerCase' to make the search case-insensitive.

function searchingAlgoritm (title, location) {

  // Initializing the keys of the 'finalObject' to an empty value every time the function is called.
  finalObject.result = [];
  finalObject.count = 0;

  for (let i = 0; i < jobs.length; i++) {
    let JobsElement = jobs[i];
    if ((JobsElement.title.toLowerCase().includes(title.toLowerCase())) 
    && (JobsElement.location.toLowerCase().includes(location.toLowerCase()))) {
      finalObject.result.push(JobsElement);
      finalObject.count += 1;
    }
  }
}

// Creating function that create the dynamic table of the results

function dynamicTable (resultObject) {

  // Check if there is a table yet
  let myTableContainer = document.getElementById("tableContainer");
  if (myTableContainer) {
    document.body.removeChild(myTableContainer);
  }

  let table = document.createElement("table");
  let tHead = table.createTHead().insertRow();
  tHead.insertCell().textContent = "TITLE"
  tHead.insertCell().textContent = "LOCATION"
  let tBody = table.createTBody();
  for (let i = 0; i < resultObject.count; i++) {
    let row = tBody.insertRow(i);
    row.insertCell().textContent = resultObject.result[i].title;
    row.insertCell().textContent = resultObject.result[i].location;
  }

  let containerOfTable = document.createElement("div");
  containerOfTable.id = "tableContainer";

  document.body.appendChild(containerOfTable);
  document.getElementById("tableContainer").appendChild(table);
}

// Declaration and empty assignment of two variables where what the user writes in the inputs will be inserted

let myTitle = "";
let myLocation = "";

// Setting up the listener on the user's click after they have entered words in the inputs.

document.getElementById("searchButton").addEventListener("click", () => {
  myTitle = document.getElementById("title").value;
  myLocation = document.getElementById("location").value;
  if (/\d/.test(myTitle) || /[^\w\s]/.test(myTitle) || /\d/.test(myLocation) || /[^\w\s]/.test(myLocation)) {
    return alert("Hai inserito una cifra o un carattere speciale");
  } 

  searchingAlgoritm(myTitle, myLocation);
  dynamicTable(finalObject);
})