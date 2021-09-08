import React from "react";
import { useHistory } from "react-router";
import { useForm } from "../customHooks/useForm";

const Search = () => {
  const [values, handleInputChange, reset] = useForm({
    hero: "",
  });
  const { hero } = values;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push(`/search?hero=${hero}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Choose your hero"
          name="hero"
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary btn-primary text-white"
            type="submit"
          >
            Button
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
