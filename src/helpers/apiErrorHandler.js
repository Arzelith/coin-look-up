export const handleApiError = (error) => {
  let apiError;
  if (error.response) {
    const status = error?.response?.status;
    apiError = {
      errorMessage:
        status === 429
          ? 'Demasiadas solicitudes'
          : status === 404
          ? 'La página que busca no existe'
          : error?.message || '',
      code: `ERROR: ${status}`,
    };
  } else if (error.request) {
    if (error.code === 'ERR_NETWORK') {
      apiError = {
        errorMessage: 'Demasiadas solicitudes',
        code: 'ERROR: 429',
      };
    } else {
      apiError = {
        errorMessage: 'No se puede procesar la solicitud',
        code: 'ERROR',
      };
    }
  } else {
    apiError = {
      errorMessage: 'Ha ocurrido un error inesperado',
      code: 'OOPS!',
    };
  }
  return apiError;
};
