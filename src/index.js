import {Element} from '@polymer/polymer/polymer-element';

export default class LibLoader extends Element {
  static get properties() {
    return {
      /** Link of the library */
      lib: {
        type: String
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
    if (!this.lib || !this.libUniqueId) {
      console.error('<lib-loader> ERROR: Library or unique id not specified.');
      return false;
    }

    this.addEventListener('lib-loaded', () => this.set('libReady', true));
    this._insertLib(this.lib, this.libUniqueId);
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
  _insertLib(link, type) {
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
