import { atomDeep, listenKeys } from '../../lib/summit-store.js'

export const listStates = {
    NONE: 'NONE',
    LOADING: 'LOADING',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    NOT_FOUND: 'NOT_FOUND'
}

function mockLoginCall() {
    return new Promise((r, rej) => {
        setTimeout(() => {
            r(r)
        }, 10)
    })
}

function mockItemCall() {
    return new Promise((r, rej) => {
        setTimeout(() => {
            r(r)
        }, 1000)
    })
}

const mockBaristas = {
    100: {
        id: '100',
        name: 'John A',
        email: 'johnA@exampel.com'
    },
    101: {
        id: '101',
        name: 'John B',
        email: 'johnB@exampel.com'
    },
    102: {
        id: '102',
        name: 'John C',
        email: 'johnC@exampel.com'
    }
}

export const baristaStore = atomDeep({
    listState: listStates.NONE,
    itemState: listStates.NONE,
    itemInFocus: '0',
    baristas: {},
    ui: {
        list: {
            loading: false
        }
    }
})

listenKeys(baristaStore, [`listState`], async (x, key) => {
    if (x.listState === listStates.LOADING) {
        baristaStore.setKey(`ui.list.loading`, true)

        try {
            const res = await mockLoginCall()
            baristaStore.setKey(`baristas`, mockBaristas)
            baristaStore.setKey(`listState`, listStates.SUCCESS)
            // loginStore.setKey(`ui.message`, {
            //     active: true,
            //     text: 'Success',
            //     type: 'success'
            // })

            setTimeout(() => {
                // loginStore.setKey(`ui.message`, {
                //     active: false,
                //     text: '',
                //     type: 'info'
                // })
            }, 2000)
        } catch (e) {
            baristaStore.setKey(`listState`, listStates.ERROR)
            // loginStore.setKey(`ui.message`, {
            //     active: true,
            //     text: 'There was an issue',
            //     type: 'error'
            // })
        } finally {
            baristaStore.setKey(`ui.list.loading`, false)
        }
    }
})

listenKeys(baristaStore, [`itemState`], async (x, key) => {
    if (x.itemState === listStates.LOADING) {
        const idInFocus = x.itemInFocus
        // baristaStore.setKey(`ui.list.loading`, true)

        try {
            const res = await mockItemCall(idInFocus)
            baristaStore.setKey(`baristas.${idInFocus}`, mockBaristas['100'])
            baristaStore.setKey(`itemState`, listStates.SUCCESS)
            // loginStore.setKey(`ui.message`, {
            //     active: true,
            //     text: 'Success',
            //     type: 'success'
            // })

            setTimeout(() => {
                // loginStore.setKey(`ui.message`, {
                //     active: false,
                //     text: '',
                //     type: 'info'
                // })
            }, 2000)
        } catch (e) {
            baristaStore.setKey(`itemState`, listStates.ERROR)
            // loginStore.setKey(`ui.message`, {
            //     active: true,
            //     text: 'There was an issue',
            //     type: 'error'
            // })
        } finally {
            //  baristaStore.setKey(`ui.list.loading`, false)
        }
    }
})
