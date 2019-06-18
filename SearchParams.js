import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    <div className="search-params">
      <form>
        <label htmlfor="location">
          location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
