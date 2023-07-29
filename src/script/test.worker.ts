onmessage = (event) => {
  const data = event.data
  postMessage(data[0] + data[1])
}
