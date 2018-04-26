/* ***************************************************************************
 *
 * BRIEF //
 *   Your firm is implementing its student management prototype in C#.
 *   It's a command-line program, which the registrar's office will use to
 *   add students to the database upon enrollment.
 *
 *   The program should prompt the user for a student's first name; last name;
 *   middle initial; physical address; email address; and phone number.
 *
 *   After each prompt, the program should wait for the user's input.
 *
 *   Once the user has entered every piece of information, the program should
 *   print it all back to the console, and prompt the user to enter 'Y' if the
 *   information is correct, or any other key otherwise.
 *
 *   For now, you should collect the user's response--i.e., 'Y' or otherwise--but
 *   don't worry about handling it. We'll get to that shortly.
 *
 ******************************************************************************/

// What function prints a message to the screen and waits for user input?
// Use it here to collect a student's information--first name, last name, etc.
// ***************************************************************************
// ...Your Code Here...

// Once you've gotten all of that, print it all back to the screen.
// ***************************************************************************
// ...Your Code Here...

// Then, use the same function you used to prompt users for information to ask
// them to confirm whether or not the information is correct. Save their
// response, but don't worry about doing anything with it yet!
// ***************************************************************************
// ...Your Code Here...

using System;

class Program
{
  static void Main(string[] args)
  {

    Console.Write("Please enter your first name: ");
    string firstName = System.Console.ReadLine();

    Console.Write("Please enter your last name: ");
    string lastName = System.Console.ReadLine();

    Console.Write("Please enter your middle initial: ");
    string middleInitial = System.Console.ReadLine();

    Console.Write("Please enter your address: ");
    string address = System.Console.ReadLine();

    Console.Write("Please enter your email address: ");
    string email = System.Console.ReadLine();

    Console.Write("Please enter your phone number: ");
    string phone = System.Console.ReadLine();

    Console.WriteLine("Name: " + firstName + " " + middleInitial + " " + lastName + " Address: " + address + " Email Address: " + email + " Phone Number: " + phone);

    Console.Write(" Enter 'Y' if this information is correct: ");
    string isCorrect = System.Console.ReadLine();

  }

}
