import Hobbies from "../../Components/Hobbies/hobbies-component";
import { HobbiesDB } from "../../Components/Hobbies/hobbies-db";

function PersonalLife() {
    return (
        <div>
            <p className="h1 title text-center">Personal Life</p>
            <div className="container">
                <div className="row text-center pt-5">
                    {HobbiesDB.map((x, index) =>( 
                            <Hobbies data={x} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PersonalLife;