import axios from "axios";

export const Get_Category = async () => {
  try {
    const { data } = await axios.get('https://api.thecatapi.com/v1/categories ');
    return data
  }
  catch (error) {
    console.log(error);
  }

}

export const Get_Cats = async (category_ids = 1) => {
  try {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${category_ids}`);
    return data
  }
  catch (error) {
    console.log(error);
  }

}