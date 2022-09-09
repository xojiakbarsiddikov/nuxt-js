export const state = () => ({
  users: [
    {
      name: 'User 1',
      id: 1
    },
    {
      name: 'User 2',
      id: 1
    },
    {
      name: 'User 3',
      id: 1
    }
  ]
})
export const getters = {
  getUsers: state => state.users
}
