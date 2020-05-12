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

export default isDeviceSmart