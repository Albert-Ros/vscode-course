const carentUser = async () => {
  try {
    const result = await fetch('https://vk.com')
    const data = await result.json()
  } catch (e) {
    console.log(e)
  }
}
getUser()
alert('hi')
