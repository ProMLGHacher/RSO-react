import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../shared/api/api";
import { UserBody } from "./authSlice";
import { RootState } from "../../app/store/store";

type UpdateUserPayload = {
    "headquarters"?: string,
    "detachment"?: string,
    "heldPost"?: string,
    "yearOfInitiation"?: string
}

export const updateUserThunk = createAsyncThunk<
    UserBody,
    UpdateUserPayload,
    { rejectValue: string, state: RootState }
>("updateUserThunk", async (data, { rejectWithValue, getState }) => {

    const state = getState().auth

    try {
        const result = await $api.put<UserBody>('/campapi/profile', {
            ...{
                headquarters: state.user?.headquarters,
                detachment: state.user?.detachment,
                heldPost: state.user?.heldPost,
                yearOfInitiation: state.user?.yearOfInitiation
            },
            ...data
        })
        return result.data
    } catch (error) {
        return rejectWithValue("Произошла неизвестная ошибка позвоните разработчику 89878884054")
    }
})

