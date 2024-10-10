# My Understanding on localStorage
- were using localStorage to store the data we put in the app
- it allows us to access storage 
- we have to string-ify objects to store it in local storage
- json is a way we exhcnage data and its easy for both people and machines to read
- json is a format that allows us to make it more accessible
- local storage has no exp time 
- local storage will be cleared if used in private tabs (incognito) when the last private tab is closed

## Challenge
- i remember from previous version of our code, render tbl used to be outisde of the event listener so thats possibly a place it could be at
- i only remember because for the longest time i had it commented it out without deleting it but it would get in my way 
- i would try adding the getLS probably inside the even listener
- having the render tbl outisde did end up working
- i got working code from trying the both of thse