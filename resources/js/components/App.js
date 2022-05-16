import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from './Header'
import CategoryList from './category/CategoryList'
import  AddCategory  from './category/AddCategory'
import  EditCategory  from './category/EditCat'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
          <Header />           
          <Routes>           
            <Route path="/category" element={<CategoryList/>} exact />
            <Route path="/addCategory" element={<AddCategory/>} exact />
            <Route path="/editCat/:id" element={<EditCategory/>} exact />
          </Routes> 
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

