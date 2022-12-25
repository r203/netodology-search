import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchField, clearItems } from '../../redux/searchSlice'

function Search() {
  const { items, loading, error, search } = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const { value } = event.target;
    dispatch(changeSearchField(value))
  }
  
  const hasQuery = search.trim() !== '';
  useEffect(() => {
    if(!hasQuery) {
      dispatch(clearItems())
    }
  
  }, [hasQuery, dispatch])
  return (
    <>
      <div>
        <input type="search"
          value={search} 
          onChange={handleSearch}
        />
      </div>
      <div>
        {!hasQuery && <p>Type something to search...</p>}
        {loading && <p>Loading...</p>}
        {error 
          ? <p>Error!!!</p> 
          : <ul>
                {items.map(o => {
                  return (
                    <li key={o.id}>
                      {o.name}
                    </li>
                  )
                })}
            </ul>
        }
      </div>
    </>
  );
}

export default Search;