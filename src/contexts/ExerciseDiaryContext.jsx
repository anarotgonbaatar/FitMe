import React, { createContext, useContext, useState } from 'react'

const ExerciseDiaryContext = createContext();

export const useExerciseDiary = () => useContext(ExerciseDiaryContext)

export const ExerciseDiaryProvider = ({ children }) => {
    const [exercisesDone, setExercises] = useState([])

    const addExercise = (exercise) => {
        setExercises(prevExercises => [...prevExercises, exercise])
    };

    const removeExercise = (index) => {
        setExercises(prevExercises => prevExercises.filter((_, idx) => idx !== index));
    };

    return (
        <ExerciseDiaryContext.Provider value={{ exercisesDone, addExercise, removeExercise }}>
            {children}
        </ExerciseDiaryContext.Provider>
    )
}