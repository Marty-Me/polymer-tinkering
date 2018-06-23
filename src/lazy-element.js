import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class LazyElement extends PolymerElement {
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <p>You like pie.</p>
    `;
  }
}

// Register the element with the browser.
customElements.define('lazy-element', LazyElement);
