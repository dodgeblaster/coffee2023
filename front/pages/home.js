import { summit } from '../lib/summit-components.js'

const firstRender = (state) => {
    return /*html*/ `
        <c-barista-item id='100'></c-barista-item>
    `
}

export default summit({
    name: 'c-page',
    render: firstRender
})
