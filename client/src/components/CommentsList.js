import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";

export default function CommentSection(props) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch(`/api/comments/resumes/${props.resumeId}`);
        let allPosts = await response.json();
        setComments(allPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all comments", error);
        setError(true);
      }
    }
    getData();

    return () => {
      // clean up function
    };
  }, []);

  if (error) return <ErrorAlert details="Comments are not loading" />;
  if (loading) return <LoadingSpinner />;
  console.log({ comments }, { props });
  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        {comments.map((comment) => (
          <li key={comment.id + comment.createdAt}>{comment.content}</li>
        ))}
      </div>
    </div>
  );
}