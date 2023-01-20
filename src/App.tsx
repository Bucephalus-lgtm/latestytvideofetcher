import React, { useState } from 'react';
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const videosPerPage: number = 10;
  const totalVideos: number = 100;

  const demoVidoes = [
    {
      thumbnailUrl: "https://www.pliagedepapier.com/gallery/albums/userpics/12780/DogEvie-JasonKuG.jpg",
      title: 'Youtube Title 1',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: '#'
    },
    {
      thumbnailUrl: "https://www.pliagedepapier.com/gallery/albums/userpics/12780/DogEvie-JasonKuG.jpg",
      title: 'Youtube Title 2',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: '#'
    },
    {
      thumbnailUrl: "https://www.pliagedepapier.com/gallery/albums/userpics/12780/DogEvie-JasonKuG.jpg",
      title: 'Youtube Title 3',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      link: '#'
    }
  ]

  return (
    <>
      <div className="main container">
        <h1 className='text-center'> Youtube Clone</h1>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder='Search' />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>

        <hr />

        <div className='row gap-3'>

          {
            demoVidoes && demoVidoes.length > 0 && demoVidoes.map(vid => (
              <div className="p-2 m-2 g-col-6 card" style={{ width: '18rem' }}>
            <img src={`${vid?.thumbnailUrl}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{`${vid?.title}`}</h5>
              <p className="card-text">{`${vid?.description}`}</p>
              <a href={`${vid?.link}`} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            ))
          }

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
            <li className={`${currentPage*videosPerPage < totalVideos ? "page-item" : "visually-hidden"}`}>
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