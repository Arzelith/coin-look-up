export const handleApiError = (error) => {
  let apiError;
  if (error.response) {
    apiError = {
      errorMessage: error?.response?.data?.error?.toUpperCase() || '',
      code: error.response.status,
    };
  } else if (error.request) {
    apiError = {
      errorMessage: 'No se puede procesar la solicitud',
      code: 'ERROR',
    };
  } else {
    apiError = {
      errorMessage: 'Ha ocurrido un error inesperado',
      code: 'OOPS!',
    };
  }
  return apiError;
};
