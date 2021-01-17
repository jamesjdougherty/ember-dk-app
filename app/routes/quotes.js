import Route from '@ember/routing/route';

export default class QuotesRoute extends Route {
  model() {
    return ['Home Owners', 'Automotive', 'Life'];
  }
}
