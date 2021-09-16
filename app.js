let navItems = [
    'app', 
    'blog', 
    'picture',
    'video',
    'aboutMe',
    'suprise'
]

let showNavItem = document.getElementById('app-name')
showNavItem.innerHTML = navItems[0]

const toggleDark = () => {
    document.body.style.color = '#FFFFFF'
    document.body.style.backgroundColor = '#8fd2f6'
    showNavItem.style.color = '#9C27B0'
}

const toggleLight = () => {
    document.body.style.color = '#000000'
    document.body.style.backgroundColor = '#FFFFFF'
    showNavItem.style.color = '#8fd2f6'
}

const rotateRight = () => {
    navItems.push(navItems.shift());
    return navItems;
}

const rotateLeft = () => {
    navItems.unshift(navItems.pop());
    return navItems
}


const toggleRight = () => {
    let carosel = rotateRight();
    showNavItem.innerHTML = carosel[0];
    carosel[0] === 'suprise' ?  toggleDark() : toggleLight()
}

const toggleLeft = () => {

    let carosel = rotateLeft();
    showNavItem.innerHTML = carosel[0];
    carosel[0] === 'suprise' ? toggleDark() : toggleLight()
}

document.getElementById('button-right').onclick = toggleRight;
document.getElementById('button-left').onclick = toggleLeft;

