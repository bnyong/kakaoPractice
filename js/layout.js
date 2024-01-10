document.addEventListener('DOMContentLoaded', () => {
    // gnb
    const depth01Links = document.querySelectorAll('.depth01-link');

    depth01Links.forEach((depth01Link) => {
        const depth02s = document.querySelectorAll('.depth02');

        depth01Link.addEventListener('mouseenter', function () {
            depth01Links.forEach((e) => {
                e.style.color = '#888';
            });
            depth01Link.style.color = '#000';
        });

        depth01Link.addEventListener('mouseleave', function () {
            depth01Links.forEach((e) => {
                e.style.color = '#000';
            });
        });

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
});
