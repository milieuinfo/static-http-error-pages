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
        case 'omgevingsloketinzage-ontwikkel.omgeving.vlaanderen.be':
        case 'omgevingsloketinzage2-ontwikkel.omgeving.vlaanderen.be':
        case 'omgevingsloketinzage-oefen.omgeving.vlaanderen.be':
        case 'omgevingsloketinzage2-oefen.omgeving.vlaanderen.be':
        case 'omgevingsloketinzage.omgeving.vlaanderen.be':
            customize({
                title: 'Tijdelijk toegangslimiet door drukte',
                text: 'Om de stabiliteit van het inzageloket te garanderen bij hoge bezoekersaantallen is een automatische veiligheidsmaatregel voorzien die het aantal gelijktijdige gebruikers beperkt.<br/><br/>Gelieve het project op een later tijdstip opnieuw te raadplegen.<br/><br/>Bedankt voor uw begrip.'
            });
            break;
        default:
            break;
    }
})();
