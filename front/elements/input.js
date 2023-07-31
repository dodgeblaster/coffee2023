class InputText extends HTMLElement {
    constructor() {
        super()
        this.id = this.getAttribute('id') || 'hello'
        this.name = this.getAttribute('name') || 'hello'
        this.value = this.getAttribute('value') || ''
        this.shadow = this.attachShadow({ mode: 'open' })
        this.submitting = this.getAttribute('submitting') === 'true'
        this.render()
    }

    /**
     * Reactive properties
     */
    static get observedAttributes() {
        return ['name', 'value', 'submitting']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
            const input = this.shadowRoot.querySelector('s-input')
            input.value = newValue
        }
        if (name === 'submitting') {
            const input = this.shadowRoot.querySelector('s-input')
            if (newValue === 'true') {
                input.setAttribute('submitting', 'true')
                input.style.opacity = '0.4'
            } else {
                input.setAttribute('submitting', 'false')
                input.style.opacity = '1'
            }
        }
    }

    render() {
        this.shadow.innerHTML = /*html*/ `
            <div>
                <s-text css='block text-sm' tag='label' for="${this.id}">${this.name}</s-text>
                <s-input
                    id="${this.id}"
                    css='px-4 py-2 my-2 border border-teal-500 rounded'
                    submitting='false'
                    placeholder='text goes here'
                    value='${this.value}'
                />
            </div>
        `
    }
}

customElements.define('c-input', InputText)
export default 'c-input'
