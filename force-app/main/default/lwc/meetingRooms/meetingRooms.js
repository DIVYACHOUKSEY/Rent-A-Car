import { LightningElement,track } from 'lwc';

/*<export default class MeetingRooms extends LightningElement {
    meetingRoomsInfo =[
        { roomName:'A-01', roomCapacity:'12'},
        {roomName:'A-02', roomCapacity:'8'},
        {roomName:'A-03', roomCapacity:'4'},
        {roomName:'A-04', roomCapacity:'15'},
        {roomName:'A-05', roomCapacity:'7'},
        {roomName:'A-06', roomCapacity:'5'},
        {roomName:'A-07', roomCapacity:'9'}

    ];*/
    export default class MeetingRooms extends LightningElement {
       @track selectMeetingRoom;
        meetingRoomsInfo = [
            {roomName:'A-01', roomCapacity:'12'},
            {roomName:'A-02', roomCapacity:'16'},
            {roomName:'A-03', roomCapacity:'12'},
            {roomName:'B-01', roomCapacity:'5'},
            {roomName:'B-02', roomCapacity:'8'},
            {roomName:'B-03', roomCapacity:'10'},
            {roomName:'C-01', roomCapacity:'20'}
    
        ];
        onTileSelecthandler(event){
            const meetingRoomInfo = event.detail;
            this.selectMeetingRoom = meetingRoomInfo.roomName;
        }
    }
