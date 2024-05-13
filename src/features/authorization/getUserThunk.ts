import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../shared/api/api";
import { isAxiosError } from "axios";
import { UserBody } from "./authSlice";

export const getUserThunk = createAsyncThunk<
    UserBody,
    void,
    { rejectValue: string }
>("getUserThunk", async (_, { rejectWithValue }) => {
    try {
        const user = (await $api.get<UserBody>('/campapi/profile')).data
        return user
    } catch (error) {
        if (isAxiosError(error)) {
        }
        return rejectWithValue("Произошла неизвестная ошибка позвоните разработчику 89878884054")
    }
})

