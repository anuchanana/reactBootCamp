import axios from 'axios'

 function productlistaction() {
  return (dispatch) => {
    axios.get('http://localhost:3000/data')
      .then(response => {

        return dispatch(
          {
            type: "Abc",
            payload: {data:response.data,filters:getfilterdata(response.data)}
          }
        )
      })
      .catch(error => {
        console.log("error occur")
      })

  }
}


function getfilterdata(data) {
  console.log(data)
  let colorfilter = []
  let monthfilter = []
  
  for (let listelement of data) {

    for (let prodelement of listelement.Variant) {
      if (colorfilter.indexOf(prodelement.color) <= -1) {
        colorfilter.push(prodelement.color)
      }
      for (let monthelem of prodelement.months) {
        if (monthfilter.indexOf(monthelem) <= -1) {
          monthfilter.push(monthelem)
        }
      }
    }
  }
  return { colorfilter: colorfilter, monthfilter: monthfilter }

}

export default productlistaction