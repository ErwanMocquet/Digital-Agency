import {useState} from "react";

const useCheckImage = (url) => {
    const [response, setResponse] = useState(false)
    let request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function () {
        if (request.status == 200) //if(statusText == OK)
        {
            setResponse(true)
        } else if (request.status == 404) {
            setResponse(false)
        }
    }
    return response
}

export default useCheckImage