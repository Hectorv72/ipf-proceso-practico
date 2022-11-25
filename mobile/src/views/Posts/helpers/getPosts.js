export default async () => {
  const url = 'http://192.168.216.180:4000/post'
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