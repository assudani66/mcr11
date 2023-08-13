interface movieInfo {
  id: number;
  title: string;
  year: number;
  genre: string[] | string;
  rating: number;
  director: string;
  writer: string;
  cast: string[] | string;
  summary: string;
  imageURL: string;
}
