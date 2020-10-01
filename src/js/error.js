(() => {
    const location = document.location;
    if (!location.hash && location.pathname == '/') {
        const error = document.getElementById('error');
        error.insertAdjacentHTML('afterbegin', `<div slot="actions"></div>`);
    }
})();