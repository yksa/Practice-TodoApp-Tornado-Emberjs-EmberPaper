import Model, { attr } from '@ember-data/model';

export default class ListModel extends Model {
  @attr('string') item;
  @attr('boolean') status;
}
