const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragstart(event) {
    // event.target
    // console.log('drag start', event.target)
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    


}

function dragend() {
    // console.log('drag end', event.target)
    // event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
}

function dragover(enent) {
    event.preventDefault()

}
function dragenter(enent) {
    event.target.classList.add('hovered')

}
function dragleave(enent) {
    event.target.classList.remove('hovered')

}
function drop(enent) {
    event.target.append(item)
    event.target.classList.remove('hovered')


}
