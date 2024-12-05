import {FORM, TBL} from "./global.js"
import {saveLS} from "./storage.js"


const fpAverage = (data) => {
  if (data.length === 0) return 0;
  const total = data.reduce((sum, obj) => sum + (obj.total || 0), 0);
  return total/data.length;
};

const renderTblHeading = () => {
  //TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement ("thead");
    const tr = document.createElement ("tr");
    const headingTextArr = ["First", "Last", "Footprint Total", "Actions"]
    headingTextArr.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      console.log(tr)
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  }

  const onUpdate = (index, data) => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
  }
  
  const renderTblBtn = (obj, index, data) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', e => {
      onUpdate(index, data);
    })
    btnEdit.addEventListener('click', e => {
      FORM[1].value = obj.first;
      FORM[2].value = obj.last;
      FORM[3].value = obj.houseMembers;
      FORM[4].value = obj.houseSize;
      FORM[5].value = obj.foodChoices;
      FORM[6].value = obj.foodSource;
      FORM.waterConsump.value = obj.waterValue;
      FORM.both.checked = obj.both;
      FORM.purchases.value = obj.purchasesPts.toString();
      FORM.waste.value = obj.wastePts;
      FORM.glass.checked = obj.recycle.glass;
      FORM.plastic.checked = obj.recycle.plastic;
      FORM.paper.checked = obj.recycle.paper;
      FORM.aluminum.checked = obj.recycle.aluminum;
      FORM.steel.checked = obj.recycle.steel;
      FORM.food.checked = obj.recycle.food;
      FORM.vehicle.value = obj.vehiclePts;
      FORM.transport.value = obj.transportPts;
      FORM.flights.value = obj.flightsPts;
      onUpdate(index, data); 
    })
    return td;
  }

  const renderTblBody = data => {
    const tbody = document.createElement("tbody")
    data.forEach((obj, index) => {
      console.log(index)
      const tr = document.createElement("tr");
      const keys = ["first", "last", "total"]
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      })

  const td = renderTblBtn(obj, index, data);
  tr.appendChild(td);
  tbody.appendChild(tr);
 
   });
   return tbody
}

  const renderTbl = (data) => {
    TBL.innerHTML = "";
    if(data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
    insertRow(table, data);

    const avgFootprint = fpAverage(data);

     }
    
  };

  function insertRow(table, data) {
    const newRow = table.insertRow(); 
    const newCell = newRow.insertCell(0); 
    newCell.textContent = (`Average Carbon FP `);
    const avgCell = newRow.insertCell(1); 
    avgCell.textContent = fpAverage(data); 
    newCell.colSpan = 2;
  }



  export {renderTbl, renderTblHeading};
  
