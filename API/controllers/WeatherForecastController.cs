using Microsoft.AspNetCore.Mvc;

namespace API.controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
  [HttpGet]
  public IActionResult GetWeather()
  {
    return Ok(
    new[]{
          new
          {
            city = "Vizianagaram",
            temperature= "30",
            unit= "Celcius"
          }
    }
    );
  }
}