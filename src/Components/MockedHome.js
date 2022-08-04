import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../store/galleryState";
import {ImageList, ImageListItem} from "@mui/material";

function Home() {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.gallery.photos);

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch])

    console.log(photos);

    return (
        <main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <h2>Welcome to the homepage!</h2>
            <h1>Photo gallery</h1>
            <ImageList>
                {photos.map((photo) => (
                    <ImageListItem key={photo.id} sx={{margin: 2}}>
                        <img
                            src={photo.download_url}
                            alt={photo.author}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </main>
    );
}

export default Home