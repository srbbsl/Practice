import {
    List,
    ListItem,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router";
   
  export function ListWithAvatar({ categories }) {
    const nav = useNavigate();
    return (
      <Card className="w-96">
        <List className="space-y-4">
            {categories?.map((cata) => {  //? halda spelling mistake vayema loop ma jadaina ra crash hudaina
              // console.log(cata);
              return <ListItem 
                      onClick={() => nav(`/category-items/${cata.strCategory}`)}
                      key={cata.idCategory}
                      className="flex gap-5"
                      >
                        
                          <Avatar 
                            size="xl"
                            variant="circular" 
                            alt="candice" 
                            src={cata.strCategoryThumb} />
                       
                        <div>
                          <Typography 
                            variant="h6" 
                            color="blue-gray">
                            {cata.strCategory}
                          </Typography>

                          <p 
                            className="line-clamp-3">
                            {cata.strCategoryDescription}
                          </p>
                        </div>
                    </ListItem>
            })}

          
          
        </List>
      </Card>
    );
  }