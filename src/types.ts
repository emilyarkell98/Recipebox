export interface RecipeImage {
    id: number;
    title: string;
    url: string;
    width: string;
    height: string;
  }
  
  export interface Recipe {
    id: number;
    title: string;
    slug: string;
    image: RecipeImage[];
  }
  
  export interface ApiResponse {
    recipes: Recipe[];
  }
  