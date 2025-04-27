import { useSelector } from "react-redux";
import { language } from "./constants";





const useHelper = () => {
    const languageSelect = useSelector((store) =>  store.config.lang); 

    const lS =  language[languageSelect];
    return lS;

}

export default useHelper