using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_klintyk.Models
{
    public class GradeCalculatorModel
    {
        //forces each input to be required
        [Required]
        // forces the value to be between 0-100
        [Range(0, 101)]
        public int Assignments { get; set; }
        [Required]
        [Range(0, 101)]
        public int Quizzes { get; set; }
        [Required]
        [Range(0, 101)]
        public int GroupProjects { get; set; }
        [Required]
        [Range(0, 101)]
        public int Intex { get; set; }
        [Required]
        [Range(0, 101)]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 101)]
        public int Final { get; set; }

    }
}
