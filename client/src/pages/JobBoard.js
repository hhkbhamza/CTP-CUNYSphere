import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Job from "../components/showJobs";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "../style/JobPage.css";


function JobBoard() {
  const [jobList, setJobList] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  
  
  useEffect(()=>{
    axios.get("https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=137b3456&app_key=8a717f6eded0254abc2c045dcbccb735")
    .then(response=> setpageCount(Math.ceil(response.data.count / 10), setJobList(response.data.results))
      )
  }, [])

  //Fetching the jobs in a specific page
  const fetchJobs = async (currentPage) => {
    try {
      const response = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/${currentPage}?app_id=137b3456&app_key=8a717f6eded0254abc2c045dcbccb735`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return [];
    }
  };

  const handlePageClick = async ({ selected }) => {
    const currentPage = selected + 1;
    const jobs = await fetchJobs(currentPage);
    setJobList(jobs);
  };
  
  
  return (
    <div>
      <NavBar />
      <h1 className="mb-4">Jobs</h1>
      
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount / 10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      
      {jobList.map((job)=> {
        return <Job key={job.id} job={job} />
      })}
    
    </div>
  );
}

export default JobBoard;
