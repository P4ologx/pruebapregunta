const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que no, muy linda tu mi amor, siempre pensando en que tu novio no gaste mucho dinero. Te amo mucho <3')
});

const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    yesBtn.style.setProperty('top',randomY+'%');
    yesBtn.style.setProperty('left',randomX+'%');
    yesBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})