export const handleApiError = (error) => {
  let apiError;
  if (error.response) {
    apiError = {
      errorMessage: error?.response?.data?.error?.toUpperCase() || '',
      code: error.response.status,
    };
  } else if (error.request) {
    apiError = {
      errorMessage: 'NO SE PUEDE PROCESAR LA SOLICITUD',
      code: 'ERROR',
    };
  } else {
    apiError = {
      errorMessage: 'HA OCURRIDO UN ERROR INESPERADO',
      code: 'OOPS!',
    };
  }
  return apiError;
};
