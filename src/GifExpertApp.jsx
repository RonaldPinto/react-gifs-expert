// import PropTypes from 'prop-types'

import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifExpertApp = () => {

  const [catergories, setCatergories] = useState(['One Punch'])

  const onAddCategory = (event) => {
    setCatergories([event, ...catergories])
  }

  return (
    <>
      {/* Titulo */}
        <h1>GifExpertApp</h1>

        <AddCategory
        // setCatergories={setCatergories}
          onNewCategory={onAddCategory}
        />
        {catergories.map(category => (
          <GifGrid key={category} category={category} />
        )
        )}
    </>
  )
}

// GifExpertApp.propTypes = {}

export default GifExpertApp