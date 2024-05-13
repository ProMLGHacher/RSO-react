import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { loginThunk } from './loginThunk'
import { signUpThunk } from './signUpThunk'
import { getUserThunk } from './getUserThunk'
import { updateUserThunk } from './updateUserThunk'

export enum UserRole {
    Beginner = "Beginner", Candidate = 'Candidate', Fighter = 'Fighter', OldMan = 'OldMan', Veteran = 'Veteran'
}

export type UserBody = {
    "email"?: string,
    "role": UserRole,
    "urlIcon"?: string,
    "headquarters"?: string,
    "detachment"?: string,
    "heldPost"?: string,
    "yearOfInitiation"?: string,
    "fullname"?: string,
    "documents"?: {
        "counselorCertificateUri"?: string,
        "medicalBookUri"?: string,
        "vaccinationCertificateUri"?: string,
        "sanitaryMinimumUri"?: string,
        "certificateOfNoCriminalRecordUri"?: string,
        "trainingCertificateUri"?: string
    }
}

export type AuthState = {
    tokens: {
        accessToken?: string,
        refreshToken?: string
    },
    user?: UserBody
}

const initialState: AuthState = {
    tokens: {
        accessToken: localStorage.getItem('accessToken') ?? undefined,
        refreshToken: localStorage.getItem('refreshToken') ?? undefined
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.tokens.accessToken = undefined
            state.tokens.refreshToken = undefined
            state.user = undefined

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        },
        setTokens: (state, action: PayloadAction<{ accessToken: string, refreshToken: string }>) => {
            state.tokens.accessToken = action.payload.accessToken
            state.tokens.refreshToken = action.payload.refreshToken
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            const payload = action.payload

            state.tokens = payload.tokens
            state.user = payload.user

            localStorage.setItem('refreshToken', action.payload.tokens.refreshToken!)
            localStorage.setItem('accessToken', action.payload.tokens.accessToken!)
        })
        builder.addCase(loginThunk.rejected, (state, payload) => {
            alert(payload.payload)
        })
        builder.addCase(signUpThunk.fulfilled, (state, action) => {
            const payload = action.payload

            console.log(payload);
            

            state.tokens = payload.tokens
            state.user = payload.user

            localStorage.setItem('refreshToken', action.payload.tokens.refreshToken!)
            localStorage.setItem('accessToken', action.payload.tokens.accessToken!)
        })
        builder.addCase(signUpThunk.rejected, (state, payload) => {
            alert(payload.payload)
        })
        builder.addCase(getUserThunk.fulfilled, (state, action) => {
            const payload = action.payload

            state.user = payload
        })
        builder.addCase(updateUserThunk.fulfilled, (state, action) => {
            const payload = action.payload

            state.user = payload
        })
    }
})



export const { logOut, setTokens } = authSlice.actions

export default authSlice.reducer

