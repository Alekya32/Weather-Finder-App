import React from 'react';


//Stateless Component (remove 'this' keyword)
    const Form = props =>{
        const {
            handleReset,
            pristine,
            isSubmitting
        }=props;
        return(
    //     ({
    //     handlers,
    //     meta: { invalid, pristine },
    //   }) => (
      
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter City Name"/>
                <input type="text" name="country" placeholder="Enter Country Name"/>
                <button disabled={isSubmitting}>Get Details..</button>
                <button  onClick={handleReset} disabled={pristine || isSubmitting}>Reset</button> 
            </form>
        );
    }
//Stateful Component
    // class Form extends React.Component{
    //     render(){
    //         return(
    //           <form onSubmit={this.props.getWeather}>
    //               <input type="text" name="city" placeholder="Enter City Name"/>
    //               <input type="text" name="country" placeholder="Enter Country Name"/>
    //               <button>Get Details..</button>
    //           </form>
    //         );
    //     }
    // }

export default Form;