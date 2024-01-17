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

    let headerAct = true;
    window.addEventListener('scroll', () => {
        let currentScrollY = window.pageYOffset;
        const header = document.querySelector('header');
        let currentAct = 0;

        currentScrollY > header.offsetTop ? (currentAct = true) : (currentAct = false);
        if (headerAct === currentAct) {
            if (currentAct) {
                header.classList.add('border');
                headerAct = false;
            } else {
                header.classList.remove('border');
                headerAct = true;
            }
        }
    });

    // sitemap icon, extra icon 추가
    const linkIcons = document.querySelectorAll('.link-icon ul li a');

    linkIcons.forEach((linkIcon) => {
        let icon =
            '<svg data-v-c1d21be8="" data-v-2bc73610="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9" class="ico_outlink"><g data-v-c1d21be8="" fill="none" fill-rule="evenodd"><path data-v-c1d21be8="" d="M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638" transform="translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)"></path></g></svg>';

        if (!linkIcon.classList.contains('icon-none')) {
            linkIcon.insertAdjacentHTML('beforeend', icon);
        }
    });

    // 약관 리스트 노출
    const conditions = document.querySelectorAll('.conditions div button[data-condition="button"]');

    conditions.forEach((condition) => {
        const conditionLinks = document.querySelectorAll('.extra .conditions .link-icon');

        condition.addEventListener('click', () => {
            if (condition.nextElementSibling.classList.contains('active')) {
                condition.nextElementSibling.classList.remove('active');
                condition.classList.remove('on');
            } else {
                conditionLinks.forEach((conditionLink) => {
                    conditionLink.classList.remove('active');
                    conditions.forEach((e) => {
                        e.classList.remove('on');
                    });
                });
                condition.nextElementSibling.classList.add('active');
                condition.classList.add('on');
            }
        });
    });

    // 관련사이트 노출
    const relationBtn = document.querySelector('.relation .relation-site');

    relationBtn.addEventListener('click', () => {
        if (relationBtn.dataset.relation == 'close') {
            relationBtn.setAttribute('data-relation', 'open');
            relationBtn.nextElementSibling.classList.add('active');
        } else {
            relationBtn.setAttribute('data-relation', 'close');
            relationBtn.nextElementSibling.classList.remove('active');
        }
    });

    // search 클릭 시 검색창 노출
    const searchBtn = document.querySelector('.util .btn-group .search');
    const closeBtn = document.querySelector('.search-header .close');
    const headerOpen = document.querySelector('header');
    const searchContainer = document.querySelector('.search-container');
    const searchContainerWrap = searchContainer.querySelector('.container-wrap');
    const sectionFirst = document.querySelector('main section:first-child');

    searchContainerWrap.style.top = `-${searchContainerWrap.offsetHeight}px`;

    searchBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
        headerOpen.classList.remove('active');
        searchContainer.classList.add('active');
        searchContainerWrap.style.top = `0px`;
        sectionFirst.style.paddingTop = `${searchContainerWrap.offsetHeight}px`;
        document.querySelector('body').style.overflowY = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        headerOpen.classList.add('active');
        searchContainer.classList.remove('active');
        searchContainerWrap.style.top = `-${searchContainerWrap.offsetHeight}px`;
        sectionFirst.style.paddingTop = `92px`;
        document.querySelector('body').style.overflowY = 'scroll';
    });
});
