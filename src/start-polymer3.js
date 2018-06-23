import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';

class StartPolymer3 extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String,
        value: ''
      },
      pie: {
        type: Boolean,
        value: false,
        observer: 'togglePie'
      },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    // If you override the constructor, always call the 
    // superconstructor first.
    super();
    // Resolve warning about scroll performance 
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
    setPassiveTouchGestures(true);
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  ready() {
    // If you override ready, always call super.ready() first.
    super.ready();
    // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
    console.log(this.tagName);
    this.$.omgpie.focus();
  }

  togglePie() {
    if (this.pie && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import('./lazy-element.js').then(() => {
      }).catch((reason) => {
        console.error('LazyElement failed to load', reason);
      });
      this.loadComplete = true;
    }
  }

  static get template() {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <style>
        paper-checkbox {
          --paper-checkbox-checked-ink-color: #FFFFFF;
          --paper-checkbox-unchecked-ink-color: #FFFFFF;
        }
      </style>

      <h1>Start Polymer 3.0</h1>
      <p>[[message]]</p>
      <paper-checkbox id="omgpie"
        toggles
        noink
        checked={{pie}}>I like pie.</paper-checkbox>
      <template is="dom-if" if=[[pie]]>
        <lazy-element><p>lazy loading...</p></lazy-element>
      </template>
    `;
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
