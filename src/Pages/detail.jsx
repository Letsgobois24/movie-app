import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../services/movies.service";
import Layout from "../components/Layout";
import DetailHeader from "../components/Fragments/DetailHeader";

const DetailPage = () => {
    const id = Number(useParams().id)
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovieDetail(id).then((res) => {
            setMovie(res.data)
        });
    }, [id]);

    return (
        <Layout>
            <div className="p-6">
                <DetailHeader movie={movie} />
            </div>
        </Layout>
    );
}

export default DetailPage;