import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [offset, setOffset] = useState(0);
  const limit: number = 10;
  const { data, loading, error } = useQuery(gql`
     query  {
        videos(offset:${offset}, limit: ${limit}) {
          id,
          videoId,
          title,
          description,
          thumbnailUrl
      }
    }
  `,
  );

  const countVideos = useQuery(gql`
     query {
      countVideos
     }
  `,
  );

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
        <h1 className='text-center'> Youtube Video Fetcher</h1>
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

          {loading &&
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          }
          {displayVideos(data?.videos)}

        </div>

        <hr />

        <nav aria-label="Page navigation example">
          <ul className="d-flex justify-content-center pagination">
            <li className={`${currentPage != 1 ? "page-item" : "visually-hidden"}`}>
              <a className="page-link" onClick={() => {
                setCurrentPage(prevState => prevState - 1);
                setOffset(prevState => prevState - limit);
              }} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" onClick={() => {
              setOffset((currentPage - 1) * limit);
            }}>{currentPage}</a></li>
            <li className={`${currentPage * limit < countVideos?.data?.countVideos ? "page-item" : "visually-hidden"}`}>
              <a className="page-link" onClick={() => {
                setCurrentPage(prevState => prevState + 1);
                setOffset(prevState => prevState + limit);
              }} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </>
  )
}