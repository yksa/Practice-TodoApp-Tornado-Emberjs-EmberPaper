import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditController extends Controller {
    @action
    edit(list){
        list.save().then((name) => this.transitionToRoute('index'));
    }
}
