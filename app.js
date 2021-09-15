let navItems = [
    'app', 
    'blog', 
    'shop',
    'note',
    'game',
    'sky'
]

let displayedApp = document.getElementById('app-name')
displayedApp.innerHTML = navItems[0]

const toggleDark = () => {
    document.body.style.color = '#FFFFFF'
    document.body.style.backgroundColor = '#8fd2f6'
    displayedApp.style.color = '#9C27B0'
}

const toggleLight = () => {
    document.body.style.color = '#000000'
    document.body.style.backgroundColor = '#FFFFFF'
    displayedApp.style.color = '#2ED9EB'
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
    displayedApp.innerHTML = carosel[0];
    carosel[0] === 'sky' ?  toggleDark() : toggleLight()
}

const toggleLeft = () => {

    let carosel = rotateLeft();
    displayedApp.innerHTML = carosel[0];
    carosel[0] === 'sky' ? toggleDark() : toggleLight()
}

document.getElementById('button-right').onclick = toggleRight;
document.getElementById('button-left').onclick = toggleLeft;

