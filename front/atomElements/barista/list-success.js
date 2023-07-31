import { summit } from '../../lib/summit-components.js'
import { listenKeys } from '../../lib/summit-store.js'
import { baristaStore, listStates } from './store.js'

/**
 * Listeners
 */

const setText = (ui, id, v) => (ui.querySelector(id).textContent = v)
const setAttr = (ui, id, att, v) => ui.querySelector(id).setAttribute(att, v)
const setHtml = (ui, id, v) => (ui.querySelector(id).innerHTML = v)

// const onStoreListLoadUpdate = (ui, state) => {
//     return listenKeys(baristaStore, [`listState`], async (x, key) => {
//         if (x.listState === listStates.SUCCESS) {
//             setHtml(ui, '#container', uiSuccess(x.baristas))
//         }
//     })
// }

/**
 * Render
 */

const firstRender = (state) => {
    const store = baristaStore.get()
    return /*html*/ `
        ${Object.keys(store.baristas)
            .map((k, i, list) => {
                const x = store.baristas[k]
                return /*html*/ `<s-div css='border-b border-zinc-200 p-4 flex items-center'>
                    <s-div css='h-10 w-10 rounded bg-zinc-800 mr-4'></s-div>
                    <s-div css='mr-4'>
                        <s-text>${x.name}</s-text>
                        <s-text css='text-zinc-400 mt-1 text-sm block'>${
                            x.email
                        }</s-text>
                    </s-div>
                    <s-icon size='24' color='zinc-700' type='success'></s-icon>
                </s-div>
                ${
                    list.length > i + 1
                        ? `<hr style='width: 80%; border: none; border-bottom: 1px solid #d3d3d3; '></hr>`
                        : ''
                }`
            })
            .join('')}`
}

export default summit({
    name: 'c-barista-list-success',
    listeners: [
        //onStoreListLoadUpdate
    ],
    render: firstRender
})
