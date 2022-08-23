import { LightningElement, api, wire } from 'lwc';

export default class ObjectItterate extends LightningElement {

    @api sample = {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "Image": {
            "url": "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
            "width": 200,
            "height": 200
        },
        "thumbnail": {
            "url": "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg",
            "width": 32,
            "height": 32
        }
    }



}