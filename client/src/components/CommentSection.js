import React, { useState, useRef } from "react";
import cn from "classnames";
import useDynamicHeightField from "./useDynamicHeightField";
import "./style.css";
// import "../../src/pages/style/CommentSection.css";

const INITIAL_HEIGHT = 46;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
 */
export default function CommentBox(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [commentValue, setCommentValue] = useState("");


  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, commentValue);


  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };


  const onChange = (e) => {
    setCommentValue(e.target.value);
    //setMatchingId(0);
  };


  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("send the form data somewhere");
   
    try {
        let response = await fetch("/api/comments", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: commentValue,
            matching_id: props.resumeId,
           
          }),
        });
 
        if (response.ok) {
          setSuccess(true);
          setCommentValue("");
          setIsExpanded(false);

        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Server error while creating a new micro post", error);
        setError(true);
      }
     
  };


  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
        }}
      >
        <label htmlFor="comment">What are your thoughts?</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="Thoughts?"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" disabled={commentValue.length < 3}>
            Respond
          </button>
        </div>
      </form>
    </div>
  );
}

