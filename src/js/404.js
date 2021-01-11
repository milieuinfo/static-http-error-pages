(() => {
    const customize = ({title, text}) => {
        const error = document.getElementById('error');
        error.setAttribute('data-vl-title', title);
        error.insertAdjacentHTML('afterbegin', `
            <p slot="text">${text}</p>
            <div slot="actions"></div>
        `);
    }

    const location = document.location;
    const hostname = location.hostname;
    switch (hostname) {
        case 'ontwikkel.milieuinfo.be':
        case 'oefen.milieuinfo.be':
        case 'www.milieuinfo.be':
            if (location.pathname.startsWith('/seveso')) {
                customize({
                    title: 'Niet meer beschikbaar',
                    text: 'De internettoepassing voor de bepaling van de Seveso-status wordt niet langer ter beschikking gesteld. Informatie omtrent de Seveso-statusbepaling kan gevonden worden op <a href="https://omgeving.vlaanderen.be/bepalen-van-de-seveso-status" target="_blank">https://omgeving.vlaanderen.be/bepalen-van-de-seveso-status</a>.<br/><br/>Voor bijkomende vragen omtrent de Seveso-statusbepaling gelieve contact op te nemen met het Team Externe Veiligheid via <a href="mailto:seveso@vlaanderen.be">seveso@vlaanderen.be</a>.'
                });
            }
            break;
        default:
            break;
    }
})();