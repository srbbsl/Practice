import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router";
import { mealDetailApi } from "../app/apis";



export const ItemDetail = () => {

    const { id } = useParams();
    const [data, setData] = useState();
    const [isLoad, setTransition] = useTransition();
    
       

    const getData = () => {
        setTransition( async() => {
            try {
                const response = await axios.get(mealDetailApi, {
                    params: {
                        i: id
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
    }, []);

    if (isLoad) {
        return <h1>Loading....</h1>
    }
    console.log(data);

    return(
        <div>
            {/* {data && data.meals.map((meal) => {
                return <div key={meal.idMeal}></div>
            })} */}
        </div>
    )
};