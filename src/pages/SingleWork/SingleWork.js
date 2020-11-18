import React,
{
    useEffect,
    useState,
    useRef,
    // lazy,
    Suspense
} from 'react';
import "./SingleWork.scss";
import useFetch from '../../utils/useFetch';
import HeaderOne from '../../shared/components/HeaderOne/HeaderOne';

export default function SingleWork() {
    // const urlParams = new URLSearchParams(window.location.search);
    // const postId = urlParams.get('id');
    // console.log("[ SingleWork 2 ]: postId = ", postId);

    // For Hashrouter only:
    const urlHash = window.location.hash;
    // console.log("[ SingleWork ]: urlHash = ", urlHash);
    const postId = urlHash.split('id=')[1];
    // console.log("[ SingleWork ]: postId = ", postId );

    let postIdRef = useRef();
    postIdRef = postId;
    // console.log("[ SingleWork ]: postIdRef = ", postIdRef);

    // const fetchRes = useFetch(`/john/wp-json/wp/v2/work/${postIdRef}`);
    const fetchRes = useFetch(`http://localhost:1337/works/${postIdRef}`);
    const ref = useRef();
    let [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!fetched && !fetchRes.loading) {
            console.log("[ SingleWork ]: fetchRes = ", fetchRes);
            // console.log("[ SingleWork ]: Title = ", fetchRes.data[10][1].rendered);
            // console.log("[ SingleWork ]: content = ", fetchRes.data[11][1].rendered);
            // console.log("[ SingleWork ]: ref.current = ", ref.current);

            ref.current = fetchRes;
            setFetched(true);
            return () => fetched;
        }
    }, [fetchRes, fetched]);


    return(
        <div className="container">
            {fetched ?
                <section className="SingleWork">
                    <HeaderOne content={ref.current.data.post_title} />
                    <p
                        className="project-description"
                        dangerouslySetInnerHTML={{__html: ref.current.data.project_description}}></p>

                    <Suspense fallback={<h1 style={{fontSize: "30px"}}>L O A D I N G ...</h1>}>
                        <div
                            className="image-container"
                            dangerouslySetInnerHTML={{__html: ref.current.data.post_contentf}}></div>
                    </Suspense>
                </section>
                : null
            }
        </div>
    );
}
