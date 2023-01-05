import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [requestParams, setRequestParams] = useState("");


//   const results = useQuery(["search", requestParams], fetchSearch);


  return (
    <div className="">
      <form
        onSubmit={(event: MouseEvent): void => {
        event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);
          const loc = formData.get("location")?.toString() ?? ""
          setRequestParams(loc);
        }}
      >

        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>


        <button>Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
