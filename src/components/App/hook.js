import {useState, useEffect} from "react";

const UseApiData = () => {
    const [data, setData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(true);
    useEffect(() => {
      fetch("https://venbest-test.herokuapp.com/.")
        .then((res) => res.json())
        .then(
          (data) => {
            setIsLoaded(false);
            setData(data);
          },
          (error) => {
            setIsLoaded(false);
            setError(!error);
          }
        );
    }, [setData]);
    return {data, setData, isLoaded, setIsLoaded, error, setError};
}

const UseDataSearchPanel = (data) => {

    const [searchName, setSearchName] = useState("");
    const [searchLast, setSearchLast] = useState("");
    const [searchAge, setSearchAge] = useState("");
    const [checkMale, setCheckMale] = useState(false);
    const [checkFemale, setCheckFemale] = useState(false);
  
    const [arr, setArr] = useState([]);
  
    useEffect(() => {
      if (checkMale === true) {
        setArr([...data.filter((item) => item.sex === "m")]);
        setCheckFemale(false);
      } else if (checkFemale === true) {
        setArr([...data.filter((item) => item.sex === "f")]);
        setCheckMale(false);
      }
    }, [checkFemale, checkMale, data]);
  
    useEffect(() => {
      if (typeof searchAge !== "number") {
        setArr([...data.filter((item) => item.age === Number(searchAge))]);
      }
      if (searchAge === "") {
        return setArr(data);
      }
    }, [data, searchAge, setArr]);
  
    useEffect(() => {
      setArr([...data.filter((item) => item.name.includes(searchName))]);
    }, [data, searchName, setArr]);
  
    useEffect(() => {
      setArr([...data.filter((item) => item.lastname.includes(searchLast))]);
    }, [data, searchLast, setArr]);
  
    function regFunck(str) {
      return str.replace(/^0+,/, "");
    }
    const onFunk = (str) => {
      return str.replace(/\D/g,'')
    }


    
    const onBlurHide = () => {
        setCheckMale(false)
        setCheckFemale(false)
    }
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    const onChange = (event) => {
    const { value } = event.target;
    setSearchName(capitalizeFirstLetter(value));
};
  
const onChangeLast = (event) => {
    const { value } = event.target;
    setSearchLast(capitalizeFirstLetter(value));
};
const onChangeAge = (event) => {
    const { value } = event.target;
    setSearchAge(regFunck(onFunk(value)));
};
const onChangeTargetMale = (e) => {
    if (e.target.name === "M") {
        setCheckMale(true);
        setCheckFemale(false);
      } else if (e.target.name === "W") {
        setCheckFemale(true);
        setCheckMale(false);
      }
    };
    const onChangeTargetFemale = (e) => {
      if (e.target.name === "W") {
        setCheckFemale(true);
        setCheckMale(false);
      } else {
        setCheckMale(true);
        setCheckFemale(false);
      }
    };
  
    const onSubmitChange = (e) => {
      e.preventDefault();
    };


    return {
 searchName,
setSearchName,
searchLast,
setSearchLast,
searchAge,
setSearchAge,
checkMale,
setCheckMale,
checkFemale,
setCheckFemale,
arr,
setArr,
onChange,
onChangeLast,
onChangeAge,
onChangeTargetMale,
onChangeTargetFemale,
onSubmitChange,
onBlurHide
    }
}

const useAppState = () => {
    const apiLoadData = UseApiData();
    const dataSearchPanel = UseDataSearchPanel(apiLoadData.data)
    return {...apiLoadData, ...dataSearchPanel}
}
export default useAppState;