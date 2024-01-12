document.addEventListener('DOMContentLoaded', () => {
    // gnb
    const depth01Links = document.querySelectorAll('.depth01 > li > a');

    depth01Links.forEach((depth01Link) => {
        const depth02s = document.querySelectorAll('.depth02');

        depth01Link.addEventListener('click', function () {
            if (depth01Link.nextElementSibling.classList.contains('active')) {
                depth01Link.nextElementSibling.classList.remove('active');
            } else {
                depth02s.forEach((depth02) => {
                    depth02.classList.remove('active');
                });
                depth01Link.nextElementSibling.classList.add('active');
            }
        });
    });

    document.addEventListener('mouseup', (e) => {
        let depth02Active = document.querySelector('.depth02.active');

        if (depth02Active !== null) {
            if (!depth02Active.contains(e.target)) {
                depth02Active.classList.remove('active');
            }
        }
    });

    window.addEventListener('scroll', () => {
        let currentScrollY = window.pageYOffset;
        const header = document.querySelector('header');
        let headerAct = true;
        let currentAct = false;

        currentScrollY > header.offsetTop ? (currentAct = true) : (currentAct = false);
        console.log(headerAct, '1');
        if (headerAct === currentAct) {
            if (currentAct) {
                header.classList.add('border');
                console.log('add');
                console.log(headerAct, '2');
            } else {
                header.classList.remove('border');
                console.log('remove');
                headerAct = true;
                console.log(headerAct);
            }
            console.log(headerAct, '3');
            headerAct = false;
        }
        console.log(headerAct, '4');
        console.log(currentAct, '5');
    });
});
