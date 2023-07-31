import { summit } from '../../lib/summit-components.js'
import { listenKeys } from '../../lib/summit-store.js'
import { loginStore, states } from './store.js'

/**
 * Listeners
 */

const setText = (ui, id, v) => (ui.querySelector(id).textContent = v)
const setAttr = (ui, id, att, v) => ui.querySelector(id).setAttribute(att, v)

const onStoreSubmittingUpdate = (ui, state) => {
    return listenKeys(loginStore, [`ui.submitting`], async (x, key) => {
        if (x.ui.submitting === true) {
            setAttr(ui, '#loginbutton', 'text', 'Logging in...')
            setAttr(ui, '#username', 'submitting', 'true')
            setAttr(ui, '#password', 'submitting', 'true')
        } else {
            setAttr(ui, '#loginbutton', 'text', 'Login')
            setAttr(ui, '#username', 'submitting', 'false')
            setAttr(ui, '#password', 'submitting', 'false')
        }
    })
}

const onStoreMessageStateUpdate = (ui, state) => {
    return listenKeys(loginStore, [`ui.message`], async (x, key) => {
        setAttr(ui, '#message', 'type', x.ui.message.type)
        setAttr(ui, '#message', 'active', x.ui.message.active)
        setText(ui, '#message', x.ui.message.text)
    })
}

/**
 * UI Events
 */
const onAddClick = (ui, state) => {
    ui.querySelector('#loginbutton').addEventListener('s-click', (v) => {
        loginStore.setKey(`state`, states.SUBMITTING)
    })
}

const onInputChange = (ui, state) => {
    ui.querySelector('#username').addEventListener('s-change', (v) => {
        loginStore.setKey(`username`, v.detail.value)
    })
}

/**
 * Render
 */
const firstRender = (state) => {
    const store = loginStore.get()
    return /*html*/ `
        <s-div css='h-screen w-full flex justify-center items-center flex-col'>
            <s-div css='flex justify-center items-center flex-col'>
                <c-input
                    id='username'
                    name='Username'
                    submitting='false'
                    value='${store.username}'
                ></c-input>
                <c-input
                    id='password'
                    name='Password'
                    submitting='false'
                    value='${store.password}'
                ></c-input>
                <s-button
                    css='rounded bg-teal-400 px-4 py-2 text-white w-full'
                    id='loginbutton'
                    text="Login"
                ></s-button>
                <c-message
                    active='${store.ui.messageActive ? 'true' : 'false'}'
                    type='${store.ui.messageType}'
                    id='message'>
                    ${store.ui.messageText}
                </c-message>
            </s-div>
        </s-div>
       
    `
}

export default summit({
    name: 'c-login',
    listeners: [
        onStoreSubmittingUpdate,
        onStoreMessageStateUpdate,
        onAddClick,
        onInputChange
    ],
    render: firstRender
})
