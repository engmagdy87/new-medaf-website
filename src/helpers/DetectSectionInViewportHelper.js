import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from "../constants/Header"
import { isDeviceSmart } from "../helpers/DetectIsDeviceSmart"

const whatIsTheSectionAppearInViewport = () => {
    let fromTop = document.getElementById("app").scrollTop;
    const ids = document.getElementsByClassName("wrapper");
    let offsetFromTop = isDeviceSmart() ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT
    let currentActiveItem = ""
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i].id;
        const section = document.getElementById(id);
        if (
            section.offsetTop <= fromTop + offsetFromTop &&
            section.offsetTop + section.scrollHeight > fromTop
        ) currentActiveItem = section.id
    }
    return currentActiveItem
}


export default whatIsTheSectionAppearInViewport