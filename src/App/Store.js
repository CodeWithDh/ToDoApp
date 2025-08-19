import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Features/ToDos";

export const store = configureStore({
    reducer:reducer
})