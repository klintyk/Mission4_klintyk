using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission4_klintyk.Models;

namespace Mission4_klintyk.Controllers
{
    public class BaseController : Controller
    {
    //calls the index file!
        public IActionResult Index()
        {
            return View();
        }
        // calls the grade calculator view!
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
