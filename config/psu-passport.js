import { OpenIDProvider } from '@salte-auth/salte-auth'

export class PsuPassport extends OpenIDProvider {
  /**
   * This is the default name of the provider.
   */
  get name() {
    return 'psupassport'
  }

  /**
   * This should use `this.config.url` to build the provider-specific login url.
   */
  get login() {
    // In this case Auth0's "/authorize" is right at the root and
    // it supports a custom audience parameter.
    return this.url(`${this.config.url}/authorize`, {
      audience: this.config.audience,
    })
  }

  /**
   * This should use `this.config.url` to build the provider-specific logout url.
   */
  get logout() {
    return this.url(`${this.config.url}/v2/logout`, {
      returnTo: this.config.redirectUrl,
      client_id: this.config.clientID,
    })
  }
}
