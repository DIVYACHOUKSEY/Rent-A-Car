import { LightningElement ,api} from 'lwc';

export default class MeetingRoom extends LightningElement {
   // @api meetingRoomInfo = {roomName:'A-01', roomCapacity:'12'}
    @api showRoomInfo =false;
    tileClickHandler(){
        const tileClicked = new CustomerEvent('tileclick',{detail :this.meetingRoomInfo});
        this.dispatchEvent(tileClicked);
    }
}