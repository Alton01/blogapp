import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post ({_id,title,summary,cover,content,createdAt,author}) {

    return (
        <div className="post">
       
              <div className="image">
                <img src={'https://blogaapp-api.onrender.com/'+cover} />
              </div>
              <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                  <a className="author">{author.username}</a>
                  <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
                <p className="summary" >{summary}</p>
                  <Link style={{textDecoration: 'none'}} to={`/post/${_id}`}>
                    <button>Read More</button>
                  </Link>
              </div>
        </div>
    );
}