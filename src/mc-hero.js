import MjHero from 'mjml-hero'
import { registerDependencies } from 'mjml-validator'

registerDependencies({
  'mj-wrapper': ['mc-hero'],
  'mj-body': ['mc-hero'],
  'mc-hero': ['mj-raw', 'mj-text', 'mc-text', 'mj-image', 'mc-image'],
});

class McHero extends MjHero {
  static tagOmission = true

  static allowedAttributes = {
    ...MjHero.allowedAttributes,
    'mc:edit': 'string',
    'mc:hideable': 'string',
    'mc:repeatable': 'string',
    'mc:variant': 'string',
  }

  static defaultAttributes = {
    ...MjHero.defaultAttributes,
    'mc:hideable': false,
  }

  getMcAttributes() {
    const mcAttrs = {}

    Object.keys(McHero.allowedAttributes)
      .filter(attr => attr.indexOf('mc:') === 0)
      .forEach(attr => {
        const attrVal = this.getAttribute(attr)

        attrVal && (mcAttrs[attr] = attrVal)
      })

    return mcAttrs
  }

  // MODIFIED form https://github.com/mjmlio/mjml/blob/master/packages/mjml-hero/src/index.js
  render() {
    const { containerWidth } = this.context
    const mcAttributes = this.getMcAttributes()
    const hasMcAttribute = Object.keys(mcAttributes).length

    return `
      ${hasMcAttribute && '<div ' + this.htmlAttributes(mcAttributes) + '>'}
      <!--[if mso | IE]>
        <table
          ${this.htmlAttributes({
            align: 'center',
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: 'outlook-table',
            width: parseInt(containerWidth, 10),
          })}
        >
          <tr>
            <td ${this.htmlAttributes({ style: 'outlook-td' })}>
              <v:image
                ${this.htmlAttributes({
                  style: 'outlook-image',
                  src: this.getAttribute('background-url'),
                  'xmlns:v': 'urn:schemas-microsoft-com:vml',
                })}
              />
      <![endif]-->
      <div
        ${this.htmlAttributes({
          align: this.getAttribute('align'),
          class: this.getAttribute('css-class'),
          style: 'div',
        })}
      >
        <table
          ${this.htmlAttributes({
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: 'table',
          })}
        >
          <tr
            ${this.htmlAttributes({
              style: 'tr',
            })}
          >
            ${this.renderMode()}
          </tr>
      </table>
    </div>
    <!--[if mso | IE]>
          </td>
        </tr>
      </table>
    <![endif]-->
    ${hasMcAttribute && '</div>'}
    `
  }
}

export default McHero
