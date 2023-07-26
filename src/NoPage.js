import "./NoPage.css";
import SearchOffIcon from '@mui/icons-material/SearchOff';

function NoPage() {
    return(
        <>
        <div className="error__message">
            <strong>Sorry, we cannot find the page you are looking for.</strong>
        </div>
        <div className="search__off">
            <SearchOffIcon />
        </div>
        </>
    )
}
export default NoPage;