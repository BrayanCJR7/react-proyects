import {Nav} from "./Components/nav";
import {useDocumentTitle} from './useDocumentTitle'

const Home = () =>{
    useDocumentTitle('Home title 👻')
    return(
        <>
            <Nav/>
        </>
    )
}
export {Home}