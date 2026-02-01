import { useState } from 'react'
import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";

import ProductCard from './week02/bai1-product-card/ProductCard'
import { ButtonDemo } from './week02/bai2-button-component/Button'
import Alert from './week02/bai3-alert/Alert'
import LoginForm from './week02/bai4-form/LoginForm'
import Product from './week02/bai5-responsive-layout/Product'

import StudentInfo from './week03/bai1/StudentInfo'
import Header from './week03/bai1/Header'
import Footer from './week03/bai1/Footer'
import Counter from './week03/bai2/Counter'
import FormInfo from './week03/bai3/FormInfo'
import StatusDemo from './week03/bai4/StatusDemo'
import TodoApp from './week03/bai5/TodoApp'

function App() {
  const [currentBai, setCurrentBai] = useState('w2b1')

  const student = {
    name: 'Chiu Kim Thi',
    mssv: '23633041',
    className: 'DHKTPM19ATT',
  }


  const baiList = [
    { id: 'w2b1', label: 'Week 02 - Bài 1', component: <ProductCard /> },
    { id: 'w2b2', label: 'Week 02 - Bài 2', component: <ButtonDemo /> },
    { id: 'w2b3', label: 'Week 02 - Bài 3', component: <Alert /> },
    { id: 'w2b4', label: 'Week 02 - Bài 4', component: <LoginForm /> },
    { id: 'w2b5', label: 'Week 02 - Bài 5', component: <Product /> },

    {
      id: 'w3b1',
      label: 'Week 03 - Bài 1',
      component: (
        <>
          <Header />
          <StudentInfo
            name={student.name}
            mssv={student.mssv}
            className={student.className}
          />
          <Footer />
        </>
      ),
    },
    { id: 'w3b2', label: 'Week 03 - Bài 2', component: <Counter /> },
    { id: 'w3b3', label: 'Week 03 - Bài 3', component: <FormInfo /> },
    { id: 'w3b4', label: 'Week 03 - Bài 4', component: <StatusDemo /> },
    { id: 'w3b5', label: 'Week 03 - Bài 5', component: <TodoApp /> },


  ]
  const current = baiList.find(b => b.id === currentBai)

  return (
    <div className="app">
      <h2>📘 React Practice</h2>

      <div className="bai-list">
        {baiList.map(bai => (
          <button
            key={bai.id}
            className={currentBai === bai.id ? 'active' : ''}
            onClick={() => setCurrentBai(bai.id)}
          >
            {bai.label}
          </button>
        ))}
      </div>

      <hr />

      <h3>{current.label}</h3>
      {current.component}
    </div>
  )
}

export default App
