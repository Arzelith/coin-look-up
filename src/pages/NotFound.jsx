import DisplayError from "../components/DisplayError";
const NotFound = () => {
  return <DisplayError code={404} errorMessage={'LA PÁGINA QUE BUSCA NO EXISTE'}/>;
};

export default NotFound;
