using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestApp.Models;

namespace TestApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // [HttpPost] //post route
        // public IActionResult HandleFormSubmission () {
        //     return View();
        // }

        // [Route("About")] //get route

        public IActionResult About(string name, string email) //you can pass these variables in the routes 'localhost:5000/Home/About/name=Abby&&email=example@email.com'
        {
            ViewData["name"] = name;
            ViewData["email"] = email;
            
            // ViewData["Message"] = "Thanks for registering" + name + " Your email is " + email;

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
