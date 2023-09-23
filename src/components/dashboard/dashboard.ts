import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wd-dashboard")
class WdDashboard extends LitElement {
  override render() {
    return html`<div>Hello from WdDashboard!</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-text": WdDashboard;
  }
}

export default WdDashboard;
