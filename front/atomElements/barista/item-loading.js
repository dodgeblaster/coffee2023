import { summit } from '../../lib/summit-components.js'

const firstRender = (state) => {
    return /*html*/ `<s-text>Loading...</s-text>`
}

export default summit({
    name: 'c-barista-item-loading',
    listeners: [],
    render: firstRender
})
