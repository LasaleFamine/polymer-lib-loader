import {Element} from '@polymer/polymer/polymer-element';

export default class LibLoader extends Element {
  static get properties() {
    return {
      /** Link of the library */
      lib: {
        type: String,
        observer: '_insertLib'
      },
      /** <script id="" */
      libUniqueId: {
        type: String
      },
      /** True when the lib is ready */
      libReady: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  static get template() {
    return ``;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('lib-loaded', () => this.set('libReady', true));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeLib();
  }

  /** Remove lib from the dom */
  removeLib() {
    const lib = document.querySelector('#' + this.libUniqueId);
    if (lib) {
      lib.remove();
    }
  }

  /** ===============
   * Private methods
   * */

  /* Insert at the end of the body the js lib */
  _insertLib() {
    this.libUniqueId = this.libUniqueId || 'lib-loader' + new Date().getUTCMilliseconds();
    const link = this.lib;
    const type = this.libUniqueId;
    // Check for existent lib
    if (document.querySelector('#' + type)) {
      document.querySelector('lib-loader').addEventListener('lib-loaded', evt => {
        this._onLoadLib(evt, type);
      });
      return false;
    }

    const src = document.createElement('script');
    src.setAttribute('src', link);
    src.id = type;
    src.async = true;
    src.onload = evt => this._onLoadLib(evt, type);
    src.onreadystatechange = src.onload;
    document.body.appendChild(src);
  }

  /** ===============
   * Event listeners
   * */

  /* On lib loaded */
  _onLoadLib() {
    setTimeout(() => this.dispatchEvent(new CustomEvent('lib-loaded', {composed: true, bubbles: true})));
  }
}

window.customElements.define('lib-loader', LibLoader);
