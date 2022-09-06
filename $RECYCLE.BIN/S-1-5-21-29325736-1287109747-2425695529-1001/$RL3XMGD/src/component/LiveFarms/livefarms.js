import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Farms from '../Farms/farm';
import Icon1 from "../../assests/imgs/icon2.png"
import LogoIcon from "../../assests/imgs/logo-nunu.png"
import "../Farms/farm.css";
import { useNavigate } from "react-router-dom";

const feed = [
	{name:"Leroy Roy" , date:"122 Days Left ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"97 Days Left", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"56 Days Left ", game_id:"#5747e57423", eth:"0.997"},
{name:"Leroy Roy" , date:"62 Days Left ", game_id:"#5747e57423", eth:"0.997"},
]


function Items({ currentItems }) {
    const navigate = useNavigate();

  const moveDetailpage= () =>{
    navigate("/detail-page")
  }
  return (
      <>
    <section class="recent-winners">
    <div class="container">
            <div class="flex ">
                <div class="">
                    <div class="section-heading">					 
                        <h2 class="title">
                                Live Programs
                        </h2>
                         
                    </div>
                </div>
            </div>
            <div class="live-farm-cards" >
                {feed.map((feed) => (
                 <div class="single-card col-lg-6 mb-3" onClick={moveDetailpage}>
                 <div
                   class="single-winer"
                   style={{
                     background: "url(images/bg/banner1.png)",
                     backgroundPositon: "top center",
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover",
                   }}
                   onClick={moveDetailpage}
                 >
                   <div className="card-glass"></div>
                   <div class="top-area">
                     <div class="left">
                      <img src={LogoIcon} alt="logo-img" width={120} height={50}/>
                     </div>
                     <div class="right">
             <img src={Icon1} alt="eth" width={35} height={40}/>
             <div className="farm-type">LP Farm</div>
                     </div>
                   </div>
           <div class="bottom-area">				
                     <div class="left-sub">NNT token</div>
                     <div class="right">
                       <div class="days-lefts">APY 562.85%</div>
                     </div>
                   </div>
                   <div class="bottom-area">				
                     <div class="left">{feed.name}</div>
                     <div class="right">
                       <div class="days-lefts">{feed.date}</div>
                     </div>
                   </div>
                 </div>
               </div>
                ))}
            </div>
            
    </div>
</section>
</>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(feed.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(feed.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % feed.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems}/>
     
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
export default PaginatedItems;