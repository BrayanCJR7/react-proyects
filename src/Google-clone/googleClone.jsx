import {Header} from "./component/header";
import {SearchSection} from "./component/search";
import {useDocumentTitle} from '../useDocumentTitle'

const GoogleClone = () => {
    useDocumentTitle('Google Clone')
    return (
        <>
            <Header/>
            <SearchSection/>
        </>
    )
}

export {GoogleClone}