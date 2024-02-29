import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../config/firebase";
import { ref, get } from 'firebase/database';

export const teachersList = createAsyncThunk(
  'teacherAuth/teacherList',
  async (_, thunkAPI) => {
 try {
   // Создание ссылки на коллекцию 'teachers' в вашей базе данных
   const teachersRef = ref(database, 'teacher-project');

   // Получение данных из коллекции 'teachers'
   const snapshot = await get(teachersRef);
     console.log(teachersRef);
     console.log(snapshot);
   if (snapshot.exists()) {
     // Преобразование данных в массив объектов
     const teacherList = [];
     snapshot.forEach(childSnapshot => {
       teacherList.push({
         id: childSnapshot.key,
         ...childSnapshot.val(),
       });
     });
console.log(teacherList)
     return teacherList;
   } else {
     console.log('Данные не найдены');
     return [];
   }
 } catch (error) {
   return thunkAPI.rejectWithValue(error.message);
 }
  }
);