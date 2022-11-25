export default async (form, token) => {
  const info = { success: null, error: null }
  const url = `${process.env.REACT_APP_SERVER_URL}/post`
  const content = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
    },
    method: 'POST',
    body: JSON.stringify(form)
  }
  const response = await fetch(url, content)
  const json = await response.json()
  if (response.ok) {
    info.success = json
  } else {
    info.error = json.errors
  }
  return info
}