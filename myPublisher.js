import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
import getContacts from '@salesforce/apex/AccountContactController.getContacts';

export default class MyPublisher extends LightningElement {
  //Get current page reference, wire it with imported variable.
    @wire(CurrentPageReference) pageRef;
    @track data = [];
    @track error;
    @track accountId;

    handleChange(event) {
        event.preventDefault();
       //To get selected account Id
        var accId = event.currentTarget.getAttribute('data-dev-id'); 
        //Publish | Fire event
        fireEvent(this.pageRef, "eventdetails", accId);
    }

    // Getting Contacts using Wire Service
    @wire(getContacts)
    contacts(result) {
        if (result.data) {
            this.data = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.data = undefined;
        }
    }
}
