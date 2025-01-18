import { useNavigate } from "react-router";
import { Image, Shimmer } from "react-shimmer";


export const MealCard = ( {meal} ) => {
    console.log(meal);
    const nav = useNavigate();
    return(
        <figure 
        onClick={() => nav(`/item-detail/${meal.idmeal}`)}
        className="relative h-70 w-full cursor-pointer">
             <Image
                src={meal.strMealThumb}
                fallback={<Shimmer width={800} height={600} />}
            />
            {/* <img
                className="h-full w-full rounded-xl object-cover object-center"
                src={meal.strMealThumb}
                alt="nature image"
            /> */}
            <figcaption className="absolute bottom-8 rounded-xl border border-white bg-white/75 py-3 px-3 shadow-lg shadow-black saturate-200 backdrop-blur-sm">
                <div>
                    <p>
                        {meal.strMeal}
                    </p>
                </div>
            </figcaption>

        </figure>
    )
};