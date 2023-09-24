import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('wd-variable')
class WdVariable extends LitElement {
  override render() {
    return html`
      <div>
        Hello from WdVariable!
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-text': WdVariable;
  }
}

export default WdVariable;
