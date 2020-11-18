import React from 'react';
import { Link } from 'react-router-dom';
import './ThreeColThumbnail.scss';
import ThumbnailArrowLink from '../../ThumbnailArrowLink/ThumbnailArrowLink';

export default function ThreeColThumbnail(props) {
    // console.log("[ ThreeColThumbnail ]: props = ", props);

    // console.log(props.encoded);
    // let getNodes = str => Object.assign({}, new DOMParser().parseFromString(str, 'text/html').body.childNodes);
    // let nodes = getNodes(props.post[1].encoded);
    // console.log("IMG nodes: ", nodes);

    const thumbNailUrl = props.post.featured_image;
    const postTitle = props.post.post_title;
    const postId = props.post.id;
    const externalUrl = props.post[`${props.externalUrlPropName}`];

    // console.log("Post title = ", props.title.rendered);
    // console.log("[ ThreeColThumbnail ]: Post id = ", props.id);
    // console.log("external link = ", props.post[props.externalUrlPropName]);
    // console.log("[ ThreeColThumbnail ]: thumbNailUrl = ", thumbNailUrl );

    return(
        <React.Fragment>
            {externalUrl
                ?   <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                        <div className="ThreeColThumbnail" key={postId}>
                            <div className="thumb-inner-container">
                                {<img src={thumbNailUrl} alt={`${postTitle}`} />}
                                <ThumbnailArrowLink title={postTitle} />
                            </div>
                        </div>
                    </a>

                :   <Link to={`/work/single/?id=${postId}`}>
                        <div className="ThreeColThumbnail" key={postId}>
                            <div className="thumb-inner-container">
                                {<img src={thumbNailUrl} alt={`${postTitle} thumbnail`} />}
                                <ThumbnailArrowLink title={postTitle} />
                            </div>
                        </div>
                    </Link>
            }
        </React.Fragment>
    );
}

// <Link to={`/work/single/?id=${postId}`}>
// <div className="ThreeColThumbnail" key={postId}>
// <div className="thumb-inner-container">
// {<img src={thumbNailUrl} alt={`${postTitle} thumbnail`} />}
// <ThumbnailArrowLink title={postTitle} />
// </div>
// </div>
// </Link>
// john/?post_type=work#038;p=180
// <Link to={`/work/?post_type=work&id=${postId}`}>




// <a href="">
// <div class="thumb-inner-container">
// {<img src={thumbNailUrl} />}
// <ThumbnailArrowLink title={postTitle} />
// </div>
// </a>

// <div class="arrow-link thumb">{postTitle}<span class="arrow"></span></div>
