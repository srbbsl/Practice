import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useState, useTransition } from "react";
import { ListWithAvatar } from "../Component/ListWithAvatar";


export const Home = () => {

    const [data, setData] = useState([]);
    const [dataAvatar, setDataAvatar] = useState();
    const [isLoad, setTransition] = useTransition();
    const [err, setErr] = useState();
    

    const getData = async () => {
        try {
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            setData((prev) => res.data.categories);
        } catch (err) {
            console.log(err);
        }
    }; 
    
    const handleClick = () => {
        getData();
    };

    const getDataAvatar = () => {
        setTransition(async () => {
            try {
                const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setDataAvatar((prev) => res.data);
            } catch (err) {
                setErr(err.message);
                
            }
        })        
    };



    const handleClickAvatar = () => {
        getDataAvatar();
    };
    

    return(
        <div className="p-4 space-y-4">
            <Button onClick={handleClick}>Click</Button>
            
            <div>
               {data.map((item, index) => {
                  return <div key={index}> 
                    <h3>{item.strCategory}</h3>
                    <img
                     src={item.strCategoryThumb}
                     alt={item.strCategory}
                     />
                     <p>{item.strCategoryDescription}</p>
                    </div>
                })}
                
            </div>

            <div>
                <Button onClick={handleClickAvatar}>List With Avatar</Button>
                {isLoad && <h1>Loading......</h1>}
                {err && <h1>{err}</h1>}
                {dataAvatar && <ListWithAvatar categories={dataAvatar.categories}/>}
            </div>
        </div>
    )
};