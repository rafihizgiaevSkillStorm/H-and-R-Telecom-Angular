import { Lines } from "./Lines";

// Define the Plan object by the attribute in the database table
export class Plan{

    planId?: number;// the id is generated from the database so we wont always have it?
    name: string;
    numberOfLines:number;
    description: string;
    pricePerLine: number;
    line:Lines[];

    constructor(name: string, numberOfLines: number, description: string, pricePerLine: number,line:Lines[]){
        this.name = name;
        this.numberOfLines = numberOfLines;
        this.description = description;
        this.pricePerLine = pricePerLine;
        this.line=line;
    
    }
}