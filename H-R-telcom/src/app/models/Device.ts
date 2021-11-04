
// Define the Device object by the attribute in the database table
export class Device {
	device_id: number
	model: String;
	price: number;
	image: any;

	constructor( model:String, price:number, image:any, device_id: number) {
		this.device_id = device_id;
		this.model = model;
		this.price = price;
		this.image = image;
	}
}

// fill database devices 