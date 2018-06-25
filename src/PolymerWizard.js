import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class PolymerWizard extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String,
        value: ''
      }
    };
  }

  constructor() {
    super();
    setPassiveTouchGestures(true);
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  ready() {
    super.ready();
  }

  static get template() {
    return html`
      <style>
        paper-checkbox {
          --paper-checkbox-checked-ink-color: #FFFFFF;
          --paper-checkbox-unchecked-ink-color: #FFFFFF;
        }
      </style>

      <h1>PolymerWizard</h1>
      <p>[[message]]</p>
    `;
  }
}

// Register the element with the browser.
customElements.define('polymer-wizard', PolymerWizard);
