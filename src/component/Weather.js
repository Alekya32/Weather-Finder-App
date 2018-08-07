import React from 'react';

// If we  want to return only elment then alternative way
      const Weather =(props) =>(
        <React.Fragment>
                     {props.city && props.country && <p className="weather__details"> Location: {props.city}, {props.country}</p>}
                    
                     {props.temperature && <p className="weather__details">Temperature: {props.temperature}</p>}
                                    
                     {props.humidity && <p className="weather__details"> Humidity:{props.humidity}</p>}
                                
                     {props.description && <p className="weather__details">Conditions:{props.description}</p>}
                                
                     {props.error && <p className="weather__error">{props.error}</p>}
        </React.Fragment>
      );

// StateLess Component
    // const Weather =(props) =>{
    //     return(
    //         <React.Fragment>
    //             {props.city && props.country && <p> Location: {props.city}, {props.country}</p>}
                
    //             {props.temperature && <p>Temperature: {props.temperature}</p>}
                                
    //             {props.humidity && <p> Humidity:{props.humidity}</p>}
                            
    //             {props.description && <p>Conditions:{props.description}</p>}
                            
    //             {props.error && <p>{props.error}</p>}
    //         </React.Fragment>
    //     );
    // }

// Stateful Component
    // class Weather extends React.Component{
    //     render(){
    //         return(
    //             <React.Fragment>

    //                 {/* instead of using if-else and dispalying we are using && operator such that when statement returns true then only it display */}
    //                 {this.props.city && this.props.country && <p> Location: {this.props.city}, {this.props.country}</p>}
                
    //                 {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                
    //                 {this.props.humidity && <p> Humidity:{this.props.humidity}</p>}
                
    //                 {this.props.description && <p>Conditions:{this.props.description}</p>}
                
    //                 {this.props.error && <p>{this.props.error}</p>}
    //             </React.Fragment>
    //         );
    //     }
    // }

export default Weather;