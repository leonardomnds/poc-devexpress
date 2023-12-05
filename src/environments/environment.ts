const API_DOMAIN = 'localhost:51775';
const API_DOMAIN_BACKOFFICE = 'localhost:61553';
const API_DOMAIN_EUGESTOR = 'api.dev.eugestor.insidesistemas.com.br';

export const environment = {
  production: false,
  domain: API_DOMAIN,
  devexpressUrl: `https://${API_DOMAIN}`,
  reportsApiUrl: `https://${API_DOMAIN}/api`,
  backofficeApiUrl: `https://${API_DOMAIN_BACKOFFICE}/api`,
  eugestorApiUrl: `https://${API_DOMAIN_EUGESTOR}/api`,
};
