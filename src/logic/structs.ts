export class CardData {
    constructor(
        public title: string,
        public items: CardDataItem[],

    ) {}
}



export class CardDataItem {
    constructor(
        public description: string,

    ) {}
}



export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}