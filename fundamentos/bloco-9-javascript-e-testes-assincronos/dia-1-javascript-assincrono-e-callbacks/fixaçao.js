const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (delay, callbackTemp) => setTimeout(() => console.log(`Mars temperature is: ${callbackTemp()} degree Celsius`), delay());

sendMarsTemperature(messageDelay, getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo