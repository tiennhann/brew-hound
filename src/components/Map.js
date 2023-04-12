import { Link } from "react-router-dom";

export const Map=() => {
    return(
        <div className="map">
            <h2>Breweries</h2>
            <Link to="/breweries">
                <button>Find Nearby Breweries</button>
            </Link>
        </div>
    )
}

