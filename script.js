document.addEventListener('DOMContentLoaded', function() {
    const details = document.querySelector('details');

    details.addEventListener('toggle', function() {
        if (this.open) {
            setTimeout(() => {
                this.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }, 50);
        }

    });
});