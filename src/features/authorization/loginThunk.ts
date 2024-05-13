import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../shared/api/api";
import { isAxiosError } from "axios";
import { AuthState, UserBody, UserRole } from "./authSlice";

type LoginPayload = {
    email: string;
    password: string;
}

export const loginThunk = createAsyncThunk<
    AuthState,
    LoginPayload,
    { rejectValue: string }
>("logThunk", async (data, { rejectWithValue }) => {
    try {
        const tokens = (await $api.post<{
            "accessToken": string,
            "refreshToken": string
        }>('/campapi/signin', data)).data

        const user = (await $api.get<UserBody>('/campapi/profile', {headers: { "Authorization": `${tokens.accessToken}` }})).data

        return {
            tokens: tokens,
            user: user
        }
    } catch (error) {
        if (isAxiosError(error)) {
            if (error.response?.status === 400) {
                return rejectWithValue("Пароли не совпадают")
            }
            else if (error.response?.status === 404) {
                return rejectWithValue("Email не зарегистрирован")
            } else {
                alert('Не знаю что это')
            }
        }
        return rejectWithValue("Произошла неизвестная ошибка позвоните разработчику 89878884054")
    }
})

