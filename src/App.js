import React from 'react';
import Title from './component/Title';
import Form from './component/Form';
import Weather from './component/Weather';

const KEY="22a085d70cfff55db6e7e0719fb42e22";

class App extends React.Component{ // initializing a Component
  state={
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

  //Instead of calling a constructor we are writing an arrow function
  getWeather = async(e) =>{
      e.preventDefault(); // To prevent default behaviour of getWeather() method
      const city=e.target.elements.city.value;
      const country=e.target.elements.country.value;
      const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY}&units=metric`);
      const data = await api_call.json();

     if(city && country){
      console.log(data);
      this.setState({
          temperature:data.main.temp,
          city:data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          description:data.weather[0].description,
          error:""
      })
    }
    else{
      this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please Enter City & Country Fields"
    })
    }
  }
  render(){
    return(
      <React.Fragment>
        <Title/>  
        <Form getWeather={this.getWeather}/> {/* now we can have access to getweather function in Form Component */}
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </React.Fragment>
    );
  }
};

export default App;