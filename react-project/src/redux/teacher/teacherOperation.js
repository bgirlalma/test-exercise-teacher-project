import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../../config/firebase";
import { ref, get } from 'firebase/database';

export const teachersList = createAsyncThunk(
  'teacherAuth/teacherList',
  async (_, thunkAPI) => {
 try {
   // Создание ссылки на коллекцию 'teachers' 
   const teachersRef = ref(database, 'teachers');
   console.log(teachersRef)

   // Получение данных из коллекции 'teachers'
   const snapshot = await get(teachersRef);
   console.log("Snapshot", snapshot)
    console.log('SnapshotKey', snapshot.key);
    console.log('SnapshotVal', snapshot.val()); 

   if (snapshot.exists()) {
     // Преобразование данных в массив объектов
     const teacherList = [];
     snapshot.forEach(childSnapshot => {
       teacherList.push({
         id: childSnapshot.key,
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