import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router";
import { MealCard } from "../Component/MealCard";


export const CategoryItems = () => {

    const [data, setData] = useState();
    const [isLoad, setTransition] = useTransition();
    
    const { label } = useParams();
    // console.log(label);

    const getData = () => {
        setTransition( async() => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
                    params: {
                        c: label
                    }
                });
                setData(response.data);
            } catch (err) {
                console.log(err);
            }
        })
    };

    useEffect(() => {
        getData();
    }, [])

    console.log(data);

    return(
        <div className="p-4 grid grid-cols-4 gap-5">
            {data && data.meals.map((meal) => {
                return <MealCard key={meal.idMeal} meal={meal} />
            })}
        </div>
    )
};