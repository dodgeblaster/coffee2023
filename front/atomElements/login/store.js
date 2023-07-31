import { atomDeep, listenKeys } from '../../lib/summit-store.js'

export const states = {
    READY: 'READY',
    SUBMITTING: 'SUBMITTING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS'
}

function mockLoginCall() {
    return new Promise((r, rej) => {
        setTimeout(() => {
            r(r)
        }, 1000)
    })
}

export const loginStore = atomDeep({
    username: '',
    password: '',
    state: states.READY,

    ui: {
        submitting: false,
        message: {
            active: false,
            text: '',
            type: 'info'
        }
    }
})

listenKeys(loginStore, [`state`], async (x, key) => {
    if (x.state === states.SUBMITTING) {
        loginStore.setKey(`ui.submitting`, true)

        try {
            const res = await mockLoginCall()
            loginStore.setKey(`state`, states.SUCCESS)
            loginStore.setKey(`ui.message`, {
                active: true,
                text: 'Success',
                type: 'success'
            })

            setTimeout(() => {
                loginStore.setKey(`ui.message`, {
                    active: false,
                    text: '',
                    type: 'info'
                })
            }, 2000)
        } catch (e) {
            loginStore.setKey(`state`, states.ERROR)
            loginStore.setKey(`ui.message`, {
                active: true,
                text: 'There was an issue',
                type: 'error'
            })
        } finally {
            loginStore.setKey(`ui.submitting`, false)
        }
    }
})
