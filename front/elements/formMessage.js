const typeToIcon = {
    error: 'alert',
    info: 'alert',
    success: 'success'
}

const typeToColor = {
    error: 'red-400',
    info: 'blue-400',
    success: 'green-400'
}

class FormMessage extends HTMLElement {
    constructor() {
        super()

        this.active =
            this.getAttribute('active') !== 'undefined'
                ? this.getAttribute('active')
                : 'false'

        this.type =
            this.getAttribute('type') !== 'undefined'
                ? this.getAttribute('type')
                : 'info'

        this.shadow = this.attachShadow({ mode: 'open' })

        this.styles = {
            error: 'w-full rounded border border-red-400 px-4 py-4 mt-4 text-sm items-center',
            info: 'w-full rounded border border-blue-400 px-4 py-4 mt-4 text-sm items-center',
            success:
                'w-full rounded border border-green-400 px-4 py-4 mt-4 text-sm items-center'
        }

        this.visiblility = 'hidden'

        this.render()
    }

    /**
     * Reactive properties
     */
    static get observedAttributes() {
        return ['active', 'type']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type') {
            const v = newValue === 'undefined' ? 'info' : newValue
            this.type = v
        }
        if (name === 'active') {
            if (newValue === 'true') {
                this.visiblility = 'flex'
            } else {
                this.visiblility = 'hidden'
            }
        }

        const text = this.shadowRoot.querySelector('#d')
        const icon = this.shadowRoot.querySelector('s-icon')
        const st = this.styles[this.type] + ' ' + this.visiblility

        text.setAttribute('css', st)
        icon.setAttribute('type', typeToIcon[this.type])
        icon.setAttribute('color', typeToColor[this.type])
    }

    render() {
        const styles = this.styles[this.type] + ' ' + this.visiblility
        const type = typeToIcon[this.type]
        const color = typeToColor[this.type]

        this.shadow.innerHTML = /*html*/ `
            <style>
                :host {
                    width: 100%;
                }
            </style>
            <s-div id='d' css='${styles}'>
                <s-icon type='${type}' color='${color}' size='24'></s-icon>
                <s-text css='ml-1 text-xs'>
                    <slot></slot>
                </s-text>
            </s-div>
        `
    }
}

customElements.define('c-message', FormMessage)
export default 'c-message'
