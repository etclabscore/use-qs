import { useState, useCallback } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import qs, {IParseOptions, IStringifyOptions} from "qs";

type TParse = (str: string, options?: IParseOptions) => any;
type TStringify = (obj: any, options?: IStringifyOptions) => any;

const useQueryParams = (depth?: number): [string, (nextQuery: object) => void, TParse, TStringify] => {
  const history = useHistory();
  const location = useLocation();
  const parse = () => {
    return qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
      depth: depth || 100,
      decoder(str) {
        if (str === "false") {
          return false;
        }
        if (str === "true") {
          return true;
        }
        return decodeURIComponent(str);
      },
    });
  };
  const [query, setInternalQuery] = useState(parse());

  const setQuery = useCallback((nextQuery) => {
    const url = `${location.pathname}?${qs.stringify(nextQuery)}`;
    history.push(url);
    setInternalQuery(nextQuery);
  }, [location.pathname, history]);

  return [query, setQuery, qs.parse, qs.stringify];
};

export default useQueryParams;
