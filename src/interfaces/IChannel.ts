import firebase from 'firebase';

export interface IChannel {
	id?: string;
	name: string;
	description?: string;
	messages?: IMessage[];
}

export interface IMessage {
	id?: string;
	text: string;
	user: string;
	userImage: string;
	timestamp: firebase.firestore.Timestamp;
}
