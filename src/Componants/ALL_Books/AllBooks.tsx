import React from 'react';
import STY from './allBooks.module.css';
import img_AllBooks from '../../assets/Unsplash (1).svg'

const AllBooks = () => {
  return (
    <div className={`container  mt-5 ${STY.All_Container}`} style={{ background: 'rgba(252, 235, 234, 1)', borderRadius: '1rem' }}>
      <div className={`align-items-center row ${STY.All_row}`}>
        <div className={`col-lg-6 col-sm-12 col-md-6 ${STY.All_COL1}`}>
          <div className={`${STY.All_IMAGE}`}>
            <img src={img_AllBooks} alt="Stack of books on sale" />
          </div>
        </div>
        <div className={`col-lg-6 col-sm-12 col-md-6 ${STY.All_COL1}`}>
          <div className={`${STY.All_Top_Intro}`}>
            <h3>All books are 50% off now!<br />Don't miss such a deal!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed<br className="d-none d-lg-block" />eu feugiat amet, libero ipsum enim pharetra hac.</p>
          </div>
          <div className={`${STY.All_Time}`}>
            <div className={`${STY.Time_item}`}>
              <div className={`${STY.Time_number}`}>768</div>
              <div className={`${STY.Time_text}`}>days</div>
            </div>
            <div className={`${STY.Time_item}`}>
              <div className={`${STY.Time_number}`}>01</div>
              <div className={`${STY.Time_text}`}>hour</div>
            </div>
            <div className={`${STY.Time_item}`}>
              <div className={`${STY.Time_number}`}>27</div>
              <div className={`${STY.Time_text}`}>min</div>
            </div>
            <div className={`${STY.Time_item}`}>
              <div className={`${STY.Time_number}`}>55</div>
              <div className={`${STY.Time_text}`}>sec</div>
            </div>
          </div>
          <div className={`${STY.pagination}`}>
            <div className={`${STY.pagination_dot} ${STY.active}`}></div>
            <div className={`${STY.pagination_dot}`}></div>
            <div className={`${STY.pagination_dot}`}></div>
            <div className={`${STY.pagination_dot}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
