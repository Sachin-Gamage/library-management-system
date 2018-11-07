import { Reader } from './reader';

export abstract class LibraryItem {
    private ISBN:string;
    private title:string;
    private sector:string;
    private pubDate:Date;
    private burrowDateAndTime:Date;
    private reader:Reader;


    /**
     * Getter $ISBN
     * @return {string}
     */
	public get $ISBN(): string {
		return this.ISBN;
	}

    /**
     * Setter $ISBN
     * @param {string} value
     */
	public set $ISBN(value: string) {
		this.ISBN = value;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Getter $sector
     * @return {string}
     */
	public get $sector(): string {
		return this.sector;
	}

    /**
     * Setter $sector
     * @param {string} value
     */
	public set $sector(value: string) {
		this.sector = value;
	}

    /**
     * Getter $pubDate
     * @return {Date}
     */
	public get $pubDate(): Date {
		return this.pubDate;
	}

    /**
     * Setter $pubDate
     * @param {Date} value
     */
	public set $pubDate(value: Date) {
		this.pubDate = value;
	}

    /**
     * Getter $burrowDateAndTime
     * @return {Date}
     */
	public get $burrowDateAndTime(): Date {
		return this.burrowDateAndTime;
	}

    /**
     * Setter $burrowDateAndTime
     * @param {Date} value
     */
	public set $burrowDateAndTime(value: Date) {
		this.burrowDateAndTime = value;
	}

    /**
     * Getter $reader
     * @return {Reader}
     */
	public get $reader(): Reader {
		return this.reader;
	}

    /**
     * Setter $reader
     * @param {Reader} value
     */
	public set $reader(value: Reader) {
		this.reader = value;
	}

   
}