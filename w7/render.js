const TBL = document.getElementById("tab-data")

function renderTblHeading () {
  TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement ("thead");
    const tr = document.createElement ("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Action"]
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      console.log(tr)
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  }
   
  function renderTbl(data){
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");


  data.forEach(function(obj) {
    const tr = document.createElement ("tr");
    const tdName = document.createElement("td");
    tdName.textContent = obj.firstName;
    const tdTotal = document.createElement("td");
    tdTotal.textContent = obj.cfpTotal
    const tblArr = [
      obj.firstName,
      obj.houseS,
      obj.houseM, 
      obj.cfpTotal
    ];

    tblArr.forEach(function(text){
      const td = document.createElement("td")
      td.textContent = text;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
    
  })
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  tr.appendChild(td);
  tbody.appendChild(tr)
  table.appendChild(tbody);
  console.log(table)
  TBL.appendChild(table);
  document.getElementById('TBL').appendChild(table);
  
  }


  export {renderTbl, renderTblHeading};