const TBL = document.getElementById("tab-data")

function renderTblHeading () {
  TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement ("thead");
    const tr = document.createElement ("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Action"]
    //const headingTextArr = ["Name", "Footprint"]
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
  
  function renderTblBtn(index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(e){
      console.log('Hello from delete button')
      console.log(e);

      data.splice(index, 1);
      renderTbl(data);
    })
    btnEdit.addEventListener('click', function(e){
      console.log('Hello from Edit button')
      console.log(e)
      const setData = data[index];
      const editName = ("edit name:", setData.name);
      const edit
    })
    return td;
  }

  function renderTblBody(data) {
    const tbody = document.createElement("tbody")
    data.forEach(function(obj, index){
      console.log(index)
      const tr = document.createElement("tr");
      for(const [key, value] of Object.entries(obj)) {
        if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS"){
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        }
      }
  const td = renderTblBtn(index, data);
  tr.appendChild(td);
  tbody.appendChild(tr);
 
   });
   return tbody
}

  function renderTbl(data) {
    const table = renderTblHeading();
    //const tbody = document.createElement("tbody");
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

  export {renderTbl, renderTblHeading};
  

  /*   data.forEach(function(obj) {
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
    ]; */

/*       const tdName = document.createElement("td");
      tdName.textContent = obj.firstName;
      const tdTotal = document.createElement("td");
      tdTotal.textContent = obj.cfpTotal;
      tr.appendChild(tdName);
      tr.appendChild(tdTotal); */