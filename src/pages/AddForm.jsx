import { Button, Input } from "@material-tailwind/react";



export const AddForm = () => {
    return (
      <div className="max-w-[400px] p-5">
        <form className="space-y-4">
          <div>
            <Input 
              label="title"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>

          
            <Button>Submit</Button>
          
          
        </form>
      </div>
    )
};