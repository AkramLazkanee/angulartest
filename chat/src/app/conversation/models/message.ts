export class Message {
    constructor(
        public Id: number,
        public ConversationId: number,
        public SenderId: number,
        public ReceiverId: number,
        public SendingDateTime: string,
        public ReceiveDateTime: string,
        public ReadDateTime: string,
        public Text: string
        ) {
    }
}
