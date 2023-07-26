const carObejcet = {
  vahicle: "car",
  imgURL:
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  farePerKilo: 4,
  capacity: 4,
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cilldolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum",
};
const bikeObejcet = {
  vahicle: "Bike",
  imgURL:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  farePerKilo: 2,
  capacity: 2,
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cilldolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum",
};
const BusObejcet = {
  vahicle: "Buss",
  imgURL:
    "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1c3N8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
  farePerKilo: 3,
  capacity: 40,
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cilldolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum",
};
const cycleObejcet = {
  vahicle: "cycle",
  imgURL:
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  farePerKilo: 1,
  capacity: 2,
  description:
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cilldolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum",
};

const objectarry = [carObejcet, bikeObejcet, BusObejcet, cycleObejcet];

function objectDisply(object) {
  for (let i = 0; i < object.length; i++) {
    let objects = object[i];
    display(objects);
  }
}

function display(object) {
  const stringyfyObject = JSON.stringify(object);
  const cardElement = document.getElementById("main-card-section");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card w-9/12 mx-auto card-side bg-base-100 shadow-xl p-2 mb-3">
          <figure>
            <img
            src=${object.imgURL}
            alt="Movie" class="cover w-2/3 h-2/3 rounded-md"
          </figure>
          <div class="card-body">
            <h2 class="card-title">Transport Mood :${object.vahicle}</h2>
            <p class="">
             ${object.description}
            </p>
            <div class="flex justify-start mb-3">
              <p class="text-xl text-stone-800">Fare Per Kilo: ${object.farePerKilo}</p>
              <p class="text-xl text-stone-800">Capacity: ${object.capacity}</p>
            </div>

            <div class="card-actions justify-start">
              <label class="btn" for="my_modal_6" onclick='modalInformation(${stringyfyObject})' class="btn">open modal</label>

            </div>
          </div>
        </div> 
    `;
  cardElement.appendChild(div);
}

objectDisply(objectarry);

function modalInformation(object) {
  const stringyfyObject = JSON.stringify(object);
  const modalElement = document.getElementById("modal-data");
  modalElement.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
  
  
                <figure class="px-2 pt-2 h-64 w-96 mx-auto">
                  <img src=${object.imgURL}/>
                </figure>
                <div class="">
                  <h2 class="">Transport Mood :${object.vahicle}</h2>
                
                  <div class="mb-2">
                    <p id="farePerKilo">Fare Per Kilo: ${object.farePerKilo} </p>
                    <p id="capacity"> Capacity :${object.capacity}</p>

                  </div>
                  <div class="mb-2">
                    <h3>Fare: <span id="fare">00</span > </h3>
                    <h3>Text: <span id="text"></span></h3>
                    <h3>Total Cost: <span id="totalCost"></span> </h3>
                  </div>
                  <div class="mb-2">
                    <div class="mb-2 flex">
                        <input class="p-2 text-xl " type="number" name="" id="kilometers" placeholder="How many kilometers to go">
                        <input class="p-2 text-xl" type="number" name="" id="carQuentity" placeholder="how many cars" >
                    </div>
                   
                    <button class="btn btn-primary" id="fareCalculation" onclick='fareCalulation(${stringyfyObject})''>Fare Calculation</button>
                    <button class="btn btn-primary" id="bookNow">Buy Now</button>
                
                  </div>
        
                </div>
                <div class="flex justify-end">
                <label for="my_modal_6" class="btn">Close!</label>
              </div>
  
  `;

  modalElement.appendChild(div);
}

function fareCalulation(object) {
  const kilometers = document.getElementById("kilometers").value;
  const carQTY = document.getElementById("carQuentity").value;

  const fare = parseFloat(kilometers) * parseFloat(carQTY) * object.farePerKilo;
  document.getElementById("fare").innerText = fare;
  const text = (fare * 10) / 100;
  document.getElementById("text").innerText = text;
  const totalCost = text + fare;
  document.getElementById("totalCost").innerText = totalCost;
}
