import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../config/firebase";
import { ref, get, push, set, remove, query, orderByChild, equalTo } from 'firebase/database';
import {uid} from 'uid'

export const teachersList = createAsyncThunk(
  'teachers/teacherList',
  async (_, thunkAPI) => {
    try {
      // Создание ссылки на коллекцию 'teachers'
      const teachersRef = ref(database, 'teachers');

      // Получение данных из коллекции 'teachers'
      const snapshot = await get(teachersRef);

      if (snapshot.exists()) {
        // Преобразование данных в массив объектов
        const teacherList = [];
        snapshot.forEach(childSnapshot => {
          teacherList.push({
            id: uid(),
            ...childSnapshot.val(),
          });
        });

        return teacherList;
      } else {
        console.log('Дані не знайдено!');
        return [];
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTeacherFavorites = createAsyncThunk(
  'teachers/addTeacherFavorites',
  async (id, thunkAPI) => {
    try {
      const teachetsFavoritesRef = ref(database, 'favorites'); //отримуємо линку бази даних
      const newFavoritesRef = push(teachetsFavoritesRef); //генеруємо новий ключ для додавання в улюблене

      //додаємо інформацію про вчителя в улюблене
      await set(newFavoritesRef, {
        teacherId: id,
      });

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const removeTeacherFavorites = createAsyncThunk(
  'teachers/removeTeacherFavorites', async (id, thunkAPI) => {
    console.log('Trying to remove teacher from favorites:', id);
    try {
      const teachersRef = ref(database, 'favorites');
      const favoriteQuery = query(
        teachersRef,
        orderByChild('teacherId'),
        equalTo(id)
      ); //створюємо запит до вузлу favorites. За допомогою orderByChild вказуємо що данні повинні бути відсортованні по полю teacherId. За допомогою equalTo гарантуємо, що teacherId === teacherId
      const snapshot = await get(favoriteQuery);

      snapshot.forEach(childSnapshot => remove(childSnapshot.ref));
      console.log('Teacher removed from favorites:', id);
      return id;
    } catch (error) {
       console.error('Error removing teacher from favorites:', error);
       return thunkAPI.rejectWithValue(error.message);
    }
  }
);