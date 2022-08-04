import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../store/galleryState";
import {ImageList, ImageListItem, Typography} from "@mui/material";

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
            <Typography sx={{color: 'red'}}>
                Welcome to the homepage!
            </Typography>
            <h1>Photo gallery</h1>
            <ImageList>
                {photos.map((photo) => (
                    <ImageListItem key={photo.id} sx={{margin: 2, borderRadius: 2, border: 1, padding: 1}}>
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