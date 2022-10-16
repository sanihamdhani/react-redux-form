import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

//nama action type/return promise
export const getData = createAsyncThunk("data/request", async () => {
  const res = await axios.get(
    "https://io.etter.cloud/v4/select_all/token/633aac2f99b6c11c094bd474/project/address_book/collection/address_collection/appid/633b914699b6c11c094bd489"
  );
  return res.data;
});

export const postData = createAsyncThunk(
  "data/postData",
  async ({ _id, nik, name, email, gender, divisi, alamat, birthday }) => {
    const res = await axios.post("https://io.etter.cloud/v4/insert/", {
      token: "633aac2f99b6c11c094bd474",
      project: "address_book",
      collection: "address_collection",
      appid: "633b914699b6c11c094bd489",
      _id,
      nik,
      name,
      email,
      gender,
      divisi,
      alamat,
      birthday,
    });
    return res.data;
  }
);

export const deleteData = createAsyncThunk("data/deleteData", async (id) => {
  await axios.delete(
    `https://io.etter.cloud/v4/remove_id/token/633aac2f99b6c11c094bd474/project/address_book/collection/address_collection/appid/633b914699b6c11c094bd489/id/${id}`
  );
  return id;
});

export const updateData = createAsyncThunk(
  "data/updateData",
  async ({ id, nik, name, email, gender, divisi, alamat, birthday }) => {
    const res = await axios.post(`https://io.etter.cloud/v4/update_id/${id}`, {
      token: "633aac2f99b6c11c094bd474",
      project: "address_book",
      collection: "address_collection",
      appid: "633b914699b6c11c094bd489",
      id,
      update_field: "nik~name~email~gender~divisi~alamat~birthday",
      update_value:
        nik +
        "~" +
        name +
        "~" +
        email +
        "~" +
        gender +
        "~" +
        divisi +
        "~" +
        alamat +
        "~" +
        birthday,
    });
    return res.data;
  }
);

// Sebuah fungsi yang menghasilkan satu set reducer dan selector untuk melakukan operasi CRUD
const dataEntity = createEntityAdapter({
  selectId: (data) => data._id,
});

// Konten utama entity adapter adalah sekumpulan fungsi reducer yang dihasilkan untuk menambahkan,
// memperbarui, dan menghapus instance entitas dari objek status entitas
const dataSlice = createSlice({
  name: "data",
  initialState: dataEntity.getInitialState(),
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      dataEntity.setAll(state, action.payload);
    },
    [postData.fulfilled]: (state, action) => {
      dataEntity.setOne(state, action.payload);
    },
    [deleteData.fulfilled]: (state, action) => {
      dataEntity.removeOne(state, action.payload);
    },
    [updateData.fulfilled]: (state, action) => {
      dataEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload,
      });
    },
  },
});

export const dataSelector = dataEntity.getSelectors((state) => state.data);
export default dataSlice.reducer;

// reducers: {
//   update: (state, action) => {
//     state.nama = action.payload.nama;
//     state.alamat = action.payload.alamat;
//   },
// },
