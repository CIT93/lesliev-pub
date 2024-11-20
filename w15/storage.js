
const saveLS = cfpData => {
    const serialzedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serialzedArr);
}

const getLS = () => {
    const retreivedArr = localStorage.getItem("cfp")
    if(retreivedArr !== null) {
        return JSON.parse(retreivedArr);
    } else {
        return [];
    }
}

const cfpData = getLS();

export{cfpData, saveLS, getLS};