/*****************************************************************************
 *
 * Your task is to fill out this Student class. Follow the steps below.
 *
 *   1. Add all the fields your Student class will need. You're free to make
 *      these `public` instead of `private`, if that makes things easier for you.
 *
 *   2. Add a constructor. 
 *
 *      For this exercise, you should use an empty constructor. This looks like
 *      this:
 *
 *      If you made your fields private, you can set all of them in the 
 *      constructor.
 *      
 *         public Student () { }
 *
 *      You can make your attributes either `private` or `public1`. If you make
 *      them public, setting them is as easy as doing this:
 *
 *        Student amy = new Student();
 *        amy.firstName = "Amy";
 *        // etc.
 *
 *      If you make them private, you have to create methods like `setFirstName`,
 *      which would take a string and then set the student's firstName equal to it.
 *
 *      The choice is yours, but feel free to go the simpler `public` route this
 *      time around.
 *
 *   3. Add a method that prints all of the student's attributes.
 *
 *   4. If you have time, add a `static` property that keeps track of how many 
 *      students you've created. This will be identical to what you saw in the User 
 *      class, sw you'll have one line in your previously empty constructor!
 *
 *      This property should be private, and you should provide a get method for it.
 *
 *************************************************************************** */
using System;

namespace Students
{
  public class Student
  {
    public string firstName;

    public string lastName;

    public string middleName;

    public string email;

    public string address;

    public string phoneNumber;

    private static int created = 0;

    public Student (string fn, string ln, string mn, string emailAddress, string streetAddress, string phone)
    {
      this.firstName = fn;
      this.lastName = ln;
      this.middleName = mn;
      this.email = emailAddress;
      this.phoneNumber = phone;

      Studen.created += 1;
    }

    public void PrintAttributes ()
    {
      Console.WriteLine("The student's first name is " + this.firstName);
      Console.WriteLine("The student's last name is " + this.lastName);
      Console.WriteLine("The student's middle name is " + this.middleName);
      Console.WriteLine("The student's email is " + this.email);
      Console.WriteLine("The student's phoneNumber is " + this.phoneNumber);
    }

    public int GetCreated ()
    {
      Console.WriteLine("There are " + Student.created + "students.")
    }

  }

}
