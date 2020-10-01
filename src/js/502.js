(() => {
    const customize = ({title, text}) => {
        const error = document.getElementById('error');
        error.setAttribute('data-vl-title', title);
        error.insertAdjacentHTML('afterbegin', `
            <p slot="text">${text}</p>
            <div slot="actions"></div>
        `);
    }

    const hostname = document.location.hostname;
    switch (hostname) {
        case 'omgevingsloket.omgeving.vlaanderen.be':
        case 'omgevingsloket-oefen.omgeving.vlaanderen.be':
        case 'omgevingsloket2-oefen.omgeving.vlaanderen.be':
        case 'omgevingsloket-ontwikkel.omgeving.vlaanderen.be':
        case 'localhost':
            customize({
                title: 'Onderhoudswerkzaamheden',
                text: 'Sorry, het omgevings-/publiek loket is niet beschikbaar wegens onderhoudswerkzaamheden. Voor meer info, bezoek <a href="https://www.omgevingsloketvlaanderen.be" target="_blank">https://www.omgevingsloketvlaanderen.be</a> en lees blokje "status loket". Klik op die pagina rechtsboven op "hulp nodig" voor contactgegevens.<br/><br/>We doen er alles aan om het omgevingsloket en het publiek loket zo snel mogelijk terug ter beschikking te hebben.' 
            });
            break;
        default:
            break;
    }
})();