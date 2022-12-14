export default async (form) => {
  const info = { success: null, error: null }
  const url = `${process.env.REACT_APP_SERVER_URL}/auth/login`

  const content = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(form)
  }

  const response = await fetch(url, content)
  const json = await response.json()

  if (response.ok) {
    info.success = json
  } else {
    const { type, message } = json
    info.error = { [type]: message }
  }
  return info
  // response.ok && navigation.navigate('posts')
}