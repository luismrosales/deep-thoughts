import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";
import ThoughtList from "../components/thoughtList";

const Home = () => {
  const { loading, data, error } = useQuery(QUERY_THOUGHTS);
  if (error) {
    console.log(error);
  }
  const thoughts = data?.thoughts || [];
  console.log(thoughts);
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
