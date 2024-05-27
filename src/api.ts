import axios from 'axios';
import { ApiResponse } from './types';

const API_URL = 'https://api.mob.co.uk/task/recipes.json';

export const fetchRecipes = async (): Promise<ApiResponse> => {
  try {
    const response = await axios.get(API_URL, {
      auth: {
        username: 'mob-api',
        password: '9r7rey5567ce0m7hbt1u',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};