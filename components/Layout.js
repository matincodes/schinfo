import Nav from "./Nav";
import School from "./School";

export default function Layout(){
    return (
        <div>
            <div className="main h-screen">
                <Nav />
                <School/>
            </div>
            
        </div>
    )
}