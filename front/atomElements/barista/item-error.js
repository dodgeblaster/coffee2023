import { summit } from '../../lib/summit-components.js'

const firstRender = (state) => {
    return /*html*/ `<c-message
        active='true'
        type='error'
        id='message'>
        There was an issue
    </c-message>`
}

export default summit({
    name: 'c-barista-item-error',
    listeners: [],
    render: firstRender
})
