import Helpers from '~/services/Helpers.service';

export default (context, inject) => {
  const helpers = new Helpers();

  inject('helpers', helpers);
  context.$helpers = helpers;
};
