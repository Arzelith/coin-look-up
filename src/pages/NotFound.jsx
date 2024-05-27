import DisplayError from "../components/DisplayError";
const NotFound = () => {
  return <DisplayError code={`ERROR: 404`} errorMessage={'La página que busca no existe'}/>;
};

export default NotFound;
