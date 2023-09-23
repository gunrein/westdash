import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wd-text")
class WdText extends LitElement {
  override render() {
    return html`<div>Hello from WdText!</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-text": WdText;
  }
}

export default WdText;
