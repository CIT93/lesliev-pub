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
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "FoodChoices", "Footprint", "Action"]
    //const headingTextArr = ["Name", "Footprint"]
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
      onUpdate(index, data);
    })
    return td;
  }

  const renderTblBody = data => {
    const tbody = document.createElement("tbody")
    data.forEach((obj, index) => {
      console.log(index)
      const tr = document.createElement("tr");
      const keys = ["first", "houseMembers", "houseSize", "foodChoices", "total"]
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

    const avgFootprint = fpAverage(data);

    const avgTextNode = document.createTextNode(`Average Carbon FP: ${avgFootprint.toFixed(2)}`);

    TBL.appendChild(document.createElement("br"));
    TBL.appendChild(avgTextNode);
    }  else {
      TBL.textContent = "Data Unavailable"
    }
    
  };


  export {renderTbl, renderTblHeading};
  
