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
      <input
        className=""
        type="text"
        name="hero"
        placeholder="Choose your SuperHero"
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-dark">
        Search
      </button>
    </form>
  );
};

export default Search;
