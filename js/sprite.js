
// main的shop-menu上的
var main = document.querySelector('.main');
var shopMenu = main.children[0];
var shopMenuMain = shopMenu.children[1];
var rightContainer = shopMenuMain.children[1];
var asideNav = rightContainer.children[1];
var asideNavBackground = asideNav.querySelectorAll('.background');
for (var i = 0; i < asideNavBackground.length; i++) {
    tempX = -17 - 63 * (i % 4) + 'px';
    tempY = -16 - 72 * Math.floor(i / 4) + 'px';
    asideNavBackground[i].style.backgroundPosition = tempX + ' ' + tempY;
}

// footer上的
var footer = document.querySelector('.footer');
var modAdvantage = footer.children[0];
var modAdvantagePic = modAdvantage.querySelectorAll('.advantage-pic');
for (var i = 0; i < modAdvantagePic.length; i++) {
    tempX = -253 + 'px';
    tempY = -3 * (i + 1) - 49 * i + 'px';
    modAdvantagePic[i].style.backgroundPosition = tempX + ' ' + tempY;
}
