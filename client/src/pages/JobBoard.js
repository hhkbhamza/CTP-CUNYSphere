import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import Job from "../components/showJobs";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "../style/JobPage.css";
import SearchForm from "../components/JobSearch";


function JobBoard() {
  const [params, setParams] = useState({});
  const [jobList, setJobList] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  
  
  useEffect(()=>{
    axios.get(encodeURI(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=137b3456&app_key=8a717f6eded0254abc2c045dcbccb735`))
    .then(response=> setpageCount(Math.ceil(response.data.count / 10), setJobList(response.data.results))
      )
  }, [])

  //Fetching the jobs in a specific page
  const fetchJobs = async (currentPage, currentSearch) => {
    try {
      const response = await axios.get(encodeURI(`https://api.adzuna.com/v1/api/jobs/us/search/${currentPage}?app_id=137b3456&app_key=8a717f6eded0254abc2c045dcbccb735&what_or=${currentSearch}`));
      return response.data.results;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      return [];
    }
  };

  const handlePageClick = async ({ selected }) => {
    const currentPage = selected + 1;
    const currentSearch = params.what_or || '';
    const jobs = await fetchJobs(currentPage, currentSearch);
    setJobList(jobs);
  };
  
  const handleParamChange = async ({ value }) => {
    setParams(prevParams => {
      return { ...prevParams, what_or: value }; 
    });
  
    const currentPage = 1;
    const currentSearch = value;
    const searchJobs = await fetchJobs(currentPage, currentSearch);
    setJobList(searchJobs);
  };

  return (
    <div>
      <NavBar />
      <div className="background-image" />
      <h1 className="" style={{textAlign:"center"}}>Job Board</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
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
