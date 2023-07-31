import { summit } from '../../lib/summit-components.js'
import { listenKeys } from '../../lib/summit-store.js'
import { baristaStore, listStates } from './store.js'

/**
 * Listeners
 */

const setText = (ui, id, v) => (ui.querySelector(id).textContent = v)
const setAttr = (ui, id, att, v) => ui.querySelector(id).setAttribute(att, v)
const setHtml = (ui, id, v) => (ui.querySelector(id).innerHTML = v)

const onStoreListLoadUpdate = (ui, state) => {
    return listenKeys(baristaStore, [`listState`], async (x, key) => {
        if (x.listState === listStates.SUCCESS) {
            setHtml(
                ui,
                '#container',
                '<c-barista-list-success></c-barista-list-success>'
            )
        }

        if (x.listState === listStates.LOADING) {
            setHtml(
                ui,
                '#container',
                '<c-barista-list-loading></c-barista-list-loading>'
            )
        }

        if (x.listState === listStates.ERROR) {
            setHtml(
                ui,
                '#container',
                '<c-barista-list-error></c-barista-list-error>'
            )
        }
    })
}

const firstRender = (state) => {
    return /*html*/ `
        <s-div css='h-screen w-full flex justify-center items-center flex-col'>
            <s-div id='container' css='flex justify-center items-center flex-col'>
               <c-barista-list-loading></c-barista-list-loading>
            </s-div>
        </s-div>`
}

export default summit({
    name: 'c-barista-list',
    start: () => {
        baristaStore.setKey('listState', listStates.LOADING)
        return {}
    },
    listeners: [onStoreListLoadUpdate],
    render: firstRender
})
