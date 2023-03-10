import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getPokemonFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoriteApi(id) {
  try {
    const favorite = await getPokemonFavoriteApi();
    favorite.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorite));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}

export async function removePokemonFavoriteApi(id){
  try {
    const favorite = getPokemonFavoriteApi();
    const newFavorites = pull(favorite, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}