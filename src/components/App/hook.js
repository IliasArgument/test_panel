import { useState, useEffect } from "react";

const useApiData = () => {
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
  return { data, setData, isLoaded, setIsLoaded, error, setError };
};

const useDataSearchPanel = (data) => {
  const [searchName, setSearchName] = useState("");
  const [searchLast, setSearchLast] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [checkMale, setCheckMale] = useState(false);
  const [checkFemale, setCheckFemale] = useState(false);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    if (checkMale === true) {
      const filterMale = [...data.filter((item) => item.sex === "m")];
      setNewArr(filterMale);
      setCheckFemale(false);
    } else if (checkFemale === true) {
      const filterFemale = [...data.filter((item) => item.sex === "f")];
      setNewArr(filterFemale);
      setCheckMale(false);
    }
  }, [checkFemale, checkMale, data]);

  useEffect(() => {
    if (typeof searchAge !== "number") {
      const filterAge = [
        ...data.filter((item) => item.age === Number(searchAge)),
      ];
      setNewArr(filterAge);
    }
    if (searchAge === "") {
      return setNewArr(data);
    }
  }, [data, searchAge, setNewArr]);

  useEffect(() => {
    const filterName = [
      ...data.filter((item) => item.name.includes(searchName)),
    ];
    setNewArr(filterName);
  }, [data, searchName, setNewArr]);

  useEffect(() => {
    const filterLastName = [
      ...data.filter((item) => item.lastname.includes(searchLast)),
    ];
    setNewArr(filterLastName);
  }, [data, searchLast, setNewArr]);

  const onFunckWithoutZero = (str) => {
    return str.replace(/^0+,/, "");
  };
  const onFunckOnlyNumber = (str) => {
    return str.replace(/\D/g, "");
  };

  const onBlurHide = (e) => {
    const names = e.target.name;
    if(names === 'name' || names === 'lastName' || names === 'age') {
      setNewArr(data)
      setSearchName("");
      setSearchLast("");
      setSearchAge("");
      setCheckMale(false);
      setCheckFemale(false);
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const onChange = (event) => {
    const { value } = event.target;
    if (event.target.name === "name") {
      setSearchName(capitalizeFirstLetter(value));
    } else if (event.target.name === "lastName") {
      setSearchLast(capitalizeFirstLetter(value));
    } else if (event.target.name === "age") {
      setSearchAge(onFunckWithoutZero(onFunckOnlyNumber(value)));
    }
  };

  const onChangeCheck = (e) => {
    if (e.target.name === "M") {
      setCheckMale(true);
      setCheckFemale(false);
      e.stopPropagation();
    } else if (e.target.name === "F") {
      setCheckFemale(true);
      setCheckMale(false);
      e.stopPropagation();
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
    newArr,
    setNewArr,
    onChange,
    onChangeCheck,
    onSubmitChange,
    onBlurHide,
  };
};

const useAppState = () => {
  const apiLoadData = useApiData();
  const dataSearchPanel = useDataSearchPanel(apiLoadData.data);
  return { ...apiLoadData, ...dataSearchPanel };
};
export default useAppState;
