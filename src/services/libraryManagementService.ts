/* tslint:disable */

import { DVD } from '../modals/dvd';
import { Book } from '../modals/book';
import { LibraryItemDisplay } from '../modals/libraryItemDisplay';
import { Reader } from '../modals/reader';
import { Report } from '../modals/report';

export class LibraryManagementService {
         private dvdList: DVD[];
         private bookList: Book[];

         constructor() {
           this.dvdList = new Array<DVD>();
           this.bookList = new Array<Book>();
         }

         public addItem(itemType: string, dvd: DVD, book: Book) {
           if (itemType.toLowerCase() === "dvd") {
             return this.addDVD(dvd);
           } else {
             return this.addBook(book);
           }
         }

         public deleteItem(itemType: string, ISBN: string): any {
           if (itemType.toLowerCase() === "dvd") {
             this.dvdList.forEach(dvd => {
               if (dvd.$ISBN === ISBN) {
                 this.dvdList.splice(this.dvdList.indexOf(dvd), 1);
                 return { freeSpace: this.dvdList.length, deleteditem: "DVD" };
               }
             });
           } else {
             this.bookList.forEach(book => {
               if (book.$ISBN === ISBN) {
                 this.bookList.splice(this.bookList.indexOf(book), 1);
                 return { freeSpace: this.bookList.length, deleteditem: "Book" };
               }
             });
           }
           return { freeSpace: null, deletedItem: null };
         }

         public displayItems(): LibraryItemDisplay[] {
           let libraryItemList: LibraryItemDisplay[] = new Array<LibraryItemDisplay>();

           this.bookList.forEach(book => {
             let bookItem: LibraryItemDisplay = new LibraryItemDisplay();

             bookItem.$ISBN = book.$ISBN;
             bookItem.$itemtype = "Book";
             bookItem.$title = book.$title;
             libraryItemList.push(bookItem);
           });

           this.dvdList.forEach(dvd => {
             let dvdItem: LibraryItemDisplay = new LibraryItemDisplay();

             dvdItem.$ISBN = dvd.$ISBN;
             dvdItem.$itemtype = "Dvd";
             dvdItem.$title = dvd.$title;
             libraryItemList.push(dvdItem);
           });

           return libraryItemList;
         }

         public burrowItem(ISBN: string, itemType: string, reader: Reader): string {
           if (itemType.toLowerCase() === "dvd") {
             this.dvdList.forEach(dvd => {
               if (dvd.$ISBN === ISBN) {
                 if (dvd.$reader !== null) {
                   dvd.$reader = reader;
                   return "Burrow Item Successfull";
                 } else {
                   return "You cannot burrow this item now. The item will be available by " + dvd.$burrowDateAndTime.getDate() + 3;
                 }
               }
             });
           } else {
             this.bookList.forEach(book => {
               if (book.$ISBN === ISBN) {
                 if (book.$reader !== null) {
                   book.$reader = reader;
                   return "Burrow Item Successfull";
                 } else {
                   return "You cannot burrow this item now. The item will be available by " + book.$burrowDateAndTime.getDate() + 7;
                 }
               }
             });
           }
           return "No item found";
         }

         public returnItem(itemType: string, ISBN: string) {
           if (itemType.toLowerCase() === "dvd") {
             this.dvdList.forEach(dvd => {
               if (dvd.$ISBN === ISBN) {
                 dvd.$reader = new Reader();
                 if (new Date().getDate() > dvd.$burrowDateAndTime.getDate() + 3) {
                   return { message: "Item Returned", fine: this.calculateFine(new Date().getDate() - dvd.$burrowDateAndTime.getDate() + 3) };
                 } else {
                   return { message: "Item Returned", fine: null };
                 }
               }
             });
           } else {
             this.bookList.forEach(book => {
               if (book.$ISBN === ISBN) {
                 book.$reader = new Reader();
                 if (new Date().getDate() > book.$burrowDateAndTime.getDate() + 7) {
                   return { message: "Item Returned", fine: this.calculateFine(new Date().getDate() - book.$burrowDateAndTime.getDate() + 7) };
                 } else {
                   return { message: "Item Returned", fine: null };
                 }
               }
             });
           }
           return "No item found";
         }

         public generateReport(): Report[] {
           let reportList: Report[] = new Array<Report>();
           this.dvdList.forEach(dvd => {
             if (new Date().getDate() > dvd.$burrowDateAndTime.getDate() + 3) {
               let overDueDVD: Report = new Report();
               overDueDVD.$ISBN = dvd.$ISBN;
               overDueDVD.$itemType = "DVD";
               overDueDVD.$title = dvd.$title;
               overDueDVD.$fine = this.calculateFine(new Date().getDate() - dvd.$burrowDateAndTime.getDate() + 3);
               reportList.push(overDueDVD);
             }
           });

           this.bookList.forEach(book => {
             if (new Date().getDate() > book.$burrowDateAndTime.getDate() + 7) {
               let overDuebook: Report = new Report();
               overDuebook.$ISBN = book.$ISBN;
               overDuebook.$itemType = "Book";
               overDuebook.$title = book.$title;
               overDuebook.$fine = this.calculateFine(new Date().getDate() - book.$burrowDateAndTime.getDate() + 7);
               reportList.push(overDuebook);
             }
           });

           return reportList;
         }

         private addDVD(dvd: DVD): string {
           if (this.dvdList.length <= 50) {
             this.dvdList.push(dvd);
             return "Success Fully Added";
           } else {
             return "Fail to add";
           }
         }

         private addBook(book: Book): string {
           if (this.bookList.length <= 100) {
             this.bookList.push(book);
             return "Successfully Added";
           } else {
             return "Fail to add";
           }
         }

         private calculateFine(penaltyDays: number): number {
           if (penaltyDays <= 3) {
             return penaltyDays * 24 * 0.2;
           } else {
             const extraDays = penaltyDays - 3;
             const firstThreeDayFine = 14.4;

             return firstThreeDayFine + extraDays * 24 * 0.5;
           }
         }
       }