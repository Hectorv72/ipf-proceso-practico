export default async () => {
  const url = `${process.env.REACT_APP_SERVER_URL}/post`
  // const content = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   method: 'POST',
  //   body: JSON.stringify(form)
  // }
  const response = await fetch(url)
  return (await response.json()).posts.reverse()
}