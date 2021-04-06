import firebase from 'firebase';

export interface IChat {
	name: string;
	description?: string;
	messages?: IMessage[];
}

export interface IMessage {
	text: string;
	user: string;
	userImage: string;
	timestamp: firebase.firestore.Timestamp;
}
