export interface QuoteQuotable {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}

export interface QuoteQuoteGarden {
  data: {
    quoteAuthor: string;
    quoteGenre: string;
    quoteText: string;
    _id: string;
  }[];
}

export interface QuoteDummyJson {
  id: number;
  quote: string;
  author: string;
}
