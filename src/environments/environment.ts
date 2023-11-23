const API_DOMAIN = '309c-177-66-108-187.ngrok-free.app';

export const environment = {
  production: false,
  domain: API_DOMAIN,
  devexpress: `http://${API_DOMAIN}`,
  api: `http://${API_DOMAIN}/`,
  backoffice: `http://${API_DOMAIN}/api`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
