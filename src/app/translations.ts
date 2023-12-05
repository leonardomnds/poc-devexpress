import ptMessages from '../../node_modules/devextreme/localization/messages/pt.json';
import { locale, loadMessages } from "devextreme/localization";

const ptBrMessages = {
  'pt-BR': {
    ...ptMessages.pt,

    "dxList-pageLoadingText": "Carregando ...",
    "dxScrollView-reachBottomText": "Carregando ...",
    "dxDateRangeBox-invalidStartDateMessage": "Data inválida",
    "dxDateRangeBox-invalidEndDateMessage": "Data inválida",
    "dxDateRangeBox-startDateOutOfRangeMessage": "Data inválida",
    "dxDateRangeBox-endDateOutOfRangeMessage": "Data inválida",

    "dxSwitch-switchedOnText": "Ativado",
    "dxSwitch-switchedOffText": "Desativado",
  }
}

export const translateDevexpressInterface = () => {
  loadMessages(ptBrMessages);
  locale('pt-BR');
};
