import { useSelector } from "react-redux";

const BookDetails = () => {
    let selected = useSelector(state => state.selectedBook)
    return (<>
        <div>{selected.name}</div>
        <div>{selected.numPages}</div>
        <div>{selected.sofer}</div>
    </>);
}

export default BookDetails;