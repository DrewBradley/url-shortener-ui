export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => {return data.urls})
}

export const getShortUrls = (urlToShorten, urlTitle) => {
  const postBody = JSON.stringify({
    long_url: urlToShorten, 
    title: urlTitle
  })
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: postBody,
    headers: {
      "Content-type": "application/json"
    },
  })
      .then(response => response.json())
      .then(data => { return data })
}
