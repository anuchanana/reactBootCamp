function setFilterMonth (updatedfiltermonth)
{
  return (dispatch) => {
        return dispatch(
          {
            type: "monthupdate",
            payload: {selectedColor: updatedfiltermonth.selectedMonth}
          })
  }
}

export default setFilterMonth