const cfpData = getLS();

function saveLS(cfpData) {
    const serialzedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serialzedArr);
}

function getLS() {
    const retreivedArr = localStorage.getItem("cfp")
    if(retreivedArr !== null) {
        return JSON.parse(retreivedArr);
    } else {
        return [];
    }
}

export{cfpData, saveLS, getLS};