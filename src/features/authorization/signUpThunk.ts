import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../shared/api/api";
import { isAxiosError } from "axios";
import { AuthState, UserBody, UserRole } from "./authSlice";

type LoginPayload = {
    "email": string,
    "role": UserRole,
    "password": string,
    fullname: string
  }

export const signUpThunk = createAsyncThunk<
    AuthState,
    LoginPayload,
    { rejectValue: string }
>("signUpThunk", async (data, { rejectWithValue }) => {
    try {
        const tokens = (await $api.post<{
            "accessToken": string,
            "refreshToken": string
        }>('/campapi/signup', data)).data

        const user = (await $api.get<UserBody>('/campapi/profile', {headers: { "Authorization": `${tokens.accessToken}` }})).data

        return {
            tokens: tokens,
            user: user
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if (error.response?.status === 400) {
                return rejectWithValue("Токен не валиден или активирован")
            }
            else if (error.response?.status === 404) {
                return rejectWithValue("Почта уже существует")
            } else {
                alert('Не знаю что это')
            }
        }
        return rejectWithValue("Произошла неизвестная ошибка позвоните разработчику 89878884054")
    }
})

