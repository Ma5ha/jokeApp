export interface JokesResponse {
    error: boolean;
    jokes?: (JokesEntity)[] | null;
    amount: number;
  }
export interface JokesEntity {
    category: string;
    type: string;
    joke?: string | null;
    flags: Flags;
    id: number;
    lang: string;
    setup?: string | null;
    delivery?: string | null;
  }
export interface Flags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
  }
