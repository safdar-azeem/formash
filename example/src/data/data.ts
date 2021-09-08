const form = {
  name: 'John Doe',
  email: 'john@gmail.com',
  bio: 'hello world',
  gender: 'female',
  hobbies: ['football'],
  menu: 'pizza',
  password: '123',
}

export const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(form)
    }, 1000)
  })
}
