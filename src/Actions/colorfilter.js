
  function setFilterColor (updatedfiltercolor)
  {
    return (dispatch) => {
          return dispatch(
            {
              type: "colorupdate",
              payload: {selectedColor: updatedfiltercolor.selectedColor}
            })
    }
  }
  export default setFilterColor