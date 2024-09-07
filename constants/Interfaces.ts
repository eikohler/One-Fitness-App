import { Href } from "expo-router";

export interface ListData {
    title: string;
    info: (string|number)[];
    url: Href;
}

export interface Routine{
    routine_id: number
    title: string
    last_note: string
}

export interface Workout{
    workout_id: number
    title: string
    last_date: string
    last_note: string
}

export interface Exercise{
    exercise_id: number
    title: string
    ex_description: string
}