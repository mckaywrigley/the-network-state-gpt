export enum OpenAIModel {
  DAVINCI_TURBO = "gpt-3.5-turbo"
}

export type TNSSection = {
  chapter_num: number;
  chapter_title: string;
  section_title: string;
  section_url: string;
  section_num: number;
  content: string;
  content_length: number;
  content_tokens: number;
  chunks: TNSChunk[];
};

export type TNSChunk = {
  chapter_num: number;
  chapter_title: string;
  section_title: string;
  section_url: string;
  section_num: number;
  chunk_num: number;
  content: string;
  content_length: number;
  content_tokens: number;
  embedding: number[];
};

export type TNSBook = {
  book_title: string;
  author: string;
  book_url: string;
  publication_date: string;
  current_date: string;
  length: number;
  tokens: number;
  sections: TNSSection[];
};
