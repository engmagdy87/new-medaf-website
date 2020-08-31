const isDeviceSmart = () => {
    const phone = window.matchMedia('(max-width:575px)');
    const landscapePhone = window.matchMedia(
        '(min-width:576px) and (max-width: 767px)'
    );
    const tablet = window.matchMedia(
        '(min-width:768px) and (max-width: 991px)'
    );

    return phone.matches || landscapePhone.matches || tablet.matches
}

const isIPad = () => {
    const ipad = window.matchMedia(
        '(max-width:768px) and (max-height: 1024px)'
    );

    return ipad.matches
}

const isIPadPro = () => {
    const ipadPro = window.matchMedia(
        '(max-width:1024px) and (max-height: 1366px)'
    );

    return ipadPro.matches
}

export { isDeviceSmart, isIPad, isIPadPro }