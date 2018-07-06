import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-button';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

let wizardElement;
let tabIndex = 0;
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
    wizardElement = this.shadowRoot.getElementById('wizard');
  }

  moveNext() {
    const tabElements = wizardElement.getElementsByClassName('tab');
    tabElements[tabIndex].classList.remove('active');
    tabElements[++tabIndex].classList.add('active');
  }

  static get template() {
    return html`
      <style>
      .wizard-body {
        border-color: var(--primary-color);
        margin: 2rem;
        margin-left: 20rem;
        margin-right: 20rem;
        padding: 2em;
        border-style: solid;
        display:flex;
        justify-content: space-around;
        flex-direction: column;
      }
      .wizard-body paper-button {
        align-self: flex-end;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }
      .tab {
        display: none;
      }
      .active {
        display: block;
      }

      </style>
      <div class="wizard-body" id="wizard">
      <h1>Polymer Wizard</h1>
        <p class="tab active">
          This is the part of the application that is to be switched up, depending on the times the button has been pressed.
        </p>
        <p class="tab">
          This is the second part of the application.
        </p>
        <paper-button on-click="moveNext" raised>Next</paper-button>
      </div>
    `;
  }
}


// Register the element with the browser.
customElements.define('polymer-wizard', PolymerWizard);
