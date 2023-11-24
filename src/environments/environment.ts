const API_DOMAIN = 'localhost:7086';

export const environment = {
  production: false,
  domain: API_DOMAIN,
  devexpress: `https://${API_DOMAIN}`,
  api: `https://${API_DOMAIN}/`,
  backoffice: `https://${API_DOMAIN}/api`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
