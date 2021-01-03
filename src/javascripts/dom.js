

//Deletes every child from parent
function clearParent(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function appendToParent(parent,element) {
    parent.append(element)
}

function getMainContainer() {
    return document.querySelector('.container');
}

function getCounterDom() {
    return document.querySelector('.counter');
}

export {clearParent,appendToParent,getMainContainer,getCounterDom}