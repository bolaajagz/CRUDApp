import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskstore', {
  state: () => {
    return {
      tasks: [],
      users: []
    }
  },

  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav)
    },
    totalCount() {
      return this.tasks.length
    },
    favsCount() {
      const favTasks = this.tasks.filter((task) => task.isFav)
      return favTasks.length
    }
  },

  actions: {
    async getTasks() {
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()
      this.tasks = data
    },

    async addTask(task) {
      this.tasks.push(task)
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
      })
      if (res.ok) {
        alert('Task Added')
      } else {
        alert('An error occured')
      }
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE'
      })
      if (res.ok) {
        alert('Task Deleted')
      } else {
        alert('An error occured')
      }
    },

    async toggleFavStatus(id) {
      const task = this.tasks.find((task) => task.id === id)
      task.isFav = !task.isFav
      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isFav: task.isFav })
      })
      console.log(res);
      if (res.ok) {
        alert('Liked')
      } else {
        alert('An error occured')
      }
    }, // yet to solve the find puzzle, i dn lost o

    //  the Sign Up function
    async register(signup) {
      this.users.push(signup)
      const res = await fetch('http://localhost:3000/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signup)
      })
      if (res.status === 201) {
        alert('Welcome {Username}')
        console.table(res)
        const data = await res.json()
        console.table(data)
        localStorage.setItem('user-info', JSON.stringify(data))
      }
    },


    async editTask(id) {
      console.log('clicked')
      const newTask = prompt('Enter new task')
      console.log(newTask);
      const data = {
        title: newTask
        // title:this.tasks.push(newTask)
      }
      // this.tasks.push(data)
      this.tasks = this.tasks.push( data)
      console.log(data);
      
    
      const url = `http://localhost:3000/tasks/${id}`
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
console.log(response);
      // if (response.status === 200) {
      //   this.tasks = this.tasks.map((task) => {
      //     if (task.id === id) {
      //       return {
      //         ...task,
      //         // title: this.tasks.push(newTask)
      //         task: newTask
      //         // task:this.tasks.push(newTask)
      //         // console.log(task)
      //       }
      //     } else {
      //       return task
      //     }
      //   })
      // } else {
      //   console.log(data)
      // }
      
      
    }
  }
})

//Account Creation
//   > Post user info to the api
// > Then save the info in the local storage for
//   > This the give me access to log out user (remove item from local storaage)
