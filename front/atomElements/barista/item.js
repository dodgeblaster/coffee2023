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
    return listenKeys(baristaStore, [`itemState`], async (x, key) => {
        if (x.itemState === listStates.SUCCESS) {
            setHtml(
                ui,
                '#container',
                '<c-barista-item-success></c-barista-item-success>'
            )
        }

        if (x.itemState === listStates.LOADING) {
            setHtml(
                ui,
                '#container',
                '<c-barista-item-loading></c-barista-item-loading>'
            )
        }

        if (x.itemState === listStates.ERROR) {
            setHtml(
                ui,
                '#container',
                '<c-barista-item-error></c-barista-item-error>'
            )
        }
    })
}

const firstRender = (state) => {
    return /*html*/ `
        <s-div css='h-screen w-full flex justify-center items-center flex-col'>
            <s-div id='container' css='flex justify-center items-center flex-col'>
               <c-barista-item-loading></c-barista-item-loading>
            </s-div>
        </s-div>`
}

export default summit({
    name: 'c-barista-item',
    start: (state) => {
        const store = baristaStore.get()
        if (store.baristas[state.id]) {
            baristaStore.setKey('itemState', listStates.SUCCESS)
        } else {
            baristaStore.setKey('itemInFocus', state.id)
            baristaStore.setKey('itemState', listStates.LOADING)
        }

        return {}
    },
    listeners: [onStoreListLoadUpdate],
    render: firstRender
})
