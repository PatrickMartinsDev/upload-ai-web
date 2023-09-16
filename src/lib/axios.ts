import axios from 'axios'

// Passo o endereço onde meu backend está rodando
export const api = axios.create({
  baseURL: 'http://localhost:3333'
})