import { dateFormatter } from "@/helpers/dateFormatter";
import React from "react";
import CommentForm from "./forms/CommentForm";

const Comments = () => {
  return (
    <div className={`w-full md:px-auto my-8`}>
      <div className={`flex flex-col gap-4 w-full max-w-3xl`}>
        {/* {blog?.comments.map((comment, index) => (
          <div key={index}>
            <div className="flex gap-8 my-2 w-full">
 
              <div className={`w-full`}>
                <div className="my-2">
                  <h2 className={`text-lg md:text-xl lg:text-2xl`}>
                    {comment?.first_name} {comment?.last_name}
                  </h2>
                  <small className={``}>
                    {dateFormatter(new Date(comment?.created))}
                    {comment?.created}
                  </small>
                </div>

                <p>{comment?.description}</p>
              </div>
            </div>
            <span className="w-full bg-slate-400 h-[1px]" />
          </div>
        ))} */}
        <CommentForm />
      </div>
    </div>
  );
};

export default Comments;
