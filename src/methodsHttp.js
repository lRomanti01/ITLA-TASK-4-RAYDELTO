const url = "http://www.raydelto.org/agenda.php";

const getData = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    }
  } catch (error) {
    return "Error al buscar los datos"
  }
};

const sendData = async (dataToSend) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(dataToSend),
  });

  const data = await response.json().then(responseData => {
    console.log('Respuesta de la API:', responseData);
    alert('Datos enviados correctamente')
  })
  .catch(error => {
    console.error('Error al enviar datos a la API:', error);
    alert('Error al enviar datos')
  });
  return data
};

export { getData, sendData };
