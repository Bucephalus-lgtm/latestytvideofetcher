import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import './App.css';

// const VIDEOS_QUERY = gql`
//  query Videos($offset: Int, $limit: Int) {
//     videos(offset: $offset, limit: $limit) {
//       id,
//       videoId,
//       publishedDateTime,
//       title,
//       description,
//       thumbnailUrl
//   }
// }
// `;

const VIDEOS_QUERY = gql`
 query Videos {
    videos {
      id,
      videoId,
      publishedDateTime,
      title,
      description,
      thumbnailUrl
  }
}
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { data, loading, error } = useQuery(VIDEOS_QUERY,
    // {
    //   variables: {
    //     offset: 0,
    //     limit: 2
    // }}
  );
  const videosPerPage: number = 2;
  const [videos, setVideos] = useState([]);
  const totalVideos: number = 5;

  const filterVideos = (arr, query: string) => {
    if (!query || query == "") return arr;
    return arr.filter(
      (element) => {
        return element?.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
          || element?.description.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    );
  };

  const renderVideos = (videos) => {
    return (
      <>
        {
          videos && videos.length > 0 && videos.map(vid => (
            <div className="p-2 m-2 g-col-6 card" style={{ width: '18rem' }}>
              <img src={`${vid?.thumbnailUrl}`} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{`${vid?.title}`}</h5>
                <p className="card-text">{`${vid?.description}`}</p>
                <a target="_blank" href={`https://www.youtube.com/watch?v=${vid?.videoId}`} className="btn btn-primary">Watch Video</a>
              </div>
            </div>
          ))
        }
      </>
    );
  }

  const displayVideos = (videos) => {
    if (!searchQuery) return renderVideos(videos);
    return renderVideos(filterVideos(videos, searchQuery));
  };

  return (
    <>
      <div className="container">
        <h1 className='text-center'> Youtube Clone</h1>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder='Search with title or description...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <hr />

        <div className='row gap-3'>

          {displayVideos(data?.videos)}

        </div>

        <hr />

        <nav aria-label="Page navigation example">
          <ul className="d-flex justify-content-center pagination">
            <li className={`${currentPage != 1 ? "page-item" : "visually-hidden"}`}>
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className={`${currentPage * videosPerPage < totalVideos ? "page-item" : "visually-hidden"}`}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </>
  )
}